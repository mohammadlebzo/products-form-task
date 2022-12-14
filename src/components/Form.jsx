import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState, Fragment } from "react";
import {
  PRODUCTS_LIST,
  SWITCHES_IDS,
  SWITCHES_LABELS,
} from "constants/mocks/MockData";
import InputField from "./InputField";
import {
  FONT,
  BACKGROUND,
  BORDER,
  BOX,
  MEDIA,
} from "constants/styles/StyleParams";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Styled Components
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
  padding-right: 3rem;

  @media screen and (${MEDIA.mobile}) {
    padding-top: 0;
    padding-right: 0;
  }
`;

const BundleWrapper = styled.div`
  & label {
    font-size: 1rem;
  }
`;

const CharacterCount = styled.div`
  float: right;
  font-size: 1rem;
  color: ${FONT.color.gray};
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

    @media screen and (${MEDIA.mobile}) {
      display: block;
    }
  }

  @media screen and (${MEDIA.mobile}) {
    margin: 0;
  }
`;

const HerderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 3rem;

  @media screen and (${MEDIA.mobile}) {
    display: block;
  }
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

  @media screen and (${MEDIA.mobile}) {
    float: none;
    width: 100%
    margin-left: 0;
  }
`;

const ProductInforamtion = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;

  & select {
    font-size: 1.2rem;
  }

  @media screen and (${MEDIA.mobile}) {
    justify-content: start;
    display: block;

    & input:first-of-type {
      margin-bottom: 3rem;
    }
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

  @media screen and (${MEDIA.mobile}) {
    margin-left: 2rem;
    margin-right: 2rem;

    & h1 {
      text-align: center;
      margin-left: 0;
      overflow: warp;
    }
  }
`;

const RightSideContent = styled.div`
  width: 49%;
  float: right;
  margin: 2rem;
  font-size: 1.2rem;

  @media screen and (${MEDIA.mobile}) {
    float: none;
    width: 100%
    margin: 0;
    margin-left: 4rem;
  }
`;

const ReaderOnlyLabel = styled.label`
    border: 0;
    clip: rect(0.063rem 0.063rem 0.063rem 0.063rem);
    clip; rect(0.063rem, 0.063rem, 0.063rem, 0.063rem);
    height: 0.063rem;
    margin: -0.063rem;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 0.063rem;
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

  @media screen and (${MEDIA.mobile}) {
    margin-left: 2rem;
  }
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
    height: 3rem;
    font-size: 1.3rem;
  }

  &.term {
    width: 10rem;
    height: 1.6rem;

    @media screen and (${MEDIA.mobile}) {
      width: 100%;
    }
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

  @media screen and (${MEDIA.mobile}) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 3rem;
  }
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

  @media screen and (${MEDIA.mobile}) {
    width: 100%;
  }
`;

const WarningWrapper = styled.div`
  display: flex;
  font-size: 1rem;
  color: ${FONT.color.red};
  margin-bottom: 3rem;
