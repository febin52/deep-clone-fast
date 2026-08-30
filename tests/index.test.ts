import { describe, it, expect } from 'vitest';
import { deepClone } from '../src/index';

describe('deep-clone-fast', () => {
  it('clones nested objects, maps, sets, and dates', () => {
    const original = { date: new Date(), map: new Map([['a', 1]]), set: new Set([1, 2]) };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.map).not.toBe(original.map);
  });
});
