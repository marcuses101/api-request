import React from 'react';
import ReactDOM from 'react-dom'
import Display from "./Display"

describe("Display component",()=>{
  it("renders without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Display/>,div);
    ReactDOM.unmountComponentAtNode(div)
  })
})