import { DependencyList, useEffect } from 'react';

export function useQuickSearchTimer(searchFunction: () => void, dependencyArray: DependencyList, interval = 500) {
  useEffect(() => {
    const quickSearchTimer = setTimeout(searchFunction, interval);

    return () => {
      clearTimeout(quickSearchTimer);
    };
  }, dependencyArray);
}

