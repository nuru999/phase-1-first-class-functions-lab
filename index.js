// Code your solution in this file!
// returnFirstTwoDrivers - Returns the first two drivers in an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers - Returns the last two drivers in an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers - Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier - Higher-order function that returns a fare multiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler - Doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler - Triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers - Selects drivers based on a given function
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  