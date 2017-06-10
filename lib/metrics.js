import leadtime from './leadtime'
import cycletime from './cycletime'
import cfd from './cfd'
import { applySpec } from 'ramda'

export const metrics = applySpec({
  leadtime,
  cycletime,
  cfd,
})

export default metrics
