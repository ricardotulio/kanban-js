import cycletime from '../lib/cycletime'

const stories = require('./stories.json')

test('if calculate cycle time', () => {
  expect(cycletime(stories)).toBe('5.67')
})
