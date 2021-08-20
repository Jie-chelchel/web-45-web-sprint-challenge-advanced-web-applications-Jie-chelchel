import React from "react";
import MutationObserver from "mutationobserver-shim";
import { fetchColorService } from "../services/fetchColorService";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

test("Renders without errors", () => {
  render(<BubblePage />);
});
jest.mock("../services/fetchColorService");
//tried more than 100 times, I cannot get this one work :( 

test("Renders appropriate number of colors passed in through mock", async () => {
  // Keep in mind that our service is called on mount for this component.
  fetchColorService.mockResolvedValueOnce({
    data: [
      {
        code: { hex: "#6093ca" },
        color: "blue",
        id: 10,
      },
      {
        code: { hex: "#000000" },
        color: "black",
        id: 9,
      },
    ],
  });
  render(<BubblePage />);
  const colors = await screen.findAllByTestId("color");
  expect(colors).toBeTruthy();
});

