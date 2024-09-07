import { faBowlFood, faTruck } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react'
import { useFilters } from '../../hooks/useFilters';
import { IQueryParams, useGetRequest } from '../../hooks/useGetRequest';
import { IFilters } from '../../models/IFilters';
import { IFoodTruck } from '../../models/IFoodTruck';
import { Select } from '../Forms/Select';
import './index.css';


interface IFiltersProps {
  data: IFoodTruck[];
  onFiltersChange: (queryParams: IQueryParams) => void;
}

/** Transform filters to url using SODA syntax
  */
function buildQueryParamsFromFilters(filters: IFilters) {
  const queryParams: IQueryParams = { };
  if (filters.facilityType.length) {
    queryParams.$where = `facilitytype in ('${filters.facilityType.join("','")}')`;
  }
  if (filters.foodItems.length) {
    queryParams.$where = `fooditems like '%${filters.foodItems.join("%' and fooditems like '%")}%'`;
  }
  return queryParams;
}

interface IFacilityType {
  facilitytype: string;
}

interface IFoodItem {
  fooditems: string;
}

export function Filters({ onFiltersChange }: IFiltersProps) {
  const [facilityTypes] = useGetRequest<IFacilityType[]>('https://data.sfgov.org/resource/rqzj-sfat.json', { $select: 'facilitytype', $group: 'facilitytype' });
  const [foodItems] = useGetRequest<IFoodItem[]>('https://data.sfgov.org/resource/rqzj-sfat.json', { $select: 'fooditems', $group: 'fooditems' });
  const { filters, applyFilter } = useFilters();

  useEffect(() => {
    onFiltersChange(buildQueryParamsFromFilters(filters));
  }, [filters]);

  return (
    <div className='filters-container'>
      <Select 
        label='Type' 
        menuIcon={faTruck}
        items={facilityTypes?.map(f => f.facilitytype) ?? []}
        onChange={(selectedItems) => applyFilter('facilityType', selectedItems)}
        isMultiselect
      />
      <Select
        label='Menu items' 
        menuIcon={faBowlFood}
        onChange={(selectedItems) => applyFilter('foodItems', selectedItems)}
        items={foodItems?.map(f => f.fooditems) ?? []} 
        isMultiselect
      />
    </div>
  )
}


