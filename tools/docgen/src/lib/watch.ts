import * as ts from 'typescript'

/**
 * Calls `onProgram` with a fresh program whenever a file in the tsconfig's
 * program changes. TypeScript tracks every source file the program uses
 * (including other packages' sources resolved through tsconfig paths),
 * debounces changes and reuses unchanged files between programs.
 */
export function watchProgram(
  tsConfigPath: string,
  onProgram: (program: ts.Program) => void,
): () => void {
  const host = ts.createWatchCompilerHost(
    tsConfigPath,
    {},
    ts.sys,
    ts.createAbstractBuilder,
    // Type errors are the typecheck target's job
    () => undefined,
    () => undefined,
  )

  // Replaces the default, which would emit files and report diagnostics
  host.afterProgramCreate = builderProgram => {
    onProgram(builderProgram.getProgram())
  }

  const watch = ts.createWatchProgram(host)
  return () => watch.close()
}
