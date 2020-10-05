import React from "react";
import Book from "./Book";

export default function Display({ books }) {
  const listOfBooks = books?.map((book, index) => {
    return (
      <li key={index}>
        <Book
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          price={book.price}
        />
        <hr />
      </li>
    );
  });

  return (
    <div className="Display">
      <ul>
        {listOfBooks}
      </ul>
    </div>
  );
}
