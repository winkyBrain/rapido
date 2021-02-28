
import FieldButton from '../FirstsField/FieldButton/FieldButton';
import styles from './SecondField.module.css'

const SecondField = ({secondFieldValues, setSecondFieldValues, gameIsFinished}) => {
  const firstFieldArray = Array.from({ length: 4 }, (v, k) => k + 1);

  const maxLength = 1;

  return (
    <div className={styles.secondField}>
      {firstFieldArray.map((number) => {
        return <FieldButton key={number} number={number} values={secondFieldValues} setValues={setSecondFieldValues} maxLength={maxLength} gameIsFinished={gameIsFinished} />;
      })}
    </div>
  );
};

export default SecondField;