function displayNumbersDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % 23 === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log('Sum:', sum);
  }
  
  displayNumbersDivisible();

  function displayNumbersDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        console.log(i);
        sum += i;
      }
    }
    console.log('Sum:', sum);
  }
  
  displayNumbersDivisible(23); // You can test with different divisors