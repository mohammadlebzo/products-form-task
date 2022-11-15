import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "components/Form";

const { getByRole, getByPlaceholderText, getAllByRole, getByLabelText } =
  screen;

const elements = {
  titleInputField: () => getByPlaceholderText("Offer Title"),
  headerInputField: () => getByPlaceholderText("Offer Header"),
  productSelectField: () => getAllByRole("combobox")[0],
  autoRenewCheckbox: () => getByLabelText("Auto-Renewal"),
  selfOfferCheckbox: () => getByLabelText("Self Offer"),
  giftOfferCheckbox: () => getByLabelText("Gift Offer"),
  trailQCheckbox: () => getByLabelText("Trail Offer?"),
  freeTrailCheckbox: () => getByLabelText("Free Trail"),
  reducedTrailCheckbox: () => getByLabelText("Reduced Price Trail"),
};

beforeEach(() => {
  render(<Form />);
});

describe("Form component", () => {
  test("renders the user input as the heading, when text is entered into the title input field", () => {
    const heading = getByRole("heading");
    expect(heading).toHaveTextContent("Untitled Offer");

    userEvent.type(elements.titleInputField(), "hello");

    expect(heading).toHaveTextContent("hello");
  });

  test("logs all data when submitting", () => {
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

  test("checks 'Auto-renewal' checkbox, when 'Self Offer' is checked, then unchecks the other when it is unchecked", () => {
    userEvent.click(elements.selfOfferCheckbox());
    expect(elements.autoRenewCheckbox()).toBeChecked();

    userEvent.click(elements.selfOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();
  });

  test("unchecks 'Auto-renewal' when checking 'Gift Offer'", () => {
    userEvent.click(elements.autoRenewCheckbox());
    userEvent.click(elements.giftOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();
  });

  test("unchecks 'Auto-renewal' when 'Self Offer' is checked and then checking 'Gift Offer'", () => {
    userEvent.click(elements.giftOfferCheckbox());
    userEvent.click(elements.selfOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();

    userEvent.click(elements.autoRenewCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();

    userEvent.click(elements.giftOfferCheckbox());

    userEvent.click(elements.autoRenewCheckbox());
    expect(elements.autoRenewCheckbox()).toBeChecked();
  });

  test("checks 'Trail Offer?' and unchecks 'Reduced Price Trail', when checking 'Free Trail'", () => {
    userEvent.click(elements.reducedTrailCheckbox());
    expect(elements.reducedTrailCheckbox()).toBeChecked();

    userEvent.click(elements.freeTrailCheckbox());
    expect(elements.reducedTrailCheckbox()).not.toBeChecked();
    expect(elements.trailQCheckbox()).toBeChecked();
  });

  test("checks 'Trail Offer?' and unchecks 'Free Trail', when checking 'Reduced Price Trail'", () => {
    userEvent.click(elements.freeTrailCheckbox());
    expect(elements.freeTrailCheckbox()).toBeChecked();

    userEvent.click(elements.reducedTrailCheckbox());
    expect(elements.freeTrailCheckbox()).not.toBeChecked();
    expect(elements.trailQCheckbox()).toBeChecked();
  });

  test("checks 'Trail Offer?' and unchecks any of it's items if it gets unchecked", () => {
    userEvent.click(elements.freeTrailCheckbox());
    expect(elements.freeTrailCheckbox()).toBeChecked();
    expect(elements.trailQCheckbox()).toBeChecked();

    userEvent.click(elements.trailQCheckbox());
    expect(elements.freeTrailCheckbox()).not.toBeChecked();

    userEvent.click(elements.reducedTrailCheckbox());
    expect(elements.reducedTrailCheckbox()).toBeChecked();

    userEvent.click(elements.trailQCheckbox());
    expect(elements.reducedTrailCheckbox()).not.toBeChecked();
  });

  test("checks 'Trail Offer?' which checks 'Auto-Renewal' ", () => {
    userEvent.click(elements.trailQCheckbox());
    expect(elements.autoRenewCheckbox()).toBeChecked();

    userEvent.click(elements.giftOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();
  });

  test("keeps 'Auto-Renewal' unchecked if 'Gift Offer' is checked even when checking 'Trail Offer?' ", () => {
    userEvent.click(elements.giftOfferCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();

    userEvent.click(elements.trailQCheckbox());
    expect(elements.autoRenewCheckbox()).not.toBeChecked();
  });
});
