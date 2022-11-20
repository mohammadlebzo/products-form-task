import styled from "styled-components";
import PropTypes from "prop-types";
import { BACKGROUND, BOX, BORDER, MEDIA } from "constants/styles/StyleParams";

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

  @media screen and (${MEDIA.mobile}) {
    width: 100%
  }
`;

const InputNoBorderFull = styled(InputNoBorder)`
  width: 100%;
  margin-right: 1.25rem;
  margin-bottom: 0;
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

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 2.125rem;
  margin-top: 1.5rem;

  & .lock {
    position: absolute;
    bottom: 0.4rem;
    left: 0.8rem;
  }

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${BACKGROUND.color.lightGray};
    transition: 0.4s;
  }
  & .slider:before {
    position: absolute;
    content: "";
    height: 1.625rem;
    width: 1.625rem;
    left: 0.25rem;
    bottom: 0.25rem;
    background-color: ${BACKGROUND.color.white};
    transition: 0.4s;
  }
  & input:checked + .slider {
    background-color: ${BACKGROUND.color.green};
  }
  & input:focus + .slider {
    box-shadow: ${BOX.focusShadow};
  }
  & input:checked + .slider:before {
    transform: translateX(1.625rem);
  }
  /* Rounded sliders */

  & .slider.round {
    border-radius: 2.125rem;
  }
  & .slider.round:before {
    border-radius: 50%;
  }
`;

const SwitchWrapper = styled.div`
  margin-top: 2rem;
`;

function InputField({
  id,
  registration,
  type,
  styleType,
  placeholder,
  labelType,
  labelText,
  disabled = false,
  callbackFun,
}) {
  return (
    <>
      {type === "checkbox" ? (
        <SwitchWrapper className="switchWrapper">
          <label htmlFor={id}>{labelText}</label>
          <Switch>
            <input
              id={id}
              {...registration}
              type="checkbox"
              onChange={callbackFun}
              disabled={disabled}
            />
            <div className="slider round"></div>
            {id === "autoRenew" && disabled === true && <div className="lock">x</div>}
          </Switch>
        </SwitchWrapper>
      ) : labelType === "read" ? (
        <ReaderOnlyLabel htmlFor={id}>{labelText}</ReaderOnlyLabel>
      ) : (
        <label htmlFor={id}>{labelText}</label>
      )}

      {styleType === "noBorder" && (
        <InputNoBorder
          id={id}
          {...registration}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}

      {styleType === "noBorderFull" && (
        <InputNoBorderFull
          id={id}
          {...registration}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}

      {styleType === "withBorder" && (
        <InputWithBorder
          id={id}
          {...registration}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
    </>
  );
}

InputField.propTypes = {
  id: PropTypes.string,
  registration: PropTypes.func,
  type: PropTypes.string,
  styleType: PropTypes.string,
  placeholder: PropTypes.string,
  labelType: PropTypes.string,
  labelText: PropTypes.string,
  disabled: PropTypes.bool,
  callbackFun: PropTypes.func,
};

export default InputField;
