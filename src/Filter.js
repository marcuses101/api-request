import React from "react";

export default function Filter({selectPrintType, selectFilter}) {
  return (
    <div className="Filter">
      <label htmlFor="printType">Print Type: </label>
      <select name="printType" id="printType" onChange={e=>selectPrintType(e.target.value)}>
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <label htmlFor="bookType">Book Type: </label>
      <select name="bookType" id="bookType" onChange={e=>selectFilter(e.target.value)}>
        <option value="">No Filter</option>
        <option value="partial">Text Preview</option>
        <option value="full">Full Text</option>
        <option value="free-ebooks">Free eBooks</option>
        <option value="paid-ebooks">Paid eBooks</option>
        <option value="ebooks">eBooks</option>
      </select>
    </div>
  );
}
