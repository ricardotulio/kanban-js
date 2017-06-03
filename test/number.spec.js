import number from '../lib/number'

test('if retrivies number with defined precision', () => {
  expect(number.toFixed(5.666666, 2)).toBe('5.67')
})
