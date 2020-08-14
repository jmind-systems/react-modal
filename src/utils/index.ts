const generateKey = (key: string, name: string): string => `${key}_${name}`;

export const createObserver = () => {
  const observers = new Map();

  const subscribe = (key: string, name: string, callback: Function) => {
    observers.set(generateKey(key, name), callback);
  };

  const unsubscribe = (key: string, name: string) => {
    observers.delete(generateKey(key, name));
  };

  const dispatch = (key: string, name: string, param?: any) => observers.get(generateKey(key, name))?.(param);

  return {
    subscribe,
    dispatch,
    unsubscribe
  };
};
