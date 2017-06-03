import average from './average'
import { diff } from './date'
import { toFixed } from './number'
import {
  map,
  pipe,
  __,
} from 'ramda'

const leadtime = story => 
  diff(story.created, story.finished)

export default pipe(
  map(leadtime),
  average,
  toFixed(__, 2)
)
