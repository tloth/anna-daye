import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("correct data (small) is displayed after clicking small button", () => {
  const { getByText, findByText } = render(<App />);
  const smallButton = getByText("small");
  fireEvent.click(smallButton);
  return findByText("Size: small");
});

test("correct data (regular) is displayed after clicking regular button", () => {
  const { getByText, findByText } = render(<App />);
  const regularButton = getByText("regular");
  fireEvent.click(regularButton);
  return findByText("Size: regular");
});

test("hardcoded table is displayed after clicking show all button", () => {
  const { getByText, findByText } = render(<App />);
  const showAllButton = getByText("show all packages");
  fireEvent.click(showAllButton);
  return findByText("Plain/CBD-infused");
});
