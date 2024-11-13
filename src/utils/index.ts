export function uuid(): string {
  const timestamp = new Date().getTime();
  const randomValues = new Uint8Array(16);
  window.crypto.getRandomValues(randomValues);
  randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
  randomValues[8] = (randomValues[8] & 0x3f) | 0x80;
  const timestampHex = timestamp.toString(16).padStart(12, '0');
  const uuid = `${timestampHex.slice(0, 8)}-${timestampHex.slice(8, 12)}-${randomValues[6].toString(16)}${randomValues[7].toString(16)}-${randomValues[8].toString(16)}${randomValues[9].toString(16)}-${Array.from(
    randomValues.slice(10),
  )
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')}`;

  return uuid;
}
