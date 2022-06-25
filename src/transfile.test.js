const transfile  = require('./transfile.js');

test('transfile', () => {
  expect(transfile('[[Html]]')).toBe(`[Html](./Html.html)`);
  expect(transfile('[[Html]][[Html]]')).toBe(`[Html](./Html.html)[Html](./Html.html)`);
});