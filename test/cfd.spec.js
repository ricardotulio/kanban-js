import cfd from '../lib/cfd'

const stories = require('./stories.json')

test('if generate cfd data', () => {
  expect(cfd(stories)).toEqual({})
})
