/**
 * base64를 objectURL로 변환하는 함수
 */
export function base64ToBlob({
  base64,
  mimeType,
}: {
  base64: string;
  mimeType: string;
}): Blob {
  // base64를 바이너리 데이터로 변환
  const binaryString = atob(base64);

  // 바이너리 데이터를 Uint8Array로 변환
  const uint8Array = Uint8Array.from(binaryString, (char) =>
    char.charCodeAt(0)
  );

  // Uint8Array를 Blob으로 변환
  return new Blob([uint8Array], { type: mimeType });
}
