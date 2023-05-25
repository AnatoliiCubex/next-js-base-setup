export const debounce = (fn: () => void, ms: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: []) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), ms);
  };
};
