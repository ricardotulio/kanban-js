import leadtime from './leadtime'
import cycletime from './cycletime'
import cfd from './cfd'

export const metrics = (stories) => {
  return {
    leadtime: leadtime(stories),
    cycletime: cycletime(stories),
    cfd: cfd(stories),
  }

}
export default metrics
