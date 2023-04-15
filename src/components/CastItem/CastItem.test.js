import { render } from "@testing-library/react";
import CastItem from "./CastItem";
describe("CastItem component", () => {
  let component;

  beforeEach(() => {
    component = render(<CastItem />);
  });

  test("Check that castItem renders correct", () => {
    const castItemElement = component.container.querySelector("div");
    expect(castItemElement).toHaveClass("cast-item");
  });
  test("Check that castItem renders correct", () => {
    const castItemElement = component.container.querySelector("img");
    expect(castItemElement).toHaveClass("cast-item__img");
  });
  test("Check that castItem renders correct", () => {
    const castItemElement = component.container.querySelector("p");
    expect(castItemElement).toHaveClass("cast-item__name");
  });
});
