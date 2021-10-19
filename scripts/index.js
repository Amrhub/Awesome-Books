/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
const form = document.getElementById('add-book');
let removeBtns;

function addBook(title, author, bookId) {
  books.push({
    title: title,
    author: author,
    id: bookId,
  });
  displayBooks();
  assignRemoveEventListener();
}

form.onsubmit = () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  if (books.length) {
    const bookId = books[books.length - 1].id + 1;
    addBook(title, author, bookId);
  } else addBook(title, author, 1);
  localStorage.setItem('books', JSON.stringify(books));
  removeBtns = Array.from(booksContainer.querySelectorAll('button'));
};

function removeBook(removeBtn) {
  books = books.filter((book) => book.id !== parseInt(removeBtn.id, 10));
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
  assignRemoveEventListener();
}

function assignRemoveEventListener() {
  if (books.length > 0) {
    removeBtns = Array.from(booksContainer.querySelectorAll('button'));

    removeBtns.forEach((removeBtn) => {
      removeBtn.onclick = (e) => removeBook(e.path[0]);
    });
  }
}

assignRemoveEventListener();
