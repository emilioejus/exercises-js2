/*

Given the same "house" object again

Write the code for the functions as per the description above them

*/

let kinningParkHouse = {
  address: "1 Kinning Park",
  price: 180000,
  currentOwner: {
    firstName: "Margaret",
    lastName: "Conway",
    email: "margaret@fake-emails.com",
  },
};

let parkAvenueHouse = {
  address: "50 Park Avenue",
  price: 195000,
  currentOwner: {
    firstName: "Marie",
    lastName: "McDonald",
    email: "marie.m@real-emails.com",
  },
};

/*
  DO NOT EDIT ANYTHING ABOVE THIS LINE

  WRITE YOUR CODE BELOW
*/

// returns the full name (first name + last name) of the owner of the house
function getOwnerFullName(house) {
  let fullName = `${house.currentOwner.firstName} ${house.currentOwner.lastName}`;
  return fullName
}

// returns an array of the owners' email addresses of the two houses
function getEmailAddresses(house1, house2) {
  let arrOwners = [];
  let owner1 = `${house1.currentOwner.email}`;
  let owner2 = ` ${house2.currentOwner.email}`;
  arrOwners.push(owner1,owner2)
  return arrOwners
}

// returns the address for the cheapest house out of the two
function getCheapestAddress(house1, house2) {
  let address1 = `${house1.address}`;
  let address2 = `${house2.address}`;
  let priceHouse1 = `${house1.price}`;
  let priceHouse2 = `${house2.price}`;
  if(priceHouse1 < priceHouse2) {
    return address1
  }else {
    return address2
  }
}

/*
  DO NOT EDIT ANYTHING BELOW THIS LINE
*/
console.log(
  `Expected result: Margaret Conway. Actual result: ${getOwnerFullName(
    kinningParkHouse
  )}`
);
console.log(
  `Expected result: margaret@fake-emails.com, marie.m@real-emails.com. Actual result: ${getEmailAddresses(
    kinningParkHouse,
    parkAvenueHouse
  )}`
);
console.log(
  `Expected result: 1 Kinning Park. Actual result: ${getCheapestAddress(
    parkAvenueHouse,
    kinningParkHouse
  )}`
);