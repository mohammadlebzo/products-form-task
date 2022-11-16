import styled from "styled-components";
import { useForm } from "react-hook-form";
import CheckSwitch from "components/CheckSwitch";
import { useState } from "react";
import {
  PRODUCTS_LIST,
  SWITCHES_IDS,
  SWITCHES_LABELS,
} from "constants/mocks/MockData";
import { FONT, BACKGROUND, BORDER, BOX } from "constants/styles/StyleParams";

const AutoRenewWrapper = styled.div`
  font-size: 1.05rem;
`;

const Button = styled.button`
  color: ${FONT.color.black};
  padding: 0.938rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border: solid 0.188rem black;
  cursor: pointer;
  border-radius: 10rem;

  &:hover,
  &:focus {
    outline: 0;
    background-color: ${BACKGROUND.color.green};
    color: ${FONT.color.white};
    font-weight: bold;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 4rem;
  padding-top: 1rem;
  padding-right: 3rem;s
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem;
  margin-top: 3rem;
  margin-bottom: 5rem;
  font-size: 1.5rem;
  font-family: ${FONT.family.main};

  & form {
    display: flex;
    width: 100%;

    & label {
      display: block;
    }
  }
`;

const HerderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3rem;
`;

const InputWithBorder = styled.input`
  width: 100%;
  border: 0;
  height: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  background-color: ${BACKGROUND.color.lightGray};
  box-shadow: 0 0.313rem 0.313rem 0 rgba(0, 0, 0, 0.3);
