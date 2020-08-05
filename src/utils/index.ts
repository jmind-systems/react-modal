const generateKey = (key: string, name: string): string => `${key}_${name}`;

export const createObserver = () => {
  const observers = new Map();

  const subscribe = (key: string, name: string, callback: Function) => {
    observers.set(generateKey(key, name), callback);
  };

  const dispatch = (key: string, name: string) => observers.get(generateKey(key, name))?.();

  return {
    subscribe,
    dispatch
  };
};
