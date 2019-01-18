import isNumber from '../src/isNumber';

describe('Utilities', () => {
  describe('isNumber()', () => {
    it('should return false when passed an object', () => {
      expect(isNumber({})).toBe(false);
    });

    it('should return false when passed a string', () => {
      expect(isNumber('str')).toBe(false);
    });

    it('should return false when passed a boolean', () => {
      expect(isNumber(false)).toBe(false);
    });

    it('should return true when passed a number', () => {
      expect(isNumber(9)).toBe(true);
    });
  });
});
