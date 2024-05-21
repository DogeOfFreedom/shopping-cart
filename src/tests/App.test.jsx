import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

const mocks = vi.hoisted(() => {
  return {
    useParam: vi.fn(),
  };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: mocks.useParam,
  };
});

describe("App Component", () => {
  it("renders home component on '/home' route", () => {
    mocks.useParam.mockReturnValue({ name: "home" });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByText(/Menzei's got you/i)).toBeInTheDocument();
  });

  it("renders shop component on '/shop' route", async () => {
    mocks.useParam.mockReturnValue({ name: "shop" });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("loader")).toBeInTheDocument();
  });
});
