import { render } from "@testing-library/react";
import Footer from "./Footer";
describe("Footer component", () => {
  let component;

  beforeEach(() => {
    component = render(<Footer />);
  });

  test("Check that footer renders correct", () => {
    const footerElement = component.container.querySelector("div");
    expect(footerElement).toHaveClass("footer");
  });
  test("Check that footer renders correct", () => {
    const footerElement = component.container.querySelector("img");
    expect(footerElement).toHaveClass("footer__img");
  });
});
