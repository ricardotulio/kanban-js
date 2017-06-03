import { curry } from 'ramda'

export const toFixed = curry((number, precision) => 
  number.toFixed(precision)
)

export default {
  toFixed
}
