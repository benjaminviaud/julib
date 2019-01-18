import isObj from '../src/isObj';

describe('Utilities', () => {
  describe('isObj()', () => {
    it('should return true when passed an object literal', () => {
      expect(isObj({})).toBe(true);
      expect(isObj({ foo: true })).toBe(true);
    });

    it('should return true when passed an object with wrapper', () => {
      expect(isObj(new Object())).toBe(true); // eslint-disable-line no-new-object
      expect(isObj(Object(0))).toBe(true);
      expect(isObj(Object(false))).toBe(true);
      expect(isObj(Object('foo'))).toBe(true);
    });

    it('should return true when passed a native object', () => {
      expect(isObj(new Date())).toBe(true);
      expect(isObj(new RegExp())).toBe(true);
      expect(isObj(/./)).toBe(true);
    });

    it('should return true when passed an object with the create method', () => {
      expect(isObj(Object.create(null))).toBe(true);
    });

    it('should return true when passed an object arguments', () => {
      expect(isObj(arguments)).toBe(true); // eslint-disable-line no-undef
    });

    it('should return true when passed an array', () => {
      expect(isObj([])).toBe(true);
      expect(isObj(['foo', 'bar'])).toBe(true);
    });

    it('should return true when passed a function', () => {
      expect(isObj(() => {})).toBe(true);
    });

    it('should return false when passed null', () => {
      expect(isObj(null)).toBe(false);
    });

    it('should return false when passed undefined', () => {
      expect(isObj(undefined)).toBe(false);
    });

    it('should return false when passed NaN', () => {
      expect(isObj(NaN)).toBe(false);
    });

    it('should return false when passed a string', () => {
      expect(isObj('')).toBe(false);
    });

    it('should return false when passed a number', () => {
      expect(isObj(0)).toBe(false);
    });

    it('should return false when passed a boolean', () => {
      expect(isObj(true)).toBe(false);
      expect(isObj(false)).toBe(false);
    });
  });
});
