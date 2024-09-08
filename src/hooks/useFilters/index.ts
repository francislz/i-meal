import { useState } from 'react';
import { IFilters } from '../../models/IFilters';

export function useFilters() {
  const [filters, setFilters] = useState<IFilters>({
    search: '',
    foodItems: [],
    facilityType: [],
  });
  
  const applyFilter = (key: string, value: string | string[]) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  return {
    filters,
    applyFilter
  };
}

