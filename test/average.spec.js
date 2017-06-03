import average from '../lib/average'

test('if calculate average', () => {
  expect(average([2, 7, 5])).toBe(4.666666666666667)
})
