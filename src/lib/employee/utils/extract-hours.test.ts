import { extractHours } from '@/lib';

describe('Employee Extract Hours Utility', () => {
  it('should extract hours from employee entities with valid data', () => {
    const entities = [
      { id: '1', name: 'John', hours: 8 },
      { id: '2', name: 'Alice', hours: 12 },
      { id: '3', name: 'Bob', hours: 6 },
    ];

    const actual = extractHours(entities);
    const expected = [8, 12, 6];

    expect(actual).toEqual(expected);
  });
});
