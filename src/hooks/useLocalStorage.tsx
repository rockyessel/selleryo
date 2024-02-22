'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [mounted, setMounted] = useState(true);
  const [value, setValue] = useState<T>(() => {
    const JSONValue = mounted && localStorage.getItem(key);
    const parseJSONValue = JSONValue ? JSON.parse(JSONValue) : JSONValue;
    if (parseJSONValue) return parseJSONValue;

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    // setMounted(true);
    localStorage.setItem(key, JSON.stringify(value));
    // if (mounted) {
    // }
  }, [key, mounted, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
