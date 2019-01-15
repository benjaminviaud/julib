const isObject = value => (
  value !== null && (typeof value === 'object' || typeof value === 'function')
);

module.exports = isObject;
