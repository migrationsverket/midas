import { PromiseExecutor } from '@nx/devkit'
import { CreateExecutorSchema } from './schema'
import { Application } from 'typedoc'

const runExecutor: PromiseExecutor<CreateExecutorSchema> = async options => {
  console.log('Executor ran for Create', options)

  const project = Application.bootstrap(options)

  return {
    success: true,
  }
}

export default runExecutor
