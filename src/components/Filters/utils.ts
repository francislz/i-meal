import { IFoodItem } from ".";
import { IQueryParams } from "../../hooks/useGetRequest";
import { IFilters } from "../../models/IFilters";
import { capitalizeWords } from "../../utils/string";

export function buildQueryParamsFromFilters(filters: IFilters) {
  const queryParams: IQueryParams = { };
  const where = [];
  if (filters.search.length) {
    where.push(`applicant like '%${filters.search.toUpperCase()}%' or locationdescription like '%${filters.search.toUpperCase()}%' or fooditems like '%${capitalizeWords(filters.search)}%'`);
  } else {
    if (filters.facilityType.length) {
      where.push(`facilitytype in ('${filters.facilityType.join("','")}')`);
    }
    if (filters.foodItems.length) {
      where.push(`fooditems like '%${filters.foodItems.join("%' or fooditems like '%")}%'`);
    }
  }
  queryParams.$where = where.join(' and ');
  return queryParams;
}

export function formatFoodItems(foodItems: IFoodItem[]) {
  const mappedItems = foodItems
    .flatMap(f => f.fooditems?.split(':'))
    .flatMap(f => f?.split(';'))
    .map(f => 
      f?.trim()
        ?.replace('.', '')
        ?.replace(')', '')
        ?.toLowerCase()
    )
    .filter(f => f);

  const set = new Set(mappedItems);

  const uniqueItems = Array.from(set);
  return uniqueItems
    .map(i => i.replace(/[aA]nd/g, '').trim())
    .map(capitalizeWords)
    .sort((a, b) => a.localeCompare(b));
}
