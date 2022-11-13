import styled from "styled-components";
import { get, useForm } from "react-hook-form";
import CheckSwitch from "components/CheckSwitch";
import { useState } from "react";

const Button = styled.button`
  &:first-of-type {
    margin: 0;
  }
  margin-left: 1rem;
  color: black;
  padding: 0.938rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border: solid 0.188rem black;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 0;
    background-color: blue;
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
  font-size: 1.5rem;

  & form {
    display: flex;
    width: 100%;
    height: 30rem;
  }
`;

const RightSideContent = styled.div`
  width: 49%;
  float: right;
  margin: 2rem;
  font-size: 1.2rem;
`;

const LeftSideContent = styled.div`
  width: 49%;
  float: left;
  margin: 2rem;
`;

const InputNoBorder = styled.input`
  outline: 0;

  border: 0;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  border-bottom-style: solid;

  margin-bottom: 5rem;
  font-size: 1.2rem;
`;

const JustifyCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  //   align-items: center;
`;

const LabelBlock = styled.label`
  display: block;
`;

const ProductInforamtion = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const UnderlinedTab = styled.div`
  border: 0;
  border-bottom-width: 3px;
  border-bottom-color: goldenrod;
  border-bottom-style: solid;
  border-raduis: 5px;
  width: 8%;
  clear: both;

  & p {
    // margin-left: 2rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

const PageHeader = styled.div`
  border: 0;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  border-bottom-style: solid;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & h1 {
    font-size: 2rem;
    margin-left: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const SelectElement = styled.select`
  border: 0;
  border-bottom-width: 1px;
  border-bottom-color: gray;
  border-bottom-style: solid;
  background-color: white;

  &.products {
    width: 100%;
    padding-right: 20px;
    margin-bottom: 5rem;
    height: 3rem;
    font-size: 1.3rem;
  }
`;

function Form() {
  const {
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
      amount: "",
      duration: 0,
      autoRenew: false,
      selfOffer: false,
      giftOffer: false,
      promotedQ: false,
      iCareQ: false,
      trailQ: false,
      freeTrail: false,
      reducedTrail: false,
    },
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const onSubmit = (data) => console.log(data);

  const selfOfferConnectionHandler = (e) => {
    const autoRenew = watch("autoRenew");
    const selfOffer = watch("selfOffer");

    if (!autoRenew && !selfOffer) {
      setValue("autoRenew", true);
    } else if (autoRenew && selfOffer) {
      setValue("autoRenew", false);
    }
  };

  const disableAutoRenewHandler = (e) => {
    const giftOffer = watch("giftOffer");

    if (!giftOffer) {
      setValue("autoRenew", false);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  return (
    <>
      <PageHeader>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>
            {watch("title").length > 0 ? watch("title") : "Untitled Offer"}
          </h1>
          <ButtonsWrapper>
            <Button>Save Draft</Button>
          </ButtonsWrapper>
        </div>

        <UnderlinedTab>
          <p>Offer</p>
        </UnderlinedTab>
      </PageHeader>

      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LeftSideContent>
            <JustifyCenterWrapper>
              <div>
                <div>
                  <InputNoBorder
                    id="title"
                    {...register("title", { required: true })}
                    type="text"
                    placeholder="Offer Title"
                    style={{ width: "100%", marginRight: "20px" }}
                  />
                </div>

                <div>
                  {/* <LabelBlock htmlFor="header">Offer Header</LabelBlock> */}
                  <InputNoBorder
                    id="header"
                    {...register("header", { required: true })}
                    type="text"
                    placeholder="Offer Header"
                    style={{ width: "100%", marginRight: "20px" }}
                  />
                </div>

                <div>
                  {/* <LabelBlock htmlFor="products">Products</LabelBlock> */}
                  <SelectElement
                    name="products"
                    id="products"
                    className="products"
                  >
                    <option value="" selected disabled hidden>
                      Products
                    </option>
                    <option value="op0">option-0</option>
                    <option value="op1">option-1</option>
                    <option value="op2">option-2</option>
                    <option value="op3">option-3</option>
                    <option value="op4">option-4</option>
                    <option value="op5">option-5</option>
                    <option value="op6">option-6</option>
                    <option value="op7">option-7</option>
                    <option value="op8">option-8</option>
                    <option value="op9">option-9</option>
                  </SelectElement>
                </div>

                <ProductInforamtion>
                  <InputNoBorder
                    {...register("amount")}
                    type="number"
                    placeholder="Amount"
                  />
                  <div style={{ marginRight: "1.2rem", marginLeft: "1.2rem" }}>
                    <LabelBlock htmlFor="term" style={{ color: "#aaa" }}>
                      Term
                    </LabelBlock>
                    <SelectElement name="term" id="term">
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">year</option>
                    </SelectElement>
                  </div>
                  <div>
                    <LabelBlock htmlFor="duration" style={{ color: "#aaa" }}>
                      Duration
                    </LabelBlock>
                    <InputNoBorder
                      id="duration"
                      {...register("duration")}
                      type="number"
                    />
                  </div>
                </ProductInforamtion>

                <div>
                  <LabelBlock style={{ fontSize: "1.05rem" }}>
                    Auto-Renewal
                    <br />
                    <CheckSwitch
                      registeration={register("autoRenew")}
                      callbackFun={() => console.log()}
                      isDisabled={isDisabled}
                    />
                  </LabelBlock>
                </div>
              </div>
            </JustifyCenterWrapper>
          </LeftSideContent>

          <RightSideContent>
            <JustifyCenterWrapper>
              <div>
                <label htmlFor="">Offer Type</label>
                <div
                  style={{
                    marginLeft: "3rem",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                >
                  <label>
                    Self Offer
                    <br />
                    <CheckSwitch
                      registeration={register("selfOffer")}
                      callbackFun={selfOfferConnectionHandler}
                    />
                  </label>
                  <br />
                  <label>
                    Gift Offer
                    <br />
                    <CheckSwitch
                      registeration={register("giftOffer")}
                      callbackFun={disableAutoRenewHandler}
                    />
                  </label>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label>
                    Is this offer promoted?
                    <br />
                    <CheckSwitch
                      registeration={register("promotedQ")}
                      callbackFun={() => console.log()}
                    />
                  </label>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label>
                    Is this offer an iCare default offer?
                    <br />
                    <CheckSwitch
                      registeration={register("iCareQ")}
                      callbackFun={() => console.log()}
                    />
                  </label>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <label htmlFor="">
                    Trail Offer?
                    <br />
                    <CheckSwitch
                      registeration={register("trailQ")}
                      callbackFun={() => console.log()}
                    />
                  </label>
                </div>

                <div style={{ marginBottom: "2rem", marginLeft: "3rem" }}>
                  <label>
                    Free Trail
                    <br />
                    <CheckSwitch
                      registeration={register("freeTrail")}
                      callbackFun={() => console.log()}
                    />
                  </label>
                  <br />
                  <label>
                    Reduced Price Trail
                    <br />
                    <CheckSwitch
                      registeration={register("reducedTrail")}
                      callbackFun={() => console.log()}
                    />
                  </label>
                </div>
              </div>
            </JustifyCenterWrapper>
          </RightSideContent>
        </form>
      </FormWrapper>
    </>
  );
}

export default Form;
