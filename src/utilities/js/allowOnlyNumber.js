const pattern = /^[0-9]*$/;
const allowNumberOnly = (cardNumber) => {
  return cardNumber.match(pattern) !== null;
};

export default allowNumberOnly;
