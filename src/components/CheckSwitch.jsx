import styled from "styled-components";
import PropTypes from "prop-types";
import { BACKGROUND, BOX } from "constants/styles/StyleParams";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3.75rem;
  height: 2.125rem;
  margin-top: 1.5rem;

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

function CheckSwitch({
  id,
  labelContent,
  registeration,
  callbackFun,
  isDisabled,
}) {
  return (
    <>
      <SwitchWrapper className="switchWrapper">
        <label htmlFor={id}>{labelContent}</label>
        <Switch>
          <input
            id={id}
            {...registeration}
            type="checkbox"
            onChange={callbackFun}
            disabled={isDisabled}
          />
          <div className="slider round"></div>
        </Switch>
      </SwitchWrapper>
    </>
  );
}

CheckSwitch.propTypes = {
  id: PropTypes.string,
  labelContent: PropTypes.string,
  registeration: PropTypes.object,
  callbackFun: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default CheckSwitch;
