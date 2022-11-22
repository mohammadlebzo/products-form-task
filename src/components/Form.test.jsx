import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "components/Form";

const { getByRole, getByPlaceholderText, getAllByRole, getByLabelText } =
  screen;

const elements = {
  titleInputField: () => getByPlaceholderText("Offer Title"),
  headerInputField: () => getByPlaceholderText("Offer Header"),
  productSelectField: () => getAllByRole("combobox")[0],
  amountField: () => getByLabelText("Input amount"),
  autoRenewCheckbox: () => getByLabelText("Auto-Renewal"),
  selfOfferCheckbox: () => getByLabelText("Self Offer"),
  giftOfferCheckbox: () => getByLabelText("Gift Offer"),
  trailQCheckbox: () => getByLabelText("Trail Offer?"),
  freeTrailCheckbox: () => getByLabelText("Free Trail"),
  reducedTrailCheckbox: () => getByLabelText("Reduced Price Trail"),
};

const utils = <Form />;

describe("Form component", () => {
  test("renders the user input as the heading, when text is entered into the title input field", () => {
    render(utils);
    const heading = getByRole("heading");
    expect(heading).toHaveTextContent("Untitled Offer");

    userEvent.type(elements.titleInputField(), "hello");

    expect(heading).toHaveTextContent("hello");
  });

  test("logs all data when submitting", () => {
    render(utils);
    const saveDraftButton = getByRole("button");

    userEvent.type(elements.titleInputField(), "hello,");
    userEvent.type(elements.headerInputField(), "World!");
    userEvent.selectOptions(
      elements.productSelectField(),
      getByRole("option", { name: "Bundle Product #1" })
    );

    userEvent.click(saveDraftButton);

    const draftSavedButton = getByRole("button", "Draft Saved");

    expect(draftSavedButton).toBeInTheDocument();

    // userEvent.type(elements.titleInputField(), "hello,");
    // userEvent.type(elements.headerInputField(), "World!");
    // userEvent.selectOptions(
    //   elements.productSelectField(),
    //   getByRole("option", { name: "Bundle Product #3" })
    // );

    // userEvent.click(saveDraftButton);

    // expect(draftSavedButton).toBeInTheDocument();
  });

  test("checks 'Self Offer' checkbox, when 'Auto-renewal' is checked.(Same for unchecking)", () => {
    render(utils);
    userEvent.click(elements.autoRenewCheckbox());
    expect(elements.selfOfferCheckbox()).toBeChecked();

    userEvent.click(elements.autoRenewCheckbox());
    expect(elements.selfOfferCheckbox()).not.toBeChecked();
  });

  test("unchecks 'Auto-renewal' when checking 'Gift Offer'", () => {
    render(utils);
    userEvent.click(elements.autoRenewCheckbox());
    userEvent.click(elements.giftOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();
  });

  test("unchecks 'Auto-renewal' when 'Self Offer' is checked and then checking 'Gift Offer'", () => {
    render(utils);
    userEvent.click(elements.giftOfferCheckbox());
    userEvent.click(elements.selfOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();

    userEvent.click(elements.autoRenewCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();

    userEvent.click(elements.giftOfferCheckbox());

    userEvent.click(elements.autoRenewCheckbox());
    expect(elements.autoRenewCheckbox()).toBeChecked();
  });

  test("checks 'Auto-Renewal' when checking 'Trail Offer?', and renders two new options, which allows them to be checked", () => {
    render(utils);
    userEvent.click(elements.trailQCheckbox());
    expect(elements.autoRenewCheckbox()).toBeChecked();
    expect(elements.freeTrailCheckbox()).toBeInTheDocument();
    expect(elements.reducedTrailCheckbox()).toBeInTheDocument();

    userEvent.click(elements.freeTrailCheckbox());
    userEvent.click(elements.reducedTrailCheckbox());
    expect(elements.freeTrailCheckbox()).not.toBeChecked();
    expect(elements.amountField()).toHaveValue(20);

    userEvent.click(elements.freeTrailCheckbox());
    expect(elements.reducedTrailCheckbox()).not.toBeChecked();

    userEvent.click(elements.trailQCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();
  });

  test("checks 'Trail Offer?' and unchecks 'Gift Offer', and the other way around", () => {
    render(utils);
    userEvent.click(elements.giftOfferCheckbox());
    userEvent.click(elements.trailQCheckbox());
    expect(elements.giftOfferCheckbox()).not.toBeChecked();

    userEvent.click(elements.giftOfferCheckbox());
    expect(elements.trailQCheckbox()).not.toBeChecked();
  });

  test("changes 'Amount' to 0 when 'Free Trail' is checked and returnes it to 20 when unchecked", () => {
    render(utils);
    userEvent.click(elements.trailQCheckbox());
    userEvent.click(elements.freeTrailCheckbox());
    expect(getByLabelText("Input amount")).toHaveValue(0);

    userEvent.click(elements.freeTrailCheckbox());
    expect(elements.amountField()).toHaveValue(20);
  });
});