`;

const InputNoBorder = styled.input`
  outline: 0;

  border: 0;
  border-bottom-width: 0.063rem;
  border-bottom-color: ${BORDER.color.gray};
  border-bottom-style: solid;

  margin-bottom: 5rem;
  font-size: 1.2rem;

  &:focus {
    box-shadow: ${BOX.focusShadow};
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
`;

const InputNoBorderFull = styled(InputNoBorder)`
  width: 100%;
  margin-right: 1.25rem;
  margin-bottom: 0;
`;

const JustifyCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const LeftSideContent = styled.div`
  width: 50%;
  float: left;
  margin: 2rem;
  margin-left: 6rem;
`;

const ProductInforamtion = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  & select {
    font-size: 1.2rem;
  }
`;

const PageHeader = styled.div`
  border: 0;
  border-bottom-width: 0.063rem;
  border-bottom-color: ${BORDER.color.gray};
  border-bottom-style: solid;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: ${FONT.family.main};

  & h1 {
    font-size: 2rem;
    margin-left: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const RightSideContent = styled.div`
  width: 49%;
  float: right;
  margin: 2rem;
  font-size: 1.2rem;
`;

const ReaderOnlyLabel = styled.label`
    border: 0;
    clip: rect(1px 1px 1px 1px);
    clip; rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;

const SwitchsWrapper = styled.div`
  & .switchWrapper:nth-child(2),
  .switchWrapper:nth-child(3) {
    margin-left: 3rem;
  }

  & .switchWrapper:nth-child(7),
  .switchWrapper:nth-child(8) {
    margin-left: 3rem;
  }

  margin-left: 5rem;
`;

const SelectElement = styled.select`
  border: 0;
  border-bottom-width: 0.063rem;
  border-bottom-color: ${BORDER.color.gray};
  border-bottom-style: solid;
  background-color: ${BACKGROUND.color.white};

  &.products {
    width: 100%;
    padding-right: 1.25rem;
    margin-bottom: 5rem;
    height: 3rem;
    font-size: 1.3rem;
  }

  &.term {
    width: 10rem;
    height: 1.6rem;
  }

  &:focus {
    outline: 0;
    box-shadow: ${BOX.focusShadow};
    border-radius: 0.5rem;
  }
`;

const SavedSpan = styled.button`
  color: ${FONT.color.black};
  padding: 0.938rem 2rem;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  border: solid 0.188rem black;
  border-radius: 10rem;
`;

const TermWrapper = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
`;

const UnderlinedTab = styled.div`
  border: 0;
  border-bottom-width: 0.188rem;
  border-bottom-color: ${BORDER.color.goldenrod};
  border-bottom-style: solid;
  border-raduis: 0.313rem;
  width: 8%;
  clear: both;

  & p {
    text-align: center;
    font-size: 1.2rem;
  }
`;

const WarningSign = styled.p`
  border: 0.063rem solid red;
  border-radius: 1.875rem;
  color: ${FONT.color.red};
  width: 1.25rem;
  text-align: center;
`;

const WarningWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${FONT.color.red};
  margin-bottom: 3rem;
`;

function Form() {
  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const {
    formState: { isDirty },
    reset,
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      header: "",
      amount: 0,
      duration: 0,
      products: "",
      term: "day",
      autoRenew: false,
      selfOffer: false,
      giftOffer: false,
      promotedQ: false,
      iCareQ: false,
      trailQ: false,
      freeTrail: false,
      reducedTrail: false,
      firstBundleItemName: "",
      secondBundleItemName: "",
      firstBundleItemSplit: 0,
      secondBundleItemSplit: 0,
    },
  });

  const handlers = {
    onSubmit: (data) => {
      console.log(data);
      reset(data);
      setDidSubmit(true);
    },
    selfOfferConnection: (e) => {
      setValue("selfOffer", !getValues("selfOffer"));

      const autoRenew = getValues("autoRenew");
      const selfOffer = getValues("selfOffer");
      const giftOffer = getValues("giftOffer");

      if (!autoRenew && selfOffer) {
        setValue("autoRenew", true);
      }
      if (autoRenew && !selfOffer) {
        setValue("autoRenew", false);
      }
      if (giftOffer) {
        setValue("autoRenew", false);
      }
    },
    disableAutoRenew: (e) => {
      const giftOffer = getValues("giftOffer");

      if (!giftOffer) {
        setValue("autoRenew", false);
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    },
    productInfo: (e) => {
      setValue("products", e.target.value);
      PRODUCTS_LIST.forEach((product) => {
        if (product.id === +e.target.value.split(":")[0]) {
          setSelectedProductInfo(product);
          setValue("amount", product.price);
          setValue("duration", product.duration);
          if (product.bundleItems) {
            setValue("firstBundleItemName", product.bundleItems[0].name);
            setValue("firstBundleItemSplit", product.bundleItems[0].price);
            setValue("secondBundleItemName", product.bundleItems[1].name);
            setValue("secondBundleItemSplit", product.bundleItems[1].price);
          }
        }
      });
    },
    reducedTrail: () => {
      if (!getValues("giftOffer")) {
        setValue("autoRenew", true);
      }
      setValue("trailQ", true);
      setValue("reducedTrail", !getValues("reducedTrail"));
      if (watch("freeTrail")) {
        setValue("freeTrail", false);
      }
    },
    freeTrail: () => {
      if (!getValues("giftOffer")) {
        setValue("autoRenew", true);
      }
      setValue("trailQ", true);
      setValue("freeTrail", !getValues("freeTrail"));
      if (watch("reducedTrail")) {
        setValue("reducedTrail", false);
      }
    },
    trailQ: () => {
      setValue("trailQ", !getValues("trailQ"));

      const trailQ = getValues("trailQ");
      const autoRenew = getValues("autoRenew");
      const giftOffer = getValues("giftOffer");

      if (watch("reducedTrail")) {
        setValue("reducedTrail", false);
      }
      if (watch("freeTrail")) {
        setValue("freeTrail", false);
      }
      if (!autoRenew && trailQ) {
        setValue("autoRenew", true);
      }
      if (autoRenew && !trailQ) {
        setValue("autoRenew", false);
      }
      if (giftOffer) {
        setValue("autoRenew", false);
      }
    },
    switchFunctionHandler: (id) => {
      if (id === "selfOffer") {
        return handlers.selfOfferConnection;
      }
      if (id === "giftOffer") {
        return handlers.disableAutoRenew;
      }
      if (id === "reducedTrail") {
        return handlers.reducedTrail;
      }
      if (id === "freeTrail") {
        return handlers.freeTrail;
      }
      if (id === "trailQ") {
        return handlers.trailQ;
      }
    },
  };

  const fullInputFieldsData = [
    {
      title: "title",
      header: "Offer Title",
      message: errors?.title?.message,
    },
    {
      title: "header",
      header: "Offer Header",
      message: errors?.header?.message,
    },
  ];

  if (didSubmit && isDirty) {
    setDidSubmit(false);
  }

  return (
    <>
      <PageHeader>
        <HerderContentWrapper>
          <h1>
            {watch("title").length > 0 ? watch("title") : "Untitled Offer"}
          </h1>
          <ButtonsWrapper>
            {didSubmit ? (
              <SavedSpan disabled={true}>Draft Saved</SavedSpan>
            ) : (
              <Button onClick={handleSubmit(handlers.onSubmit)}>
                Save Draft
              </Button>
            )}
          </ButtonsWrapper>
        </HerderContentWrapper>

        <UnderlinedTab>
          <p>Offer</p>
        </UnderlinedTab>
      </PageHeader>

      <FormWrapper>
        <form>
          <LeftSideContent>
            <JustifyCenterWrapper>
              <div>
                {fullInputFieldsData.map((obj) => {
                  return (
                    <>
                      <div>
                        <ReaderOnlyLabel htmlFor={obj.title}></ReaderOnlyLabel>
                        <InputNoBorderFull
                          id={obj.title}
                          {...register(`${obj.title}`, {
                            required: "This field is required",
                          })}
                          type="text"
                          placeholder={obj.header}
                        />
                      </div>

                      <WarningWrapper>
                        <p>{obj.message}</p>
                      </WarningWrapper>
                    </>
                  );
                })}

                <div>
                  <ReaderOnlyLabel htmlFor="products"></ReaderOnlyLabel>
                  <SelectElement
                    {...register("products")}
                    id="products"
                    className="products"
                    onChange={handlers.productInfo}
                  >
                    <option value="" selected disabled hidden>
                      Products
                    </option>

                    {PRODUCTS_LIST.map((product) => {
                      return (
                        <option
                          key={product.id}
                          value={`${product.id}:${product.type}`}
                        >
                          {product.name}
                        </option>
                      );
                    })}
                  </SelectElement>
                </div>

                {watch("products").split(":")[1] === "bundle" && (
                  <div>
                    <p>Bundle includes the following products</p>
                    {["first", "second"].map((item) => {
                      return (
                        <>
                          <InputWithBorder
                            {...register(`${item}BundleItemName`)}
                            type="text"
                            placeholder={`${
                              item.charAt(0).toUpperCase() + item.split(1)
                            } Item`}
                          />
                          <label htmlFor={`${item}Split`}>Split</label>
                          <InputNoBorderFull
                            {...register(`${item}BundleItemSplit`)}
                            id={`${item}Split`}
                            type="number"
                            placeholder="0"
                          />
                          <WarningWrapper>
                            {selectedProductInfo.price !==
                              +watch("firstBundleItemSplit") +
                                +watch("secondBundleItemSplit") && (
                              <>
                                <div>
                                  <WarningSign>!</WarningSign>
                                </div>

                                <p>
                                  The products prices in this bundle does not
                                  equal the bundle's overall price. Please make
                                  sure that the total of the products prices
                                  equals the bunle price.
                                </p>
                              </>
                            )}
                          </WarningWrapper>
                        </>
                      );
                    })}
                  </div>
                )}

                <ProductInforamtion>
                  <ReaderOnlyLabel htmlFor="amount"></ReaderOnlyLabel>
                  <InputNoBorder
                    id="amount"
                    {...register("amount")}
                    type="number"
                    placeholder="Amount"
                    disabled={watch("reducedTrail") ? true : false}
                  />
                  {/* <div style={{ marginRight: "1rem", marginLeft: "1rem" }}> */}
                  <TermWrapper>
                    <label htmlFor="term">Term</label>
                    <SelectElement
                      {...register("term")}
                      id="term"
                      className="term"
                    >
                      <option value="" selected disabled hidden>
                        Day
                      </option>
                      <option value="day" selected>
                        Day
                      </option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">year</option>
                    </SelectElement>
                  </TermWrapper>
                  <div>
                    <label htmlFor="duration">Duration</label>
                    <InputNoBorder
                      id="duration"
                      {...register("duration")}
                      type="number"
                    />
                  </div>
                </ProductInforamtion>

                <AutoRenewWrapper>
                  <CheckSwitch
                    id={"autoRenew"}
                    labelContent={"Auto-Renewal"}
                    registeration={register("autoRenew")}
                    isDisabled={isDisabled}
                  />
                </AutoRenewWrapper>
              </div>
            </JustifyCenterWrapper>
          </LeftSideContent>

          <RightSideContent>
            <SwitchsWrapper>
              <label htmlFor="">Offer Type:</label>
              {SWITCHES_LABELS.map((labelName, idx) => {
                return (
                  <CheckSwitch
                    id={SWITCHES_IDS[idx]}
                    labelContent={`${labelName}`}
                    registeration={register(SWITCHES_IDS[idx])}
                    callbackFun={handlers.switchFunctionHandler(
                      SWITCHES_IDS[idx]
                    )}
                  />
                );
              })}
            </SwitchsWrapper>
          </RightSideContent>
        </form>
      </FormWrapper>
    </>
  );
}

export default Form;
