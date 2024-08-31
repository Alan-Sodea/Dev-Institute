const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
      sarah: [3, 990],
      dan: [4, 1000],
      david: [1, 500],
    },
  };
  
  // Console.log the number of floors in the building
  console.log(building.numberOfFloors);
  
  // Console.log how many apartments are on the floors 1 and 3
  const apartmentsFloor1 = building.numberOfAptByFloor.firstFloor;
  const apartmentsFloor3 = building.numberOfAptByFloor.thirdFloor;
  console.log(apartmentsFloor1 + apartmentsFloor3);
  
  // Console.log the name of the second tenant and the number of rooms he has in his apartment
  const secondTenant = building.nameOfTenants[1];
  const secondTenantRooms = building.numberOfRoomsAndRent[secondTenant.toLowerCase()][0];
  console.log(secondTenant, secondTenantRooms);
  
  // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent
  const sarahRent = building.numberOfRoomsAndRent.sarah[1];
  const davidRent = building.numberOfRoomsAndRent.david[1];
  const danRent = building.numberOfRoomsAndRent.dan[1];
  
  if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
  }