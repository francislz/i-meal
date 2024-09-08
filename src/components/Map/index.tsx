import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { IFoodTruck } from '../../models/IFoodTruck'

export function Map({
  foodTrucks
}: { foodTrucks: IFoodTruck[] }) {
  return (
    <MapContainer center={[37.7576928,-122.4787995]} zoom={13} scrollWheelZoom={true} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {foodTrucks?.map(truck => (
        <Marker key={truck.objectid} position={[Number(truck.latitude), Number(truck.longitude)]}>
          <Popup>
            <h3>{truck.applicant}</h3>
            <p>{truck.address}</p>
            <p>{truck.fooditems}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}



