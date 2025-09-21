from flask import Flask, request, jsonify
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import requests
import os
from datetime import date, datetime
app = Flask(__name__)

# Store question history in memory
question_history = []

# Replace with your Gemini API key
GEMINI_API_KEY = "AIzaSyDwunUemddxBxSfIToDNkdI10aJdUSiK0U"
os.environ["GOOGLE_API_KEY"] = GEMINI_API_KEY

# Initialize LangChain with Gemini
llm = ChatGoogleGenerativeAI(model="gemini-2.5-pro")

# Language names mapping
language_names = {
    "en": "English",
    "hi": "Hindi",
    "or": "Odia"
}

# Improved prompt for health responses (flexible structure, contextual with history)
prompt = PromptTemplate(
    input_variables=["question", "web_data", "language_name", "recent_history"],
    template="""You are a health educator for rural Odisha. Respond in {language_name} using simple, easy-to-understand words suitable for villagers with limited education.

Current question: '{question}'

Recent conversation history (last 3 questions for context): {recent_history}

Available data to reference: {web_data}

Guidelines:
- Be empathetic, supportive, and encouraging.
- Structure your response naturally based on what makes sense for the question. Only use bullet points if they help organize information clearly (e.g., for lists of symptoms or steps).
- Cover relevant aspects: symptoms (if applicable), causes, prevention, treatment options, vaccines (if relevant), when to see a doctor, and any local Odisha context or current outbreaks.
- If the question relates to previous ones in the history, reference them briefly to show continuity (e.g., "As you asked about symptoms earlier...").
- If data is limited, explain simply and suggest general healthy practices.
- Keep response concise (under 350 words total).
- Always end with: 'यह सलाह सामान्य है। अपनी व्यक्तिगत स्थिति के लिए डॉक्टर से परामर्श करें।' (if Hindi/Odia) or 'This is general advice. Consult a doctor for personal guidance.' (if English).

Respond helpfully and appropriately to the current question, building on any relevant context from history."""
)
chain = LLMChain(llm=llm, prompt=prompt)

# Improved language detection
def detect_language(text):
    for c in text:
        o = ord(c)
        if 0x0900 <= o <= 0x097F:
            return "hi"  # Hindi (Devanagari)
        elif 0x0B00 <= o <= 0x0B7F:
            return "or"  # Odia
    return "en"  # Default English

def get_health_info(question, language):
    """Search the web using DuckDuckGo Instant Answer API for health details."""
    ddg_url = "https://api.duckduckgo.com/"
    # Focus on reliable sources
    search_query = f"{question} symptoms prevention vaccines site:who.int OR site:cdc.gov OR site:mohfw.gov.in"
    params = {
        "q": search_query,
        "format": "json",
        "no_html": 1,
        "skip_disambig": 1
    }
    try:
        response = requests.get(ddg_url, params=params)
        if response.status_code == 200:
            data = response.json()
            abstract = data.get("Abstract", "")
            if abstract:
                return abstract[:400] + "..." if len(abstract) > 400 else abstract
            # Fallback to related topics
            related = data.get("RelatedTopics", [])
            if related:
                info = " ".join([t.get("Text", "") for t in related[:3] if "Text" in t])
                return info[:400] + "..." if len(info) > 400 else info
    except Exception as e:
        pass
    return "No specific health information found from reliable sources."

def get_outbreak_info():
    """Search for current outbreaks in Odisha."""
    today = date.today()
    query = f"current disease outbreaks Odisha India {today.year}"
    ddg_url = "https://api.duckduckgo.com/"
    params = {
        "q": query,
        "format": "json",
        "no_html": 1,
    }
    try:
        response = requests.get(ddg_url, params=params)
        if response.status_code == 200:
            data = response.json()
            abstract = data.get("Abstract", "")
            if abstract:
                return abstract[:300]
            # Fallback to related topics
            related = data.get("RelatedTopics", [])
            if related:
                info = " ".join([t.get("Text", "") for t in related[:2] if "Text" in t])
                return info[:300]
    except Exception as e:
        pass
    return "No current outbreak reports in Odisha at this time."

def get_wiki_info(query, lang="en"):
    """Fetch additional information from Wikipedia in the specified language."""
    # Use first word as title for simplicity
    title = " ".join(query.split()[:2]).capitalize()
    wiki_base = f"https://{lang}.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "titles": title,
        "prop": "extracts",
        "exintro": True,
        "explaintext": True,
    }
    try:
        response = requests.get(wiki_base, params=params)
        if response.status_code == 200:
            data = response.json()
            pages = data.get("query", {}).get("pages", {})
            if pages:
                page = next(iter(pages.values()))
                extract = page.get("extract", "")
                if extract:
                    return extract[:400] + "..."  # Truncate for brevity
        return "No additional Wikipedia information found."
    except Exception as e:
        return f"Wikipedia error: {str(e)}."

def get_recent_history():
    """Get the last 3 questions from history as context."""
    if len(question_history) == 0:
        return "No previous questions."
    
    # Sort by timestamp to ensure chronological order (newest last)
    sorted_history = sorted(question_history, key=lambda x: x['timestamp'])
    recent = sorted_history[-3:]  # Last 3 questions
    
    history_text = ""
    for item in recent:
        history_text += f"- {item['timestamp']}: {item['question']} (in {item['language']})\n"
    
    return history_text

@app.route("/health_query", methods=["POST"])
def health_query():
    data = request.get_json()
    if not data or "question" not in data:
        return jsonify({"error": "Missing 'question' in request body"}), 400

    question = data["question"].strip()
    language = data.get("language", detect_language(question))  # Optional language override
    language_name = language_names.get(language, "English")

    # Store question with timestamp
    question_history.append({
        "question": question,
        "language": language_name,
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    })

    # Get recent history for context
    recent_history = get_recent_history()

    # Fetch health data from web search
    web_data = get_health_info(question, language)

    # Fetch additional data from Wikipedia
    wiki_data = get_wiki_info(question, language)

    # Fetch outbreak info
    outbreak_data = get_outbreak_info()

    # Combine data
    combined_data = f"Web info: {web_data}. Wikipedia: {wiki_data}. Outbreaks: {outbreak_data}"

    # Generate response with LangChain
    response = chain.run(
        question=question, 
        web_data=combined_data, 
        language_name=language_name,
        recent_history=recent_history
    )

    return jsonify({
        "question": question,
        "language": language_name,
        "response": response,
        "recent_history": recent_history  # Optional: include for debugging
    })

@app.route("/question_history", methods=["GET"])
def get_question_history():
    return jsonify({
        "history": question_history
    })

@app.route("/")
def home():
    return jsonify({
        "message": "Odisha Health AI API. POST to /health_query with {'question': 'health question'}. GET /question_history for past questions."
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5001)))