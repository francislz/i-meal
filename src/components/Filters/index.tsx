import { faBowlFood, faSearch, faTruck, faX } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react'
import { useFilters } from '../../hooks/useFilters';
import { IQueryParams, useGetRequest } from '../../hooks/useGetRequest';
import { IFoodTruck } from '../../models/IFoodTruck';
import { Form } from '../Forms';
import './index.css';
import { facilityTypesQuery, foodItemsQuery } from './queries';
import { buildQueryParamsFromFilters, formatFoodItems } from './utils';


interface IFiltersProps {
  data: IFoodTruck[];
  onFiltersChange: (queryParams: IQueryParams) => void;
}

export interface IFacilityType {
  facilitytype: string;
}

export interface IFoodItem {
  fooditems: string;
}

export function Filters({ onFiltersChange }: IFiltersProps) {
  const [facilityTypes] = useGetRequest<IFacilityType[]>({ queryParams: facilityTypesQuery });
  const [foodItems] = useGetRequest<IFoodItem[]>({ queryParams: foodItemsQuery });
  const { filters, applyFilter } = useFilters();

  useEffect(() => {
    onFiltersChange(buildQueryParamsFromFilters(filters));
  }, [filters]);

  return (
    <div className='filters-container'>
      <Form.Input
        value={filters.search}
        onChange={(e) => applyFilter('search', e.target.value)}
        onIconClick={() => applyFilter('search', '')}
        placeholder='Search food trucks by name, address, or food items'
        hideLeftIcon={filters.search.length === 0}
        leftIcon={faSearch}
        rightIcon={faX}
      />
      <Form.Select 
        label='Type' 
        menuIcon={faTruck}
        items={facilityTypes?.map(f => f.facilitytype) ?? []}
        onChange={(selectedItems) => applyFilter('facilityType', selectedItems)}
        isMultiselect
      />
      <Form.Select
        label='Menu items' 
        menuIcon={faBowlFood}
        onChange={(selectedItems) => applyFilter('foodItems', selectedItems)}
        items={formatFoodItems(foodItems ?? [])} 
        isMultiselect
      />
    </div>
  )
}


