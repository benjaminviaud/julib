import add from '../src/add';

describe('Utilities', () => {
  describe('add()', () => {
    it('should be a function', () => {
      const addFn = typeof add;
      expect(addFn).toBe('function');
    });

    it('should return sum when passed two number', () => {
      expect(add(6, 4)).toBe(10);
      expect(add(5.5, 4.5)).toBe(10);
      expect(add(20, -10)).toBe(10);
      expect(add(10, -20)).toBe(-10);
      expect(add(9, true)).toBe(10);
      expect(add(10, null)).toBe(10);
      expect(add(8, Object(2))).toBe(10);
      expect(add(null, null)).toBe(0);
    });

    it('should return NaN when data type is not a number', () => {
      expect(add(6, undefined)).toBe(NaN);
      expect(add(6, {})).toBe(NaN);
      expect(add(6, Object('2'))).toBe(NaN);
      expect(add(6, 'string')).toBe(NaN);
    });
  });
});
