/**
 * base64를 dataURI로 변환하는 함수
 */
export function base64ToDataURI({
  base64,
  mimeType,
}: {
  base64: string;
  mimeType: string;
}) {
  return `data:${mimeType};base64,${base64}`;
}
