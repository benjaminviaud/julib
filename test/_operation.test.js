import operation from '../src/_operation';

describe('Utilities', () => {
  describe('operation()', () => {
    it('should return an anonymous function', () => {
      const returnFn = jest.fn(operation);
      returnFn();
      expect(returnFn).toHaveReturnedWith(expect.any(Function));
    });
  });
});
