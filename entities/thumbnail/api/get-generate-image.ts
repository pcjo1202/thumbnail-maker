interface GenerateImageResponse {
  success: boolean;
  imageBytes: string;
  mimeType: string;
}

export async function getGenerateImage({
  blogTitle,
  shortDescription,
  relatedTags,
  mood,
}: {
  blogTitle: string;
  shortDescription: string;
  relatedTags: string;
  mood: string;
}): Promise<GenerateImageResponse> {
  const promptTemplate = `
A dynamic tech blog thumbnail image.

**Core Concept:** The visual representation should focus on the intersection of "${blogTitle}" and "${shortDescription}".
**Key Visuals:** Focus on keywords: **${relatedTags.split(",").join("**, **")}**.

**Visual Style:** ${mood} design, clean composition, 3D rendered abstract shapes, cinematic lighting, 8K.

**Text Generation:**
**Crucially, the main text on the image MUST be in Korean (Hangul): "${blogTitle}".**
The supplementary text should be in English: "${shortDescription}".
Use a **bold, modern, sans-serif font** for maximum readability. The text should be placed clearly in a space designed for titles.

**Exclusion (Negative Prompt):** blurry, low resolution, amateur, poorly drawn, signature, watermark, multiple subjects, human faces, deformed.
**Aspect Ratio:** 16:9 for a wide thumbnail.
`;

  const response = await fetch("http://localhost:3000/api/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt: promptTemplate,
    }),
  });

  const data = await response.json();
  return data;
}
