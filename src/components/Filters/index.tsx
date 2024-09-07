import React, { useMemo, useState } from 'react'
import { IFoodTruck } from '../../models/IFoodTruck';
import { Select } from '../Forms/Select';
import './index.css';

export function useFilters(data: IFoodTruck[]) {
  const [filters, setFilters] = useState({
    content: '',
    foodItems: '',
    facilityType: '',
  });
  const facilityTypes = useMemo(() => new Set(data.map(truck => truck.facilitytype)), [data]);
  const foodItems = useMemo(() => new Set(data.map(truck => truck.fooditems.split(':').map(item => item.trim()).filter(Boolean)).flat()), [data]);

  const applyFilter = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  return {
    facilityTypes,
    foodItems,
    filters,
    applyFilter
  };
}

export function Filters({ data }: { data: IFoodTruck[] }) {
  const { facilityTypes, foodItems } = useFilters(data);

  return (
    <div className='filters-container'>
      <Select label='Type' items={Array.from(facilityTypes)} isMultiselect/>
      <Select label='Menu items' items={Array.from(foodItems)} isMultiselect/>
    </div>
  )
}


