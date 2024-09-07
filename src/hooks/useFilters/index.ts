import { useState } from 'react';

export function useFilters() {
  const [filters, setFilters] = useState({
    content: '',
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

