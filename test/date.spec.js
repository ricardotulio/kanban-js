import date from '../lib/date'

test('if calculate diffence between two dates', () => {
  const date1 = '2017-05-02'
  const date2 = '2017-05-08'

  expect(date.diff(date1, date2)).toBe(6)
})
