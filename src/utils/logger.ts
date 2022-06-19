type LoggerPrefix = 'common';

export function withPrefix(prefix: LoggerPrefix) {
  return (info: string, ...args: any[]) => {
    // eslint-disable-next-line
    return console.error(
      [prefix, info].join('-'),
      args
        .map<string>((_) => {
          if (typeof _ === 'string') {
            return _;
          }

          if (_ instanceof Error) {
            return _?.message;
          }

          return JSON.stringify(_);
        })
        .join(' | '),
    );
  };
}
