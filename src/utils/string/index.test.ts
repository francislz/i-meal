import { capitalizeWords } from ".";

describe('String Utils tests', () => {
  describe('capitalizeWords tests', () => {
    it('should capitalize the first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });

    it('should return empty string if input is empty', () => {
      expect(capitalizeWords('')).toBe('');
    });
  });
});
