import isNumber from './isNumber';

const operation = operator => (a, b) => {
  if (!isNumber(a) || !isNumber(b)) return NaN;

  return operator(a, b);
};

export default operation;
