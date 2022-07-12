import { render, screen } from "@testing-library/react";

import App from "./app";
import { Header } from "../../settings";

describe("App", () => {
  it("renders correctly", () => {
    render(<App />);
    expect(screen.getByText(Header.title)).toBeTruthy();
  });
});
