import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, nextStep, prevStep } from "../../../../redux/slices/formSliceUI";

const StepTwo = () => {
  const dispatch = useDispatch();
  const { address, city } = useSelector((state) => state.formUi.formData);

  const handleChange = (e) => {
    dispatch(updateFormData({ [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <input
        type="text"
        name="address"
        value={address}
        placeholder="Address"
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        value={city}
        placeholder="City"
        onChange={handleChange}
      />
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepTwo;
