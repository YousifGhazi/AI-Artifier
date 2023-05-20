import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });
  const openAI = new OpenAIApi(configuration);

  const { prompt } = req.body;

  const AIResponse = await openAI.createImage({
    prompt: prompt,
    size: "1024x1024",
    n: 1,
    response_format: "b64_json",
  });

  const image = AIResponse.data.data[0].b64_json;

  res.status(200).json({ image });
}
