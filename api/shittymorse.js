/*
  Morse code, but with en and em dashes instead of dots and dashes.

  Please don't kill me
*/
export default function handler(request, response) {
  const text = request.body;
  if (!text) {
    return response.status(400).end("Please include text in the request body")
  }
  // repalce dot with en dash
  const morse = text.replace(/\./gi, '–')
    .replace(/-/gi, '—')
  response.end(morse);
}