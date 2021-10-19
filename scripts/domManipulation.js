/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
const booksLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');
let books = booksLocalStorage;
const booksContainer = document.querySelector('.books-container');

function displayBooks() {
  if (booksContainer.querySelectorAll('div')) {
    Array.from(booksContainer.querySelectorAll('div')).forEach(
      (bookContainer) => {
        booksContainer.removeChild(bookContainer);
      }
    );
  }

  books.forEach((book) => {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBookBtn = document.createElement('button');
    const hr = document.createElement('hr');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.id = `${book.id}`;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(removeBookBtn);
    bookContainer.appendChild(hr);
    booksContainer.appendChild(bookContainer);
  });
}

// call the function on load for first time

if (books.length) displayBooks();
