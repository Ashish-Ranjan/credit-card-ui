const validateLength = (name) => {
  return name.trim().length === 0 ? true : false;
};

export default validateLength;
