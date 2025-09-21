import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Landing page
        chat: resolve(__dirname, "chat.html"), // Chatbot page
      },
    },
  },
});
