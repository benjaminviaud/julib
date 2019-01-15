function operation(operator) {
  return (a, b) => {
    const typeA = typeof a;
    const typeB = typeof b;

    if (
      (a !== null &&
        typeA !== 'number' &&
        typeA !== 'string' &&
        typeA !== 'boolean' &&
        !(a instanceof Number) &&
        !(a instanceof String)) ||
      (b !== null &&
        typeB !== 'number' &&
        typeB !== 'string' &&
        typeB !== 'boolean' &&
        !(b instanceof Number) &&
        !(b instanceof String))
    ) {
      return NaN;
    }

    return operator(a, b);
  };
}

export default operation;
