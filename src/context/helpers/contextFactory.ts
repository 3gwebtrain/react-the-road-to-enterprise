import { createContext, useContext } from 'react';

export const contextFactory = <A extends unknown | null>() => {
  const useTabsActionsContext = createContext<A | undefined>(undefined);
  const useTabsContext = () => {
    const ctx = useContext(useTabsActionsContext);
    if (ctx === undefined) {
      throw new Error('Provider value requried');
    }
    return ctx;
  };
  return [useTabsContext, useTabsActionsContext] as const;
};
