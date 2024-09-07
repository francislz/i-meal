import React from 'react'
import { useGetRequest } from '../../hooks/useGetRequest';
import { IFoodTruck } from '../../models/IFoodTruck';

export function Home() {
    const { data, loading, error } = useGetRequest<IFoodTruck[]>('https://data.sfgov.org/resource/rqzj-sfat.json?status=APPROVED');

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if(data) {
    console.log(data);
  }

  return (
    <div>
      Home
    </div>
  )

}

