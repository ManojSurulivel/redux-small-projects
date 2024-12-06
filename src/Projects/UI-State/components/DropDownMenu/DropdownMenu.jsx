import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDropdown, closeDropdown } from "../../../../redux/slices/dropdownSlice";

const DropdownMenu = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.dropdown.isOpen);

  const handleOutsideClick = () => {
    dispatch(closeDropdown());
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Button to toggle the dropdown */}
      <button
        onClick={() => dispatch(toggleDropdown())}
        className="dropdown-button"
      >
        Toggle Dropdown
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className="dropdown-menu"
          onBlur={handleOutsideClick}
          tabIndex={0} // Allows blur event on div
        >
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
