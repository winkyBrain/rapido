import FirstField from "../FirstsField/FirstField";
import ResultField from "../ResultField/ResultField";
import SecondField from "../SecondField/SecondField";
import styles from "./GameField.module.css";

const GameField = ({
  firstFieldValues,
  setFirstFieldValues,
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
          firstFieldValues={firstFieldValues}
          setFirstFieldValues={setFirstFieldValues}
          gameIsFinished={gameIsFinished}
        />
        <SecondField
          secondFieldValues={secondFieldValues}
          setSecondFieldValues={setSecondFieldValues}
          gameIsFinished={gameIsFinished}
        />
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
