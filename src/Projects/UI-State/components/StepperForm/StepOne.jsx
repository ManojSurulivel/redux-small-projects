import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, nextStep } from "../../../../redux/slices/formSliceUI";

const StepOne = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.formUi.formData);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={handleChange}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
