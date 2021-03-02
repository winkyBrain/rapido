import FieldButton from "../FieldButton/FieldButton";
import styles from "./FirstField.module.css";

const FirstField = ({
  firstFieldValues,
  setFirstFieldValues,
  gameIsFinished,
  firstRandomNumbers,
}) => {
  const firstFieldArray = Array.from({ length: 20 }, (v, k) => k + 1);

  const maxLength = 8;

  return (
    <div className={styles.firstField}>
      {firstFieldArray.map((number) => {
        return (
          <FieldButton
            key={number}
            number={number}
            values={firstFieldValues}
            setValues={setFirstFieldValues}
            maxLength={maxLength}
            gameIsFinished={gameIsFinished}
            randomNumbers={firstRandomNumbers}
          />
        );
      })}
    </div>
  );
};

export default FirstField;
