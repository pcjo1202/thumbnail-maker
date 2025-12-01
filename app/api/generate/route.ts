import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try {
    const google = new GoogleGenAI({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    });

    const response = await google.models.generateImages({
      model: "imagen-4.0-generate-001",
      prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: "16:9",
      },
    });

    const imageBytes = response.generatedImages?.[0].image?.imageBytes;
    const mimeType = response.generatedImages?.[0].image?.mimeType;

    return NextResponse.json({
      imageBytes,
      mimeType,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}

// const google = createGoogleGenerativeAI({
//   apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
// });

// export async function POST(request: Request) {
//   try {
//     const prompt = `
//   A beautiful image of a cat
//   `;

//     const { image } = await generateImage({
//       model: google.imageModel("gemini-3-pro-image-preview"),
//       n: 1, // 생성할 이미지 개수
//       prompt, // 이미지 생성 프롬프트
//       aspectRatio: "16:9", // 이미지 비율
//     });

//     return NextResponse.json({
//       status: 200,
//       data: {
//         image: image.base64,
//         mediaType: image.mediaType,
//         uint8Array: image.uint8Array,
//       },
//     });
//   } catch (error) {
//     return NextResponse.json({
//       status: 500,
//       error:
//         error instanceof Error ? error.message : "An unknown error occurred",
//     });
//   }
// }
