/* eslint-disable comma-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
const booksLocalStorage = JSON.parse(localStorage.getItem('books') || '[]');
const form = document.getElementById('add-book');
let removeBtns;
class allBooks {
  static books = booksLocalStorage;

  static addBook(title, author, bookId) {
    this.books.push({
      title: title,
      author: author,
      id: bookId,
    });
    displayBooks();
    assignRemoveEventListener();
  }

  static removeBook(removeBtn) {
    this.books = this.books.filter(
      (book) => book.id !== parseInt(removeBtn.id, 10)
    );
    localStorage.setItem('books', JSON.stringify(this.books));
    displayBooks();
    assignRemoveEventListener();
  }
}

form.onsubmit = () => {
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  if (allBooks.books.length) {
    const bookId = allBooks.books[allBooks.books.length - 1].id + 1;
    allBooks.addBook(title, author, bookId);
  } else allBooks.addBook(title, author, 1);
  localStorage.setItem('books', JSON.stringify(allBooks.books));
  removeBtns = Array.from(booksContainer.querySelectorAll('button'));
};

function assignRemoveEventListener() {
  if (allBooks.books.length > 0) {
    removeBtns = Array.from(booksContainer.querySelectorAll('button'));
    removeBtns.forEach((removeBtn) => {
      removeBtn.onclick = (e) => allBooks.removeBook(e.path[0]);
    });
  }
}

// call the functions on load for first time

if (allBooks.books.length) displayBooks();
assignRemoveEventListener();
