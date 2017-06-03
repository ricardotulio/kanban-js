import {
  converge,
  divide,
  sum,
  length,
} from 'ramda'

export default converge(divide, [sum, length])
