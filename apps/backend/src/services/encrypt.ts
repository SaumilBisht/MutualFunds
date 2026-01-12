import crypto from "crypto";
const ALGORITHM = "aes-256-cbc";
const KEY = crypto.createHash("sha256").update(process.env.ENCRYPTION_KEY || "").digest();
const IV = Buffer.alloc(16, 0);

export function encrypt(text: string) {
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
  let enc = cipher.update(text, "utf8", "hex");
  enc += cipher.final("hex");
  return enc;
}
export function decrypt(hex: string) {
  const decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
  let out = decipher.update(hex, "hex", "utf8");
  out += decipher.final("utf8");
  return out;
}

// Safer variant: if input is not valid hex (even-length, hex chars),
// return the input as-is instead of throwing. Useful for legacy/plain values in DB.
export function safeDecrypt(maybeHex: string) {
  try {
    if (typeof maybeHex !== "string") return maybeHex as any;
    const isHex = /^[0-9a-fA-F]+$/.test(maybeHex) && maybeHex.length % 2 === 0;
    if (!isHex) return maybeHex; // not hex -> assume already plain
    return decrypt(maybeHex);
  } catch {
    return maybeHex;
  }
}
