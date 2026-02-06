import { describe, it, expect } from 'vitest';
import { mapGeoName, getCountryCode, getClimateType } from './countryMapping';

describe('countryMapping utilities', () => {
  describe('mapGeoName', () => {
    it('should map GeoJSON names to standardized names', () => {
      expect(mapGeoName("United States of America")).toBe("United States");
      expect(mapGeoName("Russian Federation")).toBe("Russia");
      expect(mapGeoName("Republic of Korea")).toBe("South Korea");
      expect(mapGeoName("Côte d'Ivoire")).toBe("Ivory Coast");
    });

    it('should return the original name if no mapping exists', () => {
      expect(mapGeoName("France")).toBe("France");
      expect(mapGeoName("Italy")).toBe("Italy");
    });
  });

  describe('getCountryCode', () => {
    it('should return correct ISO codes for countries', () => {
      expect(getCountryCode("South Korea")).toBe("kr");
      expect(getCountryCode("United States")).toBe("us");
      expect(getCountryCode("Japan")).toBe("jp");
    });

    it('should return null for unknown countries', () => {
      expect(getCountryCode("Unknown Land")).toBeNull();
    });
  });

  describe('getClimateType', () => {
    it('should identify desert countries correctly', () => {
      expect(getClimateType("Saudi Arabia")).toBe("DESERT");
      expect(getClimateType("Egypt")).toBe("DESERT");
      expect(getClimateType("Australia")).toBe("DESERT");
    });

    it('should identify cold countries correctly', () => {
      expect(getClimateType("Russia")).toBe("COLD");
      expect(getClimateType("Canada")).toBe("COLD");
      expect(getClimateType("Iceland")).toBe("COLD");
    });

    it('should return TEMPERATE for standard countries', () => {
      expect(getClimateType("France")).toBe("TEMPERATE");
      expect(getClimateType("Brazil")).toBe("TEMPERATE");
      expect(getClimateType("Thailand")).toBe("TEMPERATE");
    });
  });
});
