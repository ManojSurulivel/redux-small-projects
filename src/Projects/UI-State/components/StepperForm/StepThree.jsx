import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { prevStep } from "../../../../redux/slices/formSliceUI";

const StepThree = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formUi.formData);

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h2>Step 3: Review and Submit</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;
