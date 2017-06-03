import leadtime from '../lib/leadtime'

const stories = require('./stories.json')

test('if calculate lead time', () => {
  expect(leadtime(stories)).toBe('8.67')
})
