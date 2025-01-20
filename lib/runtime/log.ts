const wrappedCoreLog = () => {
  return (prefix: string, error: string | Error, ...args: any[]) => {
    return console.error.bind(
      this,
      `%c[VUEMAP CORE] [${prefix}] `,
      "color: red",
      error,
      ...args
    );
  };
};

const wrappedRuntimeLog = () => {
  return (prefix: string, error: string | Error, ...args: any[]) => {
    return console.error.bind(
      this,
      `%c[VUEMAP Runtime] [${prefix}] `,
      "color: red",
      error,
      ...args
    );
  };
};

export class Logger {
  static core = wrappedCoreLog();

  static runtime = wrappedRuntimeLog();
}
