import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListItem from "../components/ListItem";
import { vi } from "vitest";

describe("test list item", () => {
  it("should render list item", () => {
    render(<ListItem>test</ListItem>);
    expect(screen.getByText(/test/i)).toBeInTheDocument();
  });
  it("should trigger click event", async () => {
    const clickFn = vi.fn();

    render(<ListItem onClick={clickFn}>test</ListItem>);
    await userEvent.click(screen.getByText(/test/i));
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
});
