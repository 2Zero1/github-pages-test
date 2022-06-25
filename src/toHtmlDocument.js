const { parse } = require('marked')

module.exports = (contents) => {
  return `<!DOCTYPE html>
  <html lang="ko">
    <head>
      <title>whiki</title>
    </head>
    <body>
      <header></header>
      <main>
        <h1>whiki</h1>
        ${parse(contents)}
      </main>
      <footer></footer>
    </body>
  </html>`;
};
