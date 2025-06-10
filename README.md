# ✨ ChatGPT Text Corrector – Chrome Extension (Standalone)

A lightweight Chrome extension that lets you correct text using OpenAI's ChatGPT – **no backend required**. Each user provides their own API key, which is stored locally. All requests go directly to OpenAI.

---

## 🔧 Features

- Corrects grammar and spelling using ChatGPT (GPT-3.5 or GPT-4).
- Simple popup interface.
- No external server or backend.
- API key saved in local browser storage.
- Fully client-side.

---

## 🚀 Installation

1. Clone this repo or [download the ZIP](#).
2. Open `chrome://extensions/` in your browser.
3. Enable **Developer Mode** (top-right corner).
4. Click **"Load unpacked"** and select the project folder.

---

## 🧪 How to Use

1. Click the extension icon in Chrome.
2. Paste your **OpenAI API key** (saved for future use).
3. Enter the text you want to correct.
4. Click **"Correct"**.
5. The corrected version will appear below.

---

## 🔐 Security Notes

- Your API key is only stored locally using `chrome.storage.local`.
- The extension never sends your key to any server other than OpenAI.
- ⚠️ The key is visible via Chrome DevTools (not recommended for sensitive environments).

---

## 🧠 Requirements

- An OpenAI API key: https://platform.openai.com/account/api-keys
- Access to the `gpt-3.5-turbo` or `gpt-4` model

---

## 📁 Project Structure

📦 chatgpt-text-corrector
├── manifest.json
├── popup.html
├── popup.js
└── README.md 

---

## 🧭 Roadmap

- ✅ Standalone version (no backend)
- ⏳ Auto-correct selected text on web pages
- ⏳ Text summarization & rewriting modes
- ⏳ Model selection (GPT-3.5 / GPT-4)
- ⏳ Light/dark theme toggle

---

## 📄 License

MIT – free to use and modify.

---

## ✉️ Author

Created by Paul. Feedback and contributions welcome!
