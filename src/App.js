import React, { useEffect, useState } from "react";
import "./App.css";
import Display from "./Display";
import Filter from "./Filter";
import Form from "./Form";

const API_KEY = "AIzaSyBwgrCewi593cc08xS8asZYaympsYpUMhw";
const baseURL = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=`;
function App() {
  const [filter, setFilter] = useState(null);
  const [printType, setPrintType] = useState("all");
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  console.log(search);

  function parseResults(data) {
    console.log(data);
    let results = data.items.map((book) => {
      return {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors?.[0],
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail,
        price: book.saleInfo.listPrice?.amount
      };
    });
    setBooks(results);
  }

  function updateSearch(searchTerm) {
    setSearch(searchTerm);
  }

  useEffect(() => {
    if (search) {
      console.log(search);
      const URL = `${baseURL}${search}&printType=${printType}${
        filter ? "&filter=" + filter : ""
      }`;
      (async () => {
        const response = await fetch(URL);
        const data = await response.json();
        parseResults(data);
      })();
    }
  }, [search, filter, printType]);

  return (
    <div className="App">
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Form onChange={updateSearch} search={search} />
      <Filter
        printType={printType}
        filter={filter}
        selectPrintType={setPrintType}
        selectFilter={setFilter}
      />
      <Display books={books} />
    </div>
  );
}

export default App;
