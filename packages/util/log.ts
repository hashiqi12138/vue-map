function autoRun(func: ConsoleLog, prefix: string) {
  return ((...args: any[]) => {
    return func.bind(
      {},
      `%c[VUEMAP Runtime] [${prefix}] `,
      "color: red",
      ...args
    );
  })();
}

export enum AppModules {
  CORE = "CORE",
  PLUGIN = "PLUGIN",
  UTIL = "UTIL",
}

export type ConsoleLog = typeof console.log;

export type ClassLogger = {
  -readonly [key in keyof typeof AppModules]: ConsoleLog;
} & ConsoleLog;

function attachModule<T extends keyof typeof AppModules>(
  func: ConsoleLog
): {
  [key in T]: typeof func;
} & ConsoleLog {
  (func as ClassLogger)[AppModules.CORE] = autoRun(func, AppModules.CORE);
  (func as ClassLogger)[AppModules.PLUGIN] = autoRun(func, AppModules.PLUGIN);
  (func as ClassLogger)[AppModules.UTIL] = autoRun(func, AppModules.UTIL);

  return func as unknown as {
    [key in T]: typeof func;
  } & ConsoleLog;
}

export class Logger {
  static log = attachModule(console.log);
  static info = attachModule(console.info);
  static warn = attachModule(console.warn);
  static error = attachModule(console.error);
  static debug = attachModule(console.debug);
}
