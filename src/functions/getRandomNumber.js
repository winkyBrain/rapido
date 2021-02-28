const getRandomNumber = (array, max) => {
  const randomNumber = Math.floor(1 + Math.random() * (max));
  if (array.indexOf(randomNumber) === -1) {
    return randomNumber;
  }
   return getRandomNumber(array, max)
};

export default getRandomNumber;