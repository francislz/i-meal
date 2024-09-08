import { IFoodItem } from ".";
import { IFilters } from "../../models/IFilters";
import { buildQueryParamsFromFilters, formatFoodItems } from "./utils";

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

    it('should return object with both filters', () => {
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

  describe('formatFoodItems tests', () => {
    it('should return empty array if foodItems are empty', () => {
      const foodItems: IFoodItem[] = [];
      const result = formatFoodItems(foodItems);
      expect(result).toEqual([]);
    });
    
    it('should return formatted foodItems removing duplicates and sorting', () => {
      const foodItems: IFoodItem[] = [
        { fooditems: 'food: drink' },
        { fooditems: 'food: drink' },
      ];
      const result = formatFoodItems(foodItems);
      expect(result).toEqual(['Drink', 'Food']);
    });

    it('should return formatted foodItems removing . and )', () => {
      const foodItems: IFoodItem[] = [
        { fooditems: 'food: drink.' },
        { fooditems: 'food: drink)' },
      ];
      const result = formatFoodItems(foodItems);
      expect(result).toEqual(['Drink', 'Food']);
    });

    it('should return formatted food items removing and', () => {
      const foodItems: IFoodItem[] = [
        { fooditems: 'food; and drink' },
      ];
      const result = formatFoodItems(foodItems);
      expect(result).toEqual(['Drink', 'Food']);
    });

    it('should format inner food items', () => {
      const foodItems: IFoodItem[] = [
        { fooditems: 'food: drink; water' },
      ];
      const result = formatFoodItems(foodItems);
      expect(result).toEqual(['Drink', 'Food', 'Water']);
    });

    it('should return formatted foodItems', () => {
      const foodItems: IFoodItem[] = [
        { fooditems: 'acai bowls: water' },
      ];
      const result = formatFoodItems(foodItems);
      expect(result).toEqual(['Acai Bowls', 'Water']);
    });
  });
});
