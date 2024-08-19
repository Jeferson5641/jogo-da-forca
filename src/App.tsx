import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import HangmanDrawing from "./components/Hangman-Drawing";
import HangmanWord from "./components/Hangman-Word";
import Keyboard from "./components/Keyboard";
import { words } from "./components/Words";
import useKeyPress from "./hooks/UseKeyPress";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const HangmanPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400;
`;

function App() {
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const correctGuesses = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  function addGuessedLetters(letter: string) {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((guessedLetters) => [...guessedLetters, letter]);
  }

  const isLoser = incorrectGuesses.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  useKeyPress(addGuessedLetters, guessedLetters);

  return (
    <Wrapper>
      {isLoser &&
        `Você perdeu.
        Atualize a pagina para jogar novamente`}
      {isWinner &&
        `Parabéns.
        Você acertou!
        Atualize a pagina para jogar novamente`}
      <HangmanPart>
        <h2>Front Beginners - Jogo da Forca</h2>
        <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      </HangmanPart>
      <HangmanWord guessedLetters={guessedLetters} word={wordToGuess} />
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={correctGuesses}
        inactiveLetters={incorrectGuesses}
        addGuessedLetters={addGuessedLetters}
      />
    </Wrapper>
  );
}

export default App;
