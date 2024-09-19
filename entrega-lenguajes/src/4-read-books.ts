// Libros
interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

// Funcion isBookRead

function isBookRead(books: Book[], titleToSearch: string): string {
  const foundTitle = books.find((book) => book.title === titleToSearch);
  return foundTitle
    ? foundTitle.isRead
      ? "El libro se ha leido"
      : "El libro no se ha leido"
    : "El libro no se encontró";
};

console.log(isBookRead(books, "Canción de hielo y fuego"));

console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));

console.log(isBookRead(books, "Devastación"));

console.log(isBookRead(books, "El Ángel de la Noche"));
