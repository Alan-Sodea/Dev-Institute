// JavaScript file (script.js)
document.addEventListener("DOMContentLoaded", function() {
    const allBooks = [
      {
        title: 'Book 1',
        author: 'Author 1',
        image: 'https://via.placeholder.com/100',
        alreadyRead: true
      },
      {
        title: 'Book 2',
        author: 'Author 2',
        image: 'https://via.placeholder.com/100',
        alreadyRead: false
      }
    ];
  
    const listBooksSection = document.querySelector('.listBooks');
  
    allBooks.forEach(book => {
      const bookDiv = document.createElement('div');
      const bookTitle = document.createElement('h3');
      const bookAuthor = document.createElement('p');
      const bookImage = document.createElement('img');
  
      bookTitle.textContent = `${book.title} written by ${book.author}`;
      bookAuthor.textContent = book.author;
      bookImage.src = book.image;
      bookImage.classList.add('book-image');
  
      bookDiv.appendChild(bookImage);
      bookDiv.appendChild(bookTitle);
      bookDiv.appendChild(bookAuthor);
      
      if (book.alreadyRead) {
        bookDiv.classList.add('read');
      }
  
      listBooksSection.appendChild(bookDiv);
    });
  });