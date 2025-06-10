// Charger la clé sauvegardée
chrome.storage.local.get("apiKey", (data) => {
  if (data.apiKey) {
    document.getElementById("apiKey").value = data.apiKey;
  }
});

document.getElementById("saveKey").addEventListener("click", () => {
  const key = document.getElementById("apiKey").value;
  chrome.storage.local.set({ apiKey: key });
  alert("Clé sauvegardée !");
});

document.getElementById("correct").addEventListener("click", async () => {
  const text = document.getElementById("input").value;
  const { apiKey } = await chrome.storage.local.get("apiKey");

  if (!apiKey) {
    alert("Clé API manquante !");
    return;
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "Tu es un correcteur orthographique et grammatical." },
        { role: "user", content: `Corrige ce texte : "${text}"` }
      ]
    })
  });

  const data = await response.json();
  const output = data.choices?.[0]?.message?.content;
  document.getElementById("output").textContent = output;
});
