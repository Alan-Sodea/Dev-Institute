// JavaScript file (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.getElementById('navBar');
    navBar.setAttribute('id', 'socialNetworkNavigation');
  
    const ul = navBar.querySelector('ul');
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.textContent = 'Logout';
    newItem.appendChild(newLink);
    ul.appendChild(newItem);
  
    const firstItem = ul.firstElementChild;
    const lastItem = ul.lastElementChild;
    console.log('First Item:', firstItem.textContent);
    console.log('Last Item:', lastItem.textContent);
  });