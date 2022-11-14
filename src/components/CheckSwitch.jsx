import styled from "styled-components";
import PropTypes from "prop-types";

const LabelBlock = styled.label`
  display: block;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-top: 1.5rem;

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }
  & .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }
  & input:checked + .slider {
    background-color: green;
  }
  & input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }
  & input:checked + .slider:before {
    transform: translateX(26px);
  }
  /* Rounded sliders */

  & .slider.round {
    border-radius: 34px;
  }
  & .slider.round:before {
    border-radius: 50%;
  }
`;

function CheckSwitch({
  labelContent,
  labelStyle,
  registeration,
  callbackFun,
  isDisabled,
  id,
}) {
  return (
    <>
      <LabelBlock htmlFor={id} style={labelStyle}>{labelContent}</LabelBlock>
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
    </>
  );
}

CheckSwitch.propTypes = {
  registeration: PropTypes.object,
  callbackFun: PropTypes.func,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  labelContent: PropTypes.string,
  labelStyle: PropTypes.object,
};

export default CheckSwitch;
