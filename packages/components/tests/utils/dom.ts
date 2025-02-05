import fs from "fs"

/**
 * Logs the current DOM to a file
 * allowing you to inspect the rendered HTML from a test in your browser
 */
export function logDom() {
  fs.writeFile(
    "./test-dom.html",
    `<html lang="sv"><head><title>Test page</title>${document.head.innerHTML}</head><body>${document.body.innerHTML}</body></html>`,
    (error) => {
      if (error) throw new Error(error.message);
    }
  );
}