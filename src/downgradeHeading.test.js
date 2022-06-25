const downgradeHead = require('./downgradeHeading');

test('downgradeHead', () => {
  expect(downgradeHead('# Head')).toBe('## Head');
});