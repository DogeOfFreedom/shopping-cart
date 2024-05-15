import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

const mocks = vi.hoisted(() => {
  return {
    export: vi.fn(),
  };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: mocks.export,
  };
});

describe("App Component", () => {
  it("renders home component on '/home' route", () => {
    mocks.export.mockReturnValue({ name: "home" });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByText(/Menzei's got you/i)).toBeInTheDocument();
  });

  it("renders shop component on '/shop' route", async () => {
    mocks.export.mockReturnValue({ name: "shop" });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.queryByTestId("loader")).toBeInTheDocument();
  });
});
