import { render, screen } from "@testing-library/react";
import InputField from "components/InputField";

const { getByLabelText } = screen;

describe("InputField component", () => {
  test("checks input and it's label", () => {
    render(<InputField id="test" type="text" styleType="withBorder" labelText="testLable" registration={() => {}}  />)
    expect(getByLabelText("testLable")).toBeInTheDocument();
  });
});