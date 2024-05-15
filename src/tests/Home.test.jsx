import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages/Home";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Home Component", () => {
  it("Renders shop redirect button", () => {
    const mockSetFadeOut = vi.fn();

    render(
      <MemoryRouter>
        <Home setFadeOut={mockSetFadeOut} />
      </MemoryRouter>
    );
    const shopButton = screen.queryByRole("button", { name: /Shop Now/i });
    expect(shopButton).toBeTruthy();
  });

  it("calls fade out function when shop button is clicked"),
    () => {
      const mockSetFadeOut = vi.fn();
      const user = userEvent.setup();

      render(
        <MemoryRouter>
          <Home setFadeOut={mockSetFadeOut} />
        </MemoryRouter>
      );
      const shopButton = screen.queryByRole("button", { name: /Shop Now/i });
      user.click(shopButton);
      expect(mockSetFadeOut).toHaveBeenCalledOnce();
    };
});
