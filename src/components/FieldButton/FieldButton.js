import { useEffect, useState } from 'react';
import styles from './FieldButton.module.css';
import cn from 'classnames';

const FieldButton = ({number, values, setValues, maxLength, gameIsFinished, randomNumbers}) => {

  const [selected, setSelected] = useState(values.includes(number));

  useEffect(() => {
    setSelected(values.includes(number))
  }, [values, setSelected, number]);

  const click = () => {
    if (!gameIsFinished) {
      if (!values.includes(number) && values.length < maxLength) {
        setValues([...values, number]);
        setSelected(true);
      } else {
        setValues(values.filter(item => item !== number));
        setSelected(false);
      }
    }
  };

  const gameInProgressStyles = cn(styles.button, {
    [styles.selected]: selected
  });

  const gameIsFinishedStyles = cn(styles.button, {
    [styles.selected]: values.includes(number) && randomNumbers.includes(number),
    [styles.wrong]: values.includes(number) && !randomNumbers.includes(number),
    [styles.winning]: !values.includes(number) && randomNumbers.includes(number),
  });

  return (
    <div className={gameIsFinished ? gameIsFinishedStyles : gameInProgressStyles} onClick={click}>
      {number}
    </div>
  )
};

export default FieldButton;