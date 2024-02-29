import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("test button component", () => {
  it("should render button correctrly", () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
