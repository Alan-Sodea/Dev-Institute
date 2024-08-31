// JavaScript file (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    console.log(container.textContent);
    
    const lists = document.querySelectorAll('ul.list');
    lists.forEach((list) => {
      list.classList.add('student_list');
    });
    lists[0].classList.add('university', 'attendance');
  
    const firstItems = document.querySelectorAll('ul.list > li:first-child');
    firstItems.forEach((item) => {
      item.textContent = 'YourName'; // Replace 'YourName' with your actual name
    });
  
    const secondList = lists[1];
    secondList.children[1].remove(); // Remove second <li> of the second <ul>
    
    document.querySelectorAll('ul.list > li').forEach((item) => {
      if (item.textContent === 'Dan') {
        item.style.display = 'none';
      }
    });
  
    document.querySelector('ul.list > li:nth-child(2)').classList.add('highlight');
  });