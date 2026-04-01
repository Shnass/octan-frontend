import OpenAI from "openai";
import { Release } from "@/types/release";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function GeneratedDescription(release:Release) {

  const prompt = `
You are writing descriptions for a vinyl record store.

Rules:
- Use only the provided metadata
- Do not invent facts
- If there are fewer than 3 factual details return: INSUFFICIENT_DATA
- Otherwise write few paragraphes of text (starting from 100 words and up to 300 if there is enough content)
- Provide also the Ukrainian version of this text
- Avoid generic phrases like: "iconic album", "timeless masterpiece", "critically acclaimed"
- Also provide short description (up to 20 words max)
- Also provide short description in ukrainian (up to 20 words max)
- Avoid em-dashes
- Preffer labels' presskits and annotations as a source of information, also check online magazines like RA.co, factmag, wire etc, only then check the other record stores
- Avoid obvious constructions as "RELEASE NAME is a RELEASE YEAR release from ARTIST, issued by LABEL", all such information is avaialble on the page and there is no need to duplicate it


Metadata:
Artist: ${release.artist}
Title: ${release.name}
Label: ${release.label}
Year: ${release.year}
Genre: ${release.genre}

Return JSON:

{
"description": "...",
"short_description": "...",
"description_ua": "...",
"short_description_ua": "...",
}
`;

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });

  const text = response.output_text.trim();

  console.log(text)

  if (text === "INSUFFICIENT_DATA") {
    return null;
  }


  //return JSON.parse(text).description;
}