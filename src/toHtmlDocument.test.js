const toHtmlDocument = require('./toHtmlDocument');

test('toHtmlDocument', () => {
  expect(toHtmlDocument('<p>hello</p>')).toBe(`<!DOCTYPE html>
  <html lang="ko">
    <head>
      <title>whiki</title>
    </head>
    <body>
      <header></header>
      <main>
        <h1>whiki</h1>
        <p>hello</p>
      </main>
      <footer></footer>
    </body>
  </html>`);
});
