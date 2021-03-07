import FieldButton from "../FieldButton/FieldButton";
import styles from './NumbersField.module.css'

const NumbersField = ({
  values,
  setValues,
  gameIsFinished,
  randomNumbers,
  length,
  numbersToSelectCount
}) => {
  const fieldArray = Array.from({ length: length }, (v, k) => k + 1);

  return (
    <div className={styles.field}>
      {fieldArray.map((number) => {
        return (
          <FieldButton
            key={number}
            number={number}
            values={values}
            setValues={setValues}
            maxLength={numbersToSelectCount}
            gameIsFinished={gameIsFinished}
            randomNumbers={randomNumbers}
          />
        );
      })}
    </div>
  );
};

export default NumbersField;