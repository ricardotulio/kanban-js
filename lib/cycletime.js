import average from './average'
import { diff } from './date'
import { toFixed } from './number'
import { 
  __,
  map,
  pipe,
} from 'ramda'

const cycletime = (story) =>
  diff(story.started, story.finished)

export default pipe(
  map(cycletime),
  average,
  toFixed(__, 2),
)
