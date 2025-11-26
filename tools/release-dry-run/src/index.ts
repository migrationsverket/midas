import { setOutput, setFailed } from '@actions/core'
import { getAffectedProjects } from './getAffectedProjects'
import { getBumpMessage } from './getBumpMessage'

;(async () => {
  try {
    const affectedProjects = await getAffectedProjects()
    const message = getBumpMessage(affectedProjects)
    setOutput('message', message)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    setFailed(message)
  }
})()
