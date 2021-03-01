import getRandomNumber from "./getRandomNumber";

const makeRandomArray = (countOfNumbers, maxValue) => {
  const result = [];

  for (let i = 0; i < countOfNumbers; i++) {
    const randomNumber = getRandomNumber(result, maxValue);
    result.push(randomNumber);
  }
  return result;
};

export default makeRandomArray;
