export const facilityTypesQuery = {
  $select: 'facilitytype',
  status: 'APPROVED',
  $group: 'facilitytype',
};

export const foodItemsQuery = {
  $select: 'fooditems',
  status: 'APPROVED',
  $group: 'fooditems',
};
