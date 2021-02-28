const ResultField = ({
  firstFieldValues,
  secondFieldValues,
  finishGame,
  gameIsFinished,
  beginNewGame,
  isVictory
}) => {

  return (
    <>
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
      <div>
        {gameIsFinished ? isVictory ? 'Вы победили' : 'Вы проиграли': null}
      </div>
    </>
  );
};

export default ResultField;
