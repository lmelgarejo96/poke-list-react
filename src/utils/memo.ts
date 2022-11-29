export const memoize = (fn: Function) => {
  const cache: any = {};
  return async (...args: any) => {
    const stringifiedArgs: string = JSON.stringify(args);
    const result = (cache[stringifiedArgs] =
      typeof cache[stringifiedArgs] === "undefined"
        ? await fn(...args)
        : cache[stringifiedArgs]);
    return result;
  };
};
