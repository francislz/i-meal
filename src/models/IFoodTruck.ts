export interface IFoodTruck {
  objectid: string;
  applicant: string;
  facilitytype: string;
  cnn: string;
  locationdescription: string;
  address: string;
  blocklot: string;
  block: string;
  lot: string;
  permit: string;
  status: string;
  fooditems: string;
  x: string;
  y: string;
  latitude: string;
  longitude: string;
  schedule: string;
  approved: Date;
  received: Date;
  priorpermit: string;
  expirationdate: Date;
  location: {
    latitude: string;
    longitude: string;
    human_address: string;
  };
};
