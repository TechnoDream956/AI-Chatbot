<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Arogya Raksha - Indian Healthcare GenAI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Inter", sans-serif;
        background: linear-gradient(135deg, #0e1628 60%, #13394a 100%);
        color: #d1d5db;
        min-height: 100vh;
      }
      .sectionBG {
        background: rgba(24, 28, 36, 0.95);
        border-radius: 1.6rem;
        box-shadow: 0 4px 32px rgba(61, 129, 255, 0.07);
        margin-bottom: 2.5rem;
      }
      .shine-title {
        background: linear-gradient(90deg, #56c9f7, #1ae9af, #3fabff);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-weight: 700;
        letter-spacing: 0.07em;
      }
      /* Signal card styling */
      .signal-card {
        background-color: #1B2545;
        border-radius: 1.8rem;
        padding: 40px 36px 36px 36px;
        box-shadow: 0 0 40px #117d94aa;
        max-width: 360px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .signal-card img {
        border-radius: 8px;
        box-shadow: 0 1px 8px #189;
        margin-bottom: 24px;
        width: 54px;
        height: 36px;
      }
      .signal-text {
        font-size: 1.15rem;
        font-weight: 800;
        letter-spacing: 0.15em;
        color: #33c7cb;
        margin-bottom: 15px;
        text-align: center;
      }
      .signal-buttons {
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
      }
      .signal-button {
        background-color: #fff;
        border-radius: 9999px;
        padding: 8px 34px;
        font-weight: 700;
        cursor: default;
        transition: background-color 0.3s ease;
        user-select: none;
      }
      .signal-button.primary {
        color: #28c5bf;
        border: 2px solid #28c5bf;
      }
      .signal-button.secondary {
        color: #004e8f;
        border: 2px solid #004e8f;
      }
      .signal-button.primary:hover {
        background-color: #e0fffc;
      }
      .signal-button.secondary:hover {
        background-color: #dbe6f7;
      }
      .signal-description {
        color: #8899a6;
        font-size: 0.975rem;
        text-align: center;
        max-width: 280px;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <!-- Navbar -->
    <nav
      class="fixed w-full top-0 bg-[#18202ccc] backdrop-blur-md flex justify-between items-center px-8 py-4 z-50 shadow-lg"
    >
      <span class="shine-title text-2xl select-none cursor-default"
        >Arogya Raksha</span
      >
      <div class="flex space-x-6 text-gray-300 text-base">
        <a href="#features" class="hover:text-cyan-400 transition">Features</a>
        <a href="#benefits" class="hover:text-cyan-400 transition">Benefits</a>
        <a href="#about" class="hover:text-cyan-400 transition">About</a>
        <a href="#future" class="hover:text-cyan-400 transition">Future</a>
        <a
          href="#chat"
          class="px-4 py-2 rounded bg-gradient-to-tr from-cyan-400 to-blue-600 text-white font-semibold hover:scale-105 transition"
          >Try Now</a
        >
      </div>
    </nav>

    <!-- Main content -->
    <main class="pt-24 px-6 max-w-7xl mx-auto">
      <!-- Hero Section -->
      <section
        class="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20"
      >
        <div class="max-w-xl text-center lg:text-left">
          <p class="uppercase text-cyan-400 tracking-widest text-sm font-semibold mb-3">
            GEN AI FOR INDIAN HEALTHCARE
          </p>
          <h1 class="shine-title text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            India’s #1 Healthcare GenAI Platform
          </h1>
          <p class="text-gray-300 text-lg mb-6">
            Connecting you to fast, multilingual health answers —
            <span class="text-cyan-400 font-semibold">anytime, anywhere</span>.
          </p>
          <a
            href="#chat"
            class="rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 px-7 py-4 inline-block text-white font-semibold shadow-md hover:scale-105 transition"
            >Get Started</a
          >
        </div>
        <div class="signal-card">
          <img src="/india-flag.svg" alt="India Flag" />
          <div class="signal-text">SIGNAL : RELIABLE. FAST. INDIAN.</div>
          <div class="signal-buttons" role="group" aria-label="Security and Privacy">
            <button type="button" class="signal-button primary">Data Localization</button>
            <button type="button" class="signal-button secondary">Privacy</button>
          </div>
          <p class="signal-description">
            Trusted by patients & providers for secure, accessible healthcare.
          </p>
        </div>
      </section>

      <!-- Interactive AI Phone Panel Section -->
      <section
        class="flex flex-row justify-center py-10 mb-20"
        role="region"
        aria-label="Interactive AI Phone Panel"
        id="aiPhonePanel"
        tabindex="0"
      >
        <div class="phone-header-main">Arogya Raksha</div>
        <div class="phone-buttons gap-y-3">
          <button
            class="phone-button phone-button-chat panel-btn-selected"
            data-tab="chat"
            id="panelBtnChat"
            aria-pressed="true"
            aria-label="Chatbot mode"
          >
            Chatbot
          </button>
          <button
            class="phone-button phone-button-video"
            data-tab="video"
            id="panelBtnVideo"
            aria-pressed="false"
            aria-label="Video Bot mode"
          >
            Video Bot
          </button>
          <button
            class="phone-button phone-button-docs"
            data-tab="docs"
            id="panelBtnDocs"
            aria-pressed="false"
            aria-label="Live Docs mode"
          >
            Live Docs
          </button>
          <button
            class="phone-button phone-button-web"
            data-tab="web"
            id="panelBtnWeb"
            aria-pressed="false"
            aria-label="Web Pages mode"
          >
            Web Pages
          </button>
          <button
            class="phone-button phone-button-prompt"
            data-tab="prompt"
            id="panelBtnPrompt"
            aria-pressed="false"
            aria-label="Prompt mode"
          >
            Prompt
          </button>
        </div>
        <div class="panel-content mt-5 p-5" id="panelContent" role="main">
          <b>Hi! I′m <span style="color: #45c2d9">Arogya Raksha</span>.</b>
          <br />
          Your AI companion to answer health queries, provide training, and
          help with forms & templates.
          <br /><br />
          Explore multiple channels and customize your experience with various
          AI modes!
        </div>
        <div class="panel-pills mb-3 mr-2" aria-label="Current data sources">
          <span>Classic NLP</span><span>GenAI Doc</span
          ><span>Web Source</span>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="max-w-7xl mx-auto mb-20">
        <div class="text-center mb-12">
          <h2 class="shine-title text-4xl mb-6">AI Features</h2>
          <p class="text-gray-300 max-w-xl mx-auto">
            Multilingual support, customizable knowledge, generative
            voice/video, and robust dialogue management.
          </p>
        </div>
        <div
          class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          role="list"
          aria-label="List of AI Features"
        >
          <div
            class="feature-card p-6 rounded-3xl bg-[#192438] flex items-start gap-5 cursor-pointer hover:bg-[#1d2a55] shadow-lg"
            role="listitem"
          >
            <div class="bg-[#0e639c] p-3 rounded-lg text-white">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M16 12h2a2 2 0 012 2v4H4v-4a2 2 0 012-2h2m12-2v-3a2 2 0 00-2-2h-2a2 2 0 00-2 2v3H4v3h16v-3z"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-1">
                Custom Medical Knowledge
              </h3>
              <p class="text-gray-300 text-sm">
                Integrate local guidelines, doctors’ insights, and personal docs
                to tailor health info.
              </p>
            </div>
          </div>
          <div
            class="feature-card p-6 rounded-3xl bg-[#192438] flex items-start gap-5 cursor-pointer hover:bg-[#1d2a55] shadow-lg"
            role="listitem"
          >
            <div class="bg-[#165d98] p-3 rounded-lg text-white animate-spin">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" stroke-dasharray="4 2" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-1">
                Generative Voice & Video
              </h3>
              <p class="text-gray-300 text-sm">
                Ask questions in your language, get voice and video responses
                for accessibility and engagement.
              </p>
            </div>
          </div>
          <div
            class="feature-card p-6 rounded-3xl bg-[#192438] flex items-start gap-5 cursor-pointer hover:bg-[#1d2a55] shadow-lg"
            role="listitem"
          >
            <div class="bg-[#0f65aa] p-3 rounded-lg text-white">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="7" y="4" width="10" height="16" rx="2" ry="2" />
                <path d="M11 8h2" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-1">
                Dialogue Management (ବାର୍ତ୍ତା ବ୍ୟବସ୍ଥାନ)
              </h3>
              <p class="text-gray-300 text-sm">
                Intuitive patient-friendly flows for health advisories and FAQs.
              </p>
            </div>
          </div>
          <div
            class="feature-card p-6 rounded-3xl bg-[#192438] flex items-start gap-5 cursor-pointer hover:bg-[#1d2a55] shadow-lg"
            role="listitem"
          >
            <div class="bg-[#084a8e] p-3 rounded-lg text-white">
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M11 4v16m4-16v16" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-1">
                Omni-channel Experience
              </h3>
              <p class="text-gray-300 text-sm">
                Deploy on web, WhatsApp, voice, in multiple languages for full
                accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section
        id="benefits"
        class="max-w-7xl mx-auto sectionBG p-10 mb-20"
        role="region"
        aria-labelledby="benefits-header"
      >
        <h2 id="benefits-header" class="shine-title text-4xl mb-7 text-center">
          Why Choose Arogya Raksha?
        </h2>
        <ul
          class="list-disc list-inside max-w-xl mx-auto space-y-3 text-gray-400 text-base"
        >
          <li>Complete data privacy, assuring Indian-hosted cloud security.</li>
          <li>
            Built on official guidelines and expert local medical knowledge.
          </li>
          <li>Frequently updated with latest disease alerts and advisories.</li>
          <li>Planned voice and video AI for diverse learning needs.</li>
          <li>
            Full multilingual support including Odia, Hindi, Bengali and
            English.
          </li>
        </ul>
      </section>

      <!-- Future container -->
      <section
        id="future"
        class="max-w-7xl mx-auto sectionBG p-10 mb-20"
        role="region"
        aria-labelledby="future-header"
      >
        <h2 id="future-header" class="shine-title text-4xl mb-8 text-center">
          What&#39;s Next for Arogya Raksha?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="p-6 bg-[#1b2543] rounded-xl shadow-md">
            <h3 class="text-lg font-semibold mb-2 text-teal-400">
              🤖 Clinical Decision Support
            </h3>
            <p class="text-gray-400">
              Tools to empower healthcare workers with AI-guided triage and
              management systems.
            </p>
          </div>
          <div class="p-6 bg-[#1b2543] rounded-xl shadow-md">
            <h3 class="text-lg font-semibold mb-2 text-indigo-400">
              📊 Community Health Analytics
            </h3>
            <p class="text-gray-400">
              Anonymous reports and analytics helping identify outbreaks and
              health trends.
            </p>
          </div>
          <div class="p-6 bg-[#1b2543] rounded-xl shadow-md">
            <h3 class="text-lg font-semibold mb-2 text-cyan-400">
              🗣 Generative Voice & Video AI
            </h3>
            <p class="text-gray-400">
              Coming soon — AI-powered voice and short video answers in Odia,
              Hindi, Bengali and English.
            </p>
          </div>
          <div class="p-6 bg-[#1b2543] rounded-xl shadow-md">
            <h3 class="text-lg font-semibold mb-2 text-blue-400">
              API for Integrations
            </h3>
            <p class="text-gray-400">
              Open API to embed Arogya Raksha into hospitals, schools and apps.
            </p>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section
        id="about"
        class="max-w-7xl mx-auto sectionBG p-10 mb-20"
        role="region"
        aria-labelledby="about-header"
      >
        <h2 id="about-header" class="shine-title text-4xl mb-8 text-center">
          About Arogya Raksha
        </h2>
        <div class="flex flex-col md:flex-row items-center max-w-5xl mx-auto gap-9">
          <div class="text-gray-300 text-lg space-y-5">
            <p>
              Arogya Raksha is a student-innovated GenAI-powered healthcare
              platform aimed at bridging health knowledge gaps across India,
              offering immediate multilingual support and community-focused
              assistance.
            </p>
            <p>
              Built for SIH with commitment to privacy, accessibility, and
              continuous evolution incorporating latest AI advancements.
            </p>
          </div>
          <div
            class="bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-xl p-6 max-w-xs shadow-lg"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              stroke-width="1"
              viewBox="0 0 24 24"
              class="w-36 h-36 mx-auto"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16" />
            </svg>
            <p class="text-center text-white mt-3 font-semibold">
              Simplifying Health with AI
            </p>
          </div>
        </div>
      </section>

      <!-- Chat Section -->
      <section
        id="chat"
        class="max-w-7xl mx-auto sectionBG p-10 mb-28"
        role="region"
        aria-labelledby="chat-header"
      >
        <h2 id="chat-header" class="shine-title text-3xl mb-6 text-center">
          Try Arogya Raksha Chat
        </h2>
        <div class="flex flex-col items-center max-w-md mx-auto">
          <!-- Language Selector -->
          <div class="flex gap-4 mb-6">
            <button
              class="lang-btn px-5 py-2 rounded border border-teal-400 font-semibold text-teal-400 active-lang"
              data-lang="en"
              aria-pressed="true"
              aria-label="English"
            >
              English
            </button>
            <button
              class="lang-btn px-5 py-2 rounded border border-teal-400 font-semibold text-teal-400"
              data-lang="hi"
              aria-pressed="false"
              aria-label="Hindi"
            >
              Hindi
            </button>
            <button
              class="lang-btn px-5 py-2 rounded border border-teal-400 font-semibold text-teal-400"
              data-lang="bn"
              aria-pressed="false"
              aria-label="Bengali"
            >
              Bengali
            </button>
            <button
              class="lang-btn px-5 py-2 rounded border border-teal-400 font-semibold text-teal-400"
              data-lang="or"
              aria-pressed="false"
              aria-label="Odia"
            >
              Odia
            </button>
          </div>
          <div
            class="phone-mockup w-full"
            role="complementary"
            aria-label="Chat conversation window"
          >
            <div class="phone-header">Arogya Raksha Chat</div>
            <div
              id="chatContent"
              class="px-4 py-5 overflow-auto h-[380px] flex flex-col gap-3"
              tabindex="0"
            ></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-7 text-center text-gray-500 text-sm">
      © 2025 Arogya Raksha · SIH Project by Student Team
    </footer>

    <script>
      // Interactive AI Phone panel movement
      const aiPhone = document.getElementById("aiPhone");
      if (aiPhone) {
        aiPhone.addEventListener("mousemove", (e) => {
          const rect = aiPhone.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          let dx = ((e.clientX - centerX) / (rect.width / 2)) * 25;
          let dy = ((e.clientY - centerY) / (rect.height / 2)) * 25;
          dx = Math.max(Math.min(dx, 25), -25);
          dy = Math.max(Math.min(dy, 25), -25);
          aiPhone.style.transform = `translate(${dx}px, ${dy}px) scale(1.05)`;
        });
        aiPhone.addEventListener("mouseleave", () => {
          aiPhone.style.transform = "translate(0, 0) scale(1)";
        });
      }

      // Content switching inside phone panel
      const panelButtons = {
        chat: document.querySelector(".phone-button-chat"),
        video: document.querySelector(".phone-button-video"),
        docs: document.querySelector(".phone-button-docs"),
        web: document.querySelector(".phone-button-web"),
        prompt: document.querySelector(".phone-button-prompt"),
      };
      const panelContent = document.createElement("div");
      panelContent.classList.add("panel-content", "mt-5", "p-5");
      const phonePanel = document.getElementById("aiPhonePanel") || aiPhone;
      phonePanel.appendChild(panelContent);

      const panelTexts = {
        chat:
          "<b>Hi! I′m <span style='color:#45c2d9;'>Arogya Raksha</span>.</b><br>Your AI companion to answer health queries, provide training, and help with forms & templates.<br><br>Explore multiple channels and customize your experience with various AI modes!",
        video:
          "<b>Video Bot Mode</b><br><br>Watch health explainers, preventive guides, and AI-powered awareness videos.<br><video controls style='width:100%;border-radius:16px;margin-top:12px;'><source src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm' type='video/webm'>Your browser does not support the video tag.</video>",
        docs: "<b>Live Docs</b><br><br>Upload or choose official health guidelines, bulletins, or personal checklists.",
        web: "<b>Web Pages Search</b><br><br>Instantly fetch trustworthy health news, public advisories, FAQs from reputed sources.",
        prompt:
          "<b>Prompt Mode</b><br><br>Give custom instructions or choose from templates:<br><ul><li>Vaccination Form</li><li>Diet Plan</li><li>Health Query Templates</li></ul>",
      };

      function clearSelection() {
        Object.values(panelButtons).forEach((btn) => {
          btn.style.backgroundColor = "";
          btn.classList.remove("selected-panel-btn");
        });
      }

      Object.entries(panelButtons).forEach(([key, btn]) => {
        btn.addEventListener("click", () => {
          clearSelection();
          btn.style.backgroundColor = btn.style.backgroundColor || null;
          btn.classList.add("selected-panel-btn");
          panelContent.innerHTML = panelTexts[key];
        });
      });

      // Initiate content
      if (panelButtons.chat) {
        panelButtons.chat.classList.add("selected-panel-btn");
        if (panelContent && panelTexts.chat) {
          panelContent.innerHTML = panelTexts.chat;
        }
      }

      // Chatbot multilingual messages and chat rendering
      const messages = {
        en: [
          {
            user: "Hello, what are the symptoms of dengue?",
            ai: "Common dengue symptoms: high fever, headache, joint pain, and rash. Seek medical help if suspected.",
          },
          {
            user: "How can I prevent mosquito-borne diseases?",
            ai: "Use mosquito nets, wear full sleeves, and avoid stagnant water. Keep surroundings clean.",
          },
          {
            user: "Can you give me tips for child nutrition during monsoon?",
            ai: "Ensure boiled water, fresh fruit, and green vegetables. Always wash hands before meals.",
          },
          {
            user: "Tell me about diabetes in simple words.",
            ai: "Diabetes means high blood sugar. Eating well and exercising helps keep it controlled.",
          },
        ],
        hi: [
          {
            user: "डेंगू के लक्षण क्या हैं?",
            ai: "डेंगू के सामान्य लक्षणों में तेज बुखार, सिरदर्द, जोड़ों में दर्द और चकत्ते शामिल हैं। डॉक्टर से मिलें।",
          },
          {
            user: "मच्छरों द्वारा होने वाली बीमारियों से कैसे बचें?",
            ai: "मच्छरदानी का उपयोग करें, पूरी आस्तीन के कपड़े पहनें, और जल जमा होने से बचें। साफ-सफाई रखें।",
          },
          {
            user: "बारिश के मौसम में बच्चों के लिए पोषण सुझाव बताएं।",
            ai: "उबला हुआ पानी, ताजा फल और हरी सब्जियां दें। खाने से पहले हाथ धोएं।",
          },
          {
            user: "डायबिटीज़ क्या है?",
            ai: "डायबिटीज़ का मतलब है रक्त में शर्करा की अधिकता। अच्छा खानपान और व्यायाम जरूरी है।",
          },
        ],
        bn: [
          {
            user: "ডেঙ্গুর লক্ষণগুলি কী?",
            ai: "ডেঙ্গুর সাধারণ লক্ষণগুলির মধ্যে রয়েছে জ্বর, মাথাব্যথা, যৌথ ব্যথা এবং ফুসকুড়ি। ডাক্তারের পরামর্শ নিন।",
          },
          {
            user: "মশার কারণে হওয়া রোগ থেকে কিভাবে বাঁচবেন?",
            ai: "মশারি ব্যবহার করুন, দীর্ঘ হাতা জামা পরুন এবং জল জমি এড়িয়ে চলুন। পরিচ্ছন্নতা বজায় রাখুন।",
          },
          {
            user: "বর্ষাকালে শিশুর পুষ্টির জন্য টিপস দিন।",
            ai: "টকানো পানি, তাজা ফল এবং সবুজ শাকসবজি দিন। খাওয়ার আগে হাত ধুয়ে নিন।",
          },
          {
            user: "ডায়াবেটিস কী?",
            ai: "ডায়াবেটিস হল রক্তে চিনি বেড়ে যাওয়া। ভাল খাবার এবং ব্যায়াম প্রয়োজন।",
          },
        ],
        or: [
          {
            user: "ଡେଙ୍ଗୁ ର ଲକ୍ଷଣ କ’ଣ?",
            ai: "ଡେଙ୍ଗୁ ର ସାଧାରଣ ଲକ୍ଷଣ ହେଉଛି ଉଚ୍ଚ ଜ୍ୱର, ମୁଣ୍ଡ ବେଥା, ଯୋଡ଼ ବେଥା ଓ ତ୍ୱଚାରେ ପ୍ରତିକ୍ରିୟା।",
          },
          {
            user: "ମାଛି ଦ୍ୱାରା ହେଉଥିବା ରୋଗ ପ୍ରତିରୋଧ କିପରି କରିବେ?",
            ai: "ମସ୍କିଟୋ ନେଟ୍ ବ୍ୟବହାର କରନ୍ତୁ, ସମ୍ପୂର୍ଣ୍ଣ ପାହାଡ଼ିଆ ପୋଷାକ ପିନ୍ଧନ୍ତୁ ଏବଂ ଥିବା ପାଣି ହଟାନ୍ତୁ।",
          },
          {
            user: "ବର୍ଷାରେ ଶିଶୁମାନଙ୍କ ପୋଷଣ ସମ୍ବନ୍ଧରେ ସୁପାରିଶ କରନ୍ତୁ।",
            ai: "ଉବା ପାଣି, ତାଜା ପ୍ରାଣୀଜ ଏବଂ ସବୁଜ ସାଗ ପ୍ରଦାନ କରନ୍ତୁ। ଖାଦ୍ୟ ପୂର୍ବରୁ ହାତ ଧୋଇବେ।",
          },
        ],
      };

      let selectedLang = "en";

      function setLang(lang) {
        selectedLang = lang;
        document.querySelectorAll(".lang-btn").forEach((btn) => {
          btn.classList.toggle("active-lang", btn.dataset.lang === lang);
          btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
        });
        renderChat();
      }

      function renderChat() {
        const chatArea = document.getElementById("chatContent");
        chatArea.innerHTML = "";
        (messages[selectedLang] || messages.en).forEach(({ user, ai }) => {
          const uDiv = document.createElement("div");
          uDiv.textContent = user;
          uDiv.className = "chat-bubble chat-user";
          chatArea.appendChild(uDiv);

          const aiDiv = document.createElement("div");
          aiDiv.textContent = ai;
          aiDiv.className = "chat-bubble chat-ai";
          chatArea.appendChild(aiDiv);
        });
      }

      document.addEventListener("DOMContentLoaded", () => {
        setLang(selectedLang);
        Object.entries(panelButtons).forEach(([key, btn]) => {
          btn.addEventListener("click", () => {
            Object.entries(panelButtons).forEach(([k, b]) => {
              b.classList.toggle("selected-panel-btn", k === key);
            });
            panelContent.innerHTML = panelTexts[key];
          });
        });
      });
    </script>
  </body>
</html>
