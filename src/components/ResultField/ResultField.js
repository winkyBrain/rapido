import styles from './ResultField.module.css'

const ResultField = ({
  firstFieldValues,
  secondFieldValues,
  finishGame,
  gameIsFinished,
  beginNewGame,
  isVictory
}) => {

  return (
    <div className={styles.resultField}>
      {gameIsFinished ? (
        <button onClick={beginNewGame}>Начать новую игру</button>
      ) : (
        <button
          onClick={finishGame}
          disabled={firstFieldValues.length < 8 || secondFieldValues.length < 1}
        >
          Узнать результат
        </button>
      )}
      <div className={styles.result}>
        {gameIsFinished ? isVictory ? 'Вы победили' : 'Вы проиграли': null}
      </div>
    </div>
  );
};

export default ResultField;
