async function fetchStarship() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
  
  fetchStarship();
  