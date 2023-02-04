import { createContext, useContext } from 'react';

export const contextFactory = <A extends unknown | null>() => {
  const context = createContext<A | undefined>(undefined);
  const useCtx = () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error('Provider value requried');
    }
    return ctx;
  };
  return [useCtx, context] as const;
};
