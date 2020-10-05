import React from "react";

export default function Book({ title, author, price, description, image }) {
  return (
    <section className="Book">
      <h1>{title}</h1>
      <div className="container">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="description">
          <p>
            {author ? "Author: " + author : null}
            <br />
            {price ? "Price: $" + price : null}
          </p>

          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
