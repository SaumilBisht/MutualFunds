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
