import React from "react";
import MutationObserver from "mutationobserver-shim";

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from "./Color";

let color = {
  code: { hex: "" },
  color: "",
  id: "",
};

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={color} />);
});

color = {
  code: { hex: "#000000" },
  color: "black",
  id: "10",
};
test("Renders the color passed into component", () => {
  render(<Color color={color} />);
  const blackColor = screen.getByText("black");
  expect(blackColor).toBeTruthy();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const fakeDeleteColor = jest.fn();
  const fakeToggleEdit = jest.fn();
  render(
    <Color
      color={color}
      toggleEdit={fakeToggleEdit}
      deleteColor={fakeDeleteColor}
    />
  );

  const xOut = screen.getByTestId("delete");
  userEvent.click(xOut);
  expect(fakeDeleteColor).toBeCalledTimes(1);
  expect(fakeToggleEdit).toBeCalledTimes(1);
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const fakeToggleEdit = jest.fn();
  const fakeSetEditColor = jest.fn();

  render(
    <Color
      color={color}
      toggleEdit={fakeToggleEdit}
      setEditColor={fakeSetEditColor}
    />
  );

  const colorDiv = document.querySelector(".color-box");
  expect(colorDiv).toBeInTheDocument();
  userEvent.click(colorDiv);
  expect(fakeSetEditColor).toBeCalledTimes(1);
  expect(fakeToggleEdit).toBeCalledTimes(1);
});
