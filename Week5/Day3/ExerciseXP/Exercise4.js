function hotelCost() {
    let nights;
    do {
      nights = parseInt(prompt('How many nights would you like to stay in the hotel?'));
    } while (isNaN(nights));
    return nights * 140;
  }
  
  function planeRideCost() {
    let destination;
    do {
      destination = prompt('What is your destination?').toLowerCase();
    } while (!destination || typeof destination !== 'string');
  
    switch (destination) {
      case 'london':
        return 183;
      case 'paris':
        return 220;
      default:
        return 300;
    }
  }
  
  function rentalCarCost() {
    let days;
    do {
      days = parseInt(prompt('How many days would you like to rent the car?'));
    } while (isNaN(days));
    
    const cost = days * 40;
    return days > 10 ? cost * 0.95 : cost;
  }
  
  function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    return hotel + plane + car;
  }
  
  console.log('Total Vacation Cost:', totalVacationCost());