`;

// Validation Schema
const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    header: yup.string().max(24).required(),
    products: yup.string().required(),
    amount: yup
      .number()
      .positive()
      .when(
        ["firstBundleItemSplit", "secondBundleItemSplit", "products"],
        (firstBundleItemSplit, secondBundleItemSplit, products, schema) => {
          return schema.test({
            test: (amount) => {
              if (products.split(":")[1] === "bundle") {
                return (
                  +firstBundleItemSplit + +secondBundleItemSplit === +amount
                );
              } else {
                return +amount;
              }
            },
            message:
              "The products prices in this bundle does not equal the bundle's overall price. Please make sure that the total of the products prices equals the bunle price.",
          });
        }
      ),
    duration: yup.number().positive(),
  })
  .required();

// Component
function Form() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [offerIsOn, setOfferIsOn] = useState(false);

  const [preLockAmount, setPreLockAmount] = useState(0);

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
      amount: PRODUCTS_LIST[0].price,
      duration: PRODUCTS_LIST[0].duration,
      products: "0:single",
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
    resolver: yupResolver(schema),
  });

  const handlers = {
    onSubmit: (data) => {
      console.log(yup.object().validate(data));
      reset(data);
      setDidSubmit(true);
    },
    selfOfferConnection: (e) => {
      setValue("autoRenew", !getValues("autoRenew"));

      const autoRenew = getValues("autoRenew");
      const selfOffer = getValues("selfOffer");

      if (autoRenew && !selfOffer) {
        setValue("selfOffer", true);
      }
      if (!autoRenew && selfOffer) {
        setValue("selfOffer", false);
      }
    },
    disableAutoRenew: (e) => {
      setValue("giftOffer", !getValues("giftOffer"));
      setValue("trailQ", false);
      setValue("freeTrail", false);
      setValue("reducedTrail", false);
      setOfferIsOn(false);
      const giftOffer = getValues("giftOffer");

      if (giftOffer) {
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
          setValue("amount", getValues("freeTrail") ? 0 : product.price);
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
      setValue("reducedTrail", !getValues("reducedTrail"));
      if (watch("freeTrail")) {
        setValue("freeTrail", false);
        setValue("amount", getValues("products") ? preLockAmount : 0);
      }
    },
    freeTrail: () => {
      if (getValues("amount") !== 0) {
        setPreLockAmount(getValues("amount"));
      }
      setValue("freeTrail", !getValues("freeTrail"));

      if (watch("reducedTrail")) {
        setValue("reducedTrail", false);
      }
      if (getValues("freeTrail")) {
        setValue("amount", 0);
      } else {
        setValue("amount", getValues("products") ? preLockAmount : 0);
      }
    },
    trailQ: () => {
      setValue("trailQ", !getValues("trailQ"));
      setValue("giftOffer", false);
      setOfferIsOn(!offerIsOn);
      setIsDisabled(false);

      const trailQ = getValues("trailQ");
      const autoRenew = getValues("autoRenew");

      if (!watch("trailQ")) {
        setValue("reducedTrail", false);
        setValue("freeTrail", false);
      }
      if (!autoRenew && trailQ) {
        setValue("autoRenew", true);
      }
      if (autoRenew && !trailQ) {
        setValue("autoRenew", false);
      }
    },
    switchFunctionHandler: (id) => {
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
                {fullInputFieldsData.map((obj, idx) => {
                  return (
                    <Fragment key={idx}>
                      <div>
                        <InputField
                          id={`${obj.title}`}
                          registration={register(`${obj.title}`)}
                          type="text"
                          styleType="noBorderFull"
                          placeholder={obj.header}
                          labelType="read"
                          labelText={`Input ${obj.title}`}
                        />
                        {obj.title === "header" && (
                          <CharacterCount>{`${
                            watch("header").length
                          }/24`}</CharacterCount>
                        )}
                      </div>

                      <WarningWrapper>
                        <p>{obj.message}</p>
                      </WarningWrapper>
                    </Fragment>
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
                  <WarningWrapper>
                    <p>{errors?.products?.message}</p>
                  </WarningWrapper>
                </div>

                {watch("products").split(":")[1] === "bundle" && (
                  <BundleWrapper>
                    <p>Bundle includes the following products</p>
                    {["first", "second"].map((item, idx) => {
                      return (
                        <Fragment key={idx}>
                          <InputField
                            id={`${item}BundleName`}
                            registration={register(`${item}BundleItemName`)}
                            type="text"
                            styleType="withBorder"
                            labelType="read"
                            labelText={`Input ${item}BundleName`}
                          />

                          <InputField
                            id={`${item}Split`}
                            registration={register(`${item}BundleItemSplit`)}
                            type="number"
                            styleType="noBorderFull"
                            placeholder={`${
                              item.charAt(0).toUpperCase() + item.slice(1)
                            } Item`}
                            labelText="Split"
                          />

                          <WarningWrapper>
                            <p>{errors?.amount?.message}</p>
                          </WarningWrapper>
                        </Fragment>
                      );
                    })}
                  </BundleWrapper>
                )}

                <ProductInforamtion>
                  <InputField
                    id="amount"
                    registration={register("amount")}
                    type="number"
                    styleType="noBorder"
                    placeholder="Amount"
                    labelType="read"
                    labelText="Input amount"
                    disabled={watch("freeTrail") ? true : false}
                  />

                  <TermWrapper>
                    <label htmlFor="term">Term</label>
                    <SelectElement
                      {...register("term")}
                      id="term"
                      className="term"
                    >
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">year</option>
                    </SelectElement>
                  </TermWrapper>
                  <div>
                    <InputField
                      id="duration"
                      registration={register("duration")}
                      type="number"
                      styleType="noBorder"
                      labelText="Duration"
                    />
                  </div>
                </ProductInforamtion>

                <AutoRenewWrapper>
                  <InputField
                    id="autoRenew"
                    registration={register("autoRenew")}
                    type="checkbox"
                    labelText="Auto-Renewal"
                    callbackFun={handlers.selfOfferConnection}
                    disabled={isDisabled}
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
                  <Fragment key={idx}>
                    {!offerIsOn ? (
                      SWITCHES_LABELS.length - 2 > idx && (
                        <InputField
                          id={SWITCHES_IDS[idx]}
                          registration={register(SWITCHES_IDS[idx])}
                          type="checkbox"
                          labelText={`${labelName}`}
                          callbackFun={handlers.switchFunctionHandler(
                            SWITCHES_IDS[idx]
                          )}
                        />
                      )
                    ) : (
                      <InputField
                        id={SWITCHES_IDS[idx]}
                        registration={register(SWITCHES_IDS[idx])}
                        type="checkbox"
                        labelText={`${labelName}`}
                        callbackFun={handlers.switchFunctionHandler(
                          SWITCHES_IDS[idx]
                        )}
                      />
                    )}
                  </Fragment>
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
