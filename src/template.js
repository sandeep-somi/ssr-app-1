export default function (title, initialState = {}, content = "") {
  let script = '';
  if (content) {
    script = `
      <script>
        window.__STATE__=${JSON.stringify(initialState)}
      </script>
      <script src="assets/client.js"></script>
    `
  } else {
    script = `<script src="assets/bundle.js"></script>`
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <link href="assets/style.css" rel="stylesheet" />
      </head>
      <body>
        <div class="content">
          <div id="app" class="wrap-inner">
            ${content}
          </div>
        </div>
        ${script}
      </body>
    </html>
  `
}