import metrics from '../lib/metrics'

const stories = require('./stories.json')
const expected = {
  leadtime: '8.67', 
  cycletime: '5.67',
  cfd: {}
}

test('if generate metrics from stories', () => {
  expect(metrics(stories)).toEqual(expected)
})
