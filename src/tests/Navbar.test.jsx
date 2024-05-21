import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../navbar/NavBar";

describe("navbar component tests", () => {
  it("renders correct quantity of items in user's shopping cart", () => {
    const quantity = 6;
    render(
      <MemoryRouter>
        <NavBar items={quantity} setFadeOut={vi.fn()} />
      </MemoryRouter>
    );

    expect(screen.getByText(`Quantity: ${quantity}`)).toBeInTheDocument();
  });
});
