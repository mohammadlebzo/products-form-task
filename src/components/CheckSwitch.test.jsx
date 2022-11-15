import { render, screen } from "@testing-library/react";
import CheckSwitch from "components/CheckSwitch";

const { getByLabelText } = screen;

describe("Form component", () => {
  test("renders the switch", () => {
    render(<CheckSwitch id="test" labelContent="testLable" />)
    expect(getByLabelText("testLable")).toBeInTheDocument();
  });
});
