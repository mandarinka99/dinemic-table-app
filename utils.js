const getRundomNumber = (min = 0, max = 9999999) => {
  const rundomNumber = Math.round(Math.random() * (max - min) + min);
  return rundomNumber;
};

export default getRundomNumber;
