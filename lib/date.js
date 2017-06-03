import moment from 'moment'
import { curry } from 'ramda'

const buildDate = date => moment(date, 'YYYY-MM-DD')

export const diff = curry((start, end) => 
  buildDate(end).diff(buildDate(start), 'days')
)

export default {
  diff
}
