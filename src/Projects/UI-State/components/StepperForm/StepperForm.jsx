import React from "react";
import { useSelector } from "react-redux";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const StepperForm = () => {
  const step = useSelector((state) => state.formUi.step);

  return (
    <div>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
};

export default StepperForm;
