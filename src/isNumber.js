function isNumber(value) {
  const type = typeof value;

  if (
    value !== null &&
    type !== 'number' &&
    !(value instanceof Number) &&
    value !== true
  ) return false;

  return true;
}

export default isNumber;
