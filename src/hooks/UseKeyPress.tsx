import { useEffect } from "react";

function useKeyPress(
  addGuessedLetters: (key: string) => void,
  guessedLetters: string[]
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]+([a-z]+)*$/i)) return;

      e.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetters, guessedLetters]);
}

export default useKeyPress;
