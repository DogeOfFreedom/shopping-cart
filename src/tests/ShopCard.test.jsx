import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ShopCard from "../pages/ShopCard";
import userEvent from "@testing-library/user-event";

const data = {
  id: 1,
  title: "fake fake fake",
  url: "fakeurl.picCentre.com",
  price: 45.5,
  rating: 3.4,
  reviewCount: 300,
};

let mockCart;

beforeEach(() => {
  mockCart = [
    {
      id: 1,
      title: "...",
      url: "...",
      price: "...",
      quantity: 1,
    },
  ];
});

describe("Shop Card Component", () => {
  it("increases quantity when add button is pressed", async () => {
    const user = userEvent.setup();
    render(<ShopCard data={data} />);
    const value = screen.getByRole("spinbutton").value;
    const btn = screen.queryByRole("button", { name: "+" });
    await user.click(btn);
    expect(Number(screen.getByRole("spinbutton").value)).toEqual(
      Number(value) + 1
    );
  });

  it("decreases quantity when minus button is pressed", async () => {
    const user = userEvent.setup();
    render(<ShopCard data={data} />);
    const increaseBtn = screen.queryByRole("button", { name: "+" });
    await user.click(increaseBtn);
    const decreaseBtn = screen.queryByRole("button", { name: "-" });
    await user.click(decreaseBtn);
    expect(Number(screen.getByRole("spinbutton").value)).toEqual(0);
  });

  it("prevents negative quantities", async () => {
    const user = userEvent.setup();
    render(<ShopCard data={data} />);
    const decreaseBtn = screen.queryByRole("button", { name: "-" });
    await user.click(decreaseBtn);
    expect(Number(screen.getByRole("spinbutton").value)).toEqual(0);
  });

  it("adds 3x of an item to shopping cart when add is pressed and input field reads 3", async () => {
    const user = userEvent.setup();
    const mockAdd = vi.fn((number) => number);
    render(<ShopCard data={data} cart={mockCart} addToCart={mockAdd} />);
    const increaseBtn = screen.queryByRole("button", { name: "+" });
    await user.click(increaseBtn);
    await user.click(increaseBtn);
    await user.click(increaseBtn);
    const addBtn = screen.queryByRole("button", { name: "Add" });
    await user.click(addBtn);
    expect(mockAdd).toHaveReturnedWith([
      {
        id: 1,
        price: "...",
        quantity: 4,
        title: "...",
        url: "...",
      },
    ]);

    // Resets quantity on shop card to 0
    expect(Number(screen.getByRole("spinbutton").value)).toEqual(0);
  });

  it("adds to the quantity of an item that's already in the cart", async () => {
    const user = userEvent.setup();
    const mockAdd = vi.fn((newCart) => (mockCart = newCart));
    render(<ShopCard data={data} cart={mockCart} addToCart={mockAdd} />);
    const increaseBtn = screen.queryByRole("button", { name: "+" });
    await user.click(increaseBtn);
    const addBtn = screen.queryByRole("button", { name: "Add" });
    await user.click(addBtn);
    expect(mockCart[0].quantity).toEqual(2);
  });
});
