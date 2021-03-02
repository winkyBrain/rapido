import makeRandomArray from "../../functions/makeRandomArray";
import FirstField from "../FirstsField/FirstField";
import ResultField from "../ResultField/ResultField";
import SecondField from "../SecondField/SecondField";
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
        <FirstField
          firstRandomNumbers={firstRandomNumbers}
          firstFieldValues={firstFieldValues}
          setFirstFieldValues={setFirstFieldValues}
          gameIsFinished={gameIsFinished}
        />
        <SecondField
          secondRandomNumbers={secondRandomNumbers}
          secondFieldValues={secondFieldValues}
          setSecondFieldValues={setSecondFieldValues}
          gameIsFinished={gameIsFinished}
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
