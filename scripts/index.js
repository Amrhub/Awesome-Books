const form = document.getElementById('add-book');
const numRegex = /['0''1''2''3''4''5''6''7''8''9']+/;

function addBook(title, author, bookId) {
  books.push({
    title: title,
    author: author,
    id: bookId,
  });
  displayBooks();
}

form.onsubmit = function (e) {
  e.preventDefault();
  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const bookId = books[books.length - 1].id + 1;
  addBook(title, author, bookId);
};
