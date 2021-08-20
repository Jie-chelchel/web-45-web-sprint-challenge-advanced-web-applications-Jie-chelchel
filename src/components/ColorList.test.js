import React from "react";
import MutationObserver from "mutationobserver-shim";
import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import ColorList from "./ColorList";

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />);
});

const colorsData = [
  { code: { hex: "#f0f8ff" }, color: "aliceblue", id: 1 },
  { code: { hex: "#99ddbc" }, color: "limegreen", id: 2 },
];

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={colorsData} />);
  const colors = screen.getAllByTestId("color");
  console.log(colors);
  expect(colors).toHaveLength(2);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(<ColorList colors={colorsData} editing={true} />);
  let editForm = screen.queryByText("edit color");
  expect(editForm).toBeInTheDocument();
  rerender(<ColorList colors={colorsData} editing={false} />);
  editForm = screen.queryByText("edit color");
  expect(editForm).not.toBeInTheDocument();
});
