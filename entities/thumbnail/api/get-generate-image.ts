interface GenerateImageResponse {
  imageBytes: string;
  mimeType: string;
}

export async function getGenerateImage(): Promise<GenerateImageResponse> {
  const response = await fetch("http://localhost:3000/api/generate", {
    method: "POST",
    body: JSON.stringify({
      prompt: "A beautiful image of a cat",
    }),
  });
  const data = await response.json();
  return data;
}
