"use client";
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: SetValue<T>) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      if (typeof window !== "undefined") {
        // browser code
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error) {
      // If error also return initialValue
      console.log(error);
    }
    return initialValue; // Return initialValue if an error occurs
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      // Save state
      if (typeof window !== "undefined") {
        // browser code
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
