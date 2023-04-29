import { useState } from "react";
import PropTypes from "prop-types";

interface Target {
  value: string;
}

export const AddCategories = ({ onNewCategories }: { onNewCategories: Function }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: { target: Target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    onNewCategories(inputValue.trim());
    setInputValue("");
  };

  return (
    <form aria-label="form" onSubmit={onSubmit}>
      <div className="mb-4 mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          className="block w-50 rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-lime-300 focus:ring-green-100 sm:text-sm sm:leading-6"
          placeholder="Search Gift"
          value={inputValue}
          onChange={onInputChange}
        />
      </div>
    </form>
  );
};

AddCategories.propTypes = {
  onNewCategories: PropTypes.func.isRequired
}