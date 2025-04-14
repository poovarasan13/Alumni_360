const express = require("express");
const router = express.Router();

async function getOpenAIClient() {
  const { OpenAI } = await import("openai");
  return new OpenAI({
    baseURL: process.env.BASE_URL,
    apiKey: process.env.API_KEY,
  });
}

router.post("/", async (req, res) => {
  const { messages } = req.body;
  console.log(messages);

  try {
    const openai = await getOpenAIClient();

    const response = await openai.chat.completions.create({
      model: "deepseek/deepseek-v3-0324",
      messages,
      max_tokens: 512,
    });

    res.json(response.choices[0].message);
  } catch (err) {
    console.error("OpenAI error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;
