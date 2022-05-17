import allowNumberOnly from "./allowOnlyNumber";

const allowTowDecimalNumberOnly = (limit) => {
  let pred;
  let dec;
  if (limit.indexOf(".") >= 0) {
    pred = limit.split(".")[0];
    dec = limit.split(".")[1];
    if (!allowNumberOnly(pred)) {
      return limit.slice(0, -1);
    }
    if (!allowNumberOnly(dec)) {
      return limit.slice(0, -1);
    }
    limit = `${pred}.${dec}`;
  }
  if (
    limit.substr(limit.length - 1) !== "." &&
    !allowNumberOnly(limit.replace(".", ""))
  ) {
    return limit.slice(0, -1);
  }
  return limit.indexOf(".") >= 0
    ? limit.substr(0, limit.indexOf(".")) + limit.substr(limit.indexOf("."), 3)
    : limit;
};

export default allowTowDecimalNumberOnly;
