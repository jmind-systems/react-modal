export const createObserver = () => {
  const observers = new Map();

  const subscribe = (key: string, callback: Function) => {
    observers.set(key, callback);
  };

  const dispatch = (key: string, name: string) => observers.get(key)?.(name);

  return {
    subscribe,
    dispatch
  };
};
