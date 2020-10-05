import React from "react";

export default function Form({ onChange, search }) {
  console.log(search)
  return (
    <form action="" className="Form">
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
}
