/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
const booksContainer = document.querySelector('.books-container');

function displayBooks() {
  if (booksContainer.querySelectorAll('div')) {
    Array.from(booksContainer.querySelectorAll('div')).forEach(
      (bookContainer) => {
        booksContainer.removeChild(bookContainer);
      }
    );
  }

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
