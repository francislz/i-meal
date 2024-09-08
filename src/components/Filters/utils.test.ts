import { IFilters } from "../../models/IFilters";
import { buildQueryParamsFromFilters } from "./utils";

describe('Filters utils tests', () => {
  describe('buildQueryParamsFromFilters tests', () => {
    it('should return empty object if filters are empty', () => {
      const filters: IFilters = { content: '', facilityType: [], foodItems: [] };
      const params = buildQueryParamsFromFilters(filters);
      expect(params).toEqual({});
    });

    it('should return object with facilityType filter', () => {
      const filters: IFilters = { content: '', facilityType: ['truck'], foodItems: [] };
      const params = buildQueryParamsFromFilters(filters);
      expect(params).toEqual({ $where: `facilitytype in ('truck')` });
    });

    it('should return object with foodItems filter', () => {
      const filters: IFilters = { content: '', facilityType: [], foodItems: ['food'] };
      const params = buildQueryParamsFromFilters(filters);
      expect(params).toEqual({ $where: `fooditems like '%food%'` });
    });

    it.skip('should return object with both filters', () => {
      const filters: IFilters = { content: '', facilityType: ['truck'], foodItems: ['food'] };
      const params = buildQueryParamsFromFilters(filters);
      expect(params).toEqual({ $where: `facilitytype in ('truck') and fooditems like '%food%'` });
    });

    it('should return object with multiple foodItems filter', () => {
      const filters: IFilters = { content: '', facilityType: [], foodItems: ['food', 'drink'] };
      const params = buildQueryParamsFromFilters(filters);
      expect(params).toEqual({ $where: `fooditems like '%food%' or fooditems like '%drink%'` });
    });
  });
});
