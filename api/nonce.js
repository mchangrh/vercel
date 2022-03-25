const crypto = require("crypto")

export default function handler(request, response) {
  const nonce = crypto.randomBytes(16).toString('base64');
  response.end(nonce);
}