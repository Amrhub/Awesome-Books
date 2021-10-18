const books = [
  {
    id: 1,
    title: 'First Book',
    author: 'Ugochukwu Omeje',
  },
  {
    id: 2,
    title: 'Second Book',
    author: 'Amr Ahmed',
  },
];
const booksContainer = document.querySelector('.books-container');

function displayBooks() {
  if (booksContainer.querySelectorAll('div'))
    Array.from(booksContainer.querySelectorAll('div')).forEach(
      (bookContainer) => {
        booksContainer.removeChild(bookContainer);
      }
    );

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
displayBooks();
console.log(Array.from(booksContainer.querySelectorAll('div')));
console.log(booksContainer.querySelectorAll('div'));
