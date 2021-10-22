/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
const booksContainer = document.querySelector('.books-container');
const noBook = booksContainer.querySelector('span');
const currentDate = document.querySelector('.date');
const dateFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
};

setInterval(() => {
  currentDate.textContent = luxon.DateTime.local().toLocaleString(dateFormat);
}, 100);

function displayBooks() {
  if (booksContainer.querySelectorAll('div').length) {
    Array.from(booksContainer.querySelectorAll('div')).forEach(
      (bookContainer) => {
        booksContainer.removeChild(bookContainer);
      }
    );
  }

  if (allBooks.books.length === 0) {
    noBook.style.display = 'flex';
  } else noBook.style.display = 'none';

  allBooks.books.forEach((book) => {
    const bookContainer = document.createElement('div');
    const bookTitle = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const removeBookBtn = document.createElement('button');

    bookTitle.textContent = `"${book.title}" by `;
    bookAuthor.textContent = book.author;
    removeBookBtn.textContent = 'Remove';
    removeBookBtn.id = `${book.id}`;

    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(removeBookBtn);
    booksContainer.appendChild(bookContainer);
  });
}
