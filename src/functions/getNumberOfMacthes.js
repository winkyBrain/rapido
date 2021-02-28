const getNumberOfMathes = (randomArray, userArray) => {
  let result = 0;
  userArray.forEach(number => {
    if (randomArray.includes(number)) {
      result++;
    }
  })

  return result;
};

export default getNumberOfMathes;