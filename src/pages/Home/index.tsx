import React, { useState } from 'react'
import { Filters } from '../../components/Filters';
import { FoodTruckMap } from '../../components/FoodTruckMap';
import { IQueryParams, useGetRequest } from '../../hooks/useGetRequest';
import { IFoodTruck } from '../../models/IFoodTruck';

export function Home() {
  const [queryParams, setQueryParams] = useState<IQueryParams>({ status: 'APPROVED' });
  const [data, loading, error] = useGetRequest<IFoodTruck[]>({ queryParams });

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  function onFiltersChange(queryParams: IQueryParams) {
    // NOTE: Only update the query params if the value is different
    setQueryParams(params => ({
      ...params,
      ...queryParams,
    }));
  }

  return (
    <div>
      <Filters onFiltersChange={onFiltersChange}/>
      <FoodTruckMap foodTrucks={data ?? []} />
    </div>
  );
}

