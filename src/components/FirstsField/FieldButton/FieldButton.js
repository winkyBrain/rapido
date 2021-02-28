import { useEffect, useState } from 'react';
import styles from './FieldButton.module.css';
import cn from 'classnames';

const FieldButton = ({number, values, setValues, maxLength, gameIsFinished}) => {

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

  const classes = cn(styles.button, {
    [styles.selected]: selected
  })

  return (
    <div className={classes} onClick={click}>
      {number}
    </div>
  )
};

export default FieldButton;