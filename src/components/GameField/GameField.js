import makeRandomArray from "../../functions/makeRandomArray";
import NumbersField from "../NumbersField/NumbersField";
import ResultField from "../ResultField/ResultField";
import styles from "./GameField.module.css";

const GameField = ({
  firstRandomNumbers,
  firstFieldValues,
  setFirstFieldValues,
  secondRandomNumbers,
  secondFieldValues,
  setSecondFieldValues,
  beginNewGame,
  finishGame,
  gameIsFinished,
  isVictory
}) => {
  return (
    <div className={styles.gameField}>
      <div className={styles.gamePart}>
        <NumbersField 
          values={firstFieldValues}
          setValues={setFirstFieldValues}
          gameIsFinished={gameIsFinished}
          randomNumbers={firstRandomNumbers}
          length={20}
          numbersToSelectCount={8}
        />
        <NumbersField
          randomNumbers={secondRandomNumbers}
          values={secondFieldValues}
          setValues={setSecondFieldValues}
          gameIsFinished={gameIsFinished}
          length={4}
          numbersToSelectCount={1}
        />
        <button disabled={gameIsFinished} onClick={() => {
          setFirstFieldValues(makeRandomArray(8, 20));
          setSecondFieldValues(makeRandomArray(1, 4));
        }}>Выбрать случайным образом</button>
      </div>
      <div className={styles.resultPart}>
        <ResultField
          firstFieldValues={firstFieldValues}
          secondFieldValues={secondFieldValues}
          finishGame={finishGame}
          gameIsFinished={gameIsFinished}
          beginNewGame={beginNewGame}
          isVictory={isVictory}
        />
      </div>
    </div>
  );
};

export default GameField;
