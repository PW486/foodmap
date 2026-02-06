import { describe, it, expect } from 'vitest';

// Pure logic extracted from App.jsx for testing
export const calculateNextZoom = (initialZoom, deltaY) => {
  const factor = Math.pow(2, deltaY / 150);
  return Math.min(Math.max(initialZoom * factor, 1), 128);
};

export const filterSearchResults = (query, foodDataKeys) => {
  if (!query.trim()) return [];
  return foodDataKeys
    .filter(c => c.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 10);
};

describe('App core logic', () => {
  describe('calculateNextZoom (One-hand zoom logic)', () => {
    it('should increase zoom when moving down (deltaY > 0)', () => {
      const initial = 2;
      const result = calculateNextZoom(initial, 150); // Move 150px down
      expect(result).toBe(4); // Should double (2^1 * 2)
    });

    it('should decrease zoom when moving up (deltaY < 0)', () => {
      const initial = 4;
      const result = calculateNextZoom(initial, -150); // Move 150px up
      expect(result).toBe(2); // Should half (2^-1 * 4)
    });

    it('should respect max zoom limit (128)', () => {
      expect(calculateNextZoom(100, 300)).toBe(128);
    });

    it('should respect min zoom limit (1)', () => {
      expect(calculateNextZoom(2, -300)).toBe(1);
    });
  });

  describe('filterSearchResults', () => {
    const mockKeys = ["Korea", "Japan", "China", "United States", "United Kingdom", "Canada"];

    it('should return empty array for empty query', () => {
      expect(filterSearchResults("", mockKeys)).toEqual([]);
      expect(filterSearchResults("   ", mockKeys)).toEqual([]);
    });

    it('should filter countries by query (case-insensitive)', () => {
      expect(filterSearchResults("ko", mockKeys)).toEqual(["Korea"]);
      expect(filterSearchResults("un", mockKeys)).toEqual(["United States", "United Kingdom"]);
    });

    it('should limit results to 10', () => {
      const manyKeys = Array(20).fill("Country");
      expect(filterSearchResults("cou", manyKeys).length).toBe(10);
    });
  });
});
