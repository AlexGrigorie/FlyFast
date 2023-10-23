import React, { useState } from "react";
interface InputTextProps {
  image: React.ReactNode;
  placeholder: string;
  label: string;
  type: string;
  extraStyle?: string;
  min?: string;
  isDisabled?: boolean;
  colorIsDisabled?: string;
  onChange: (value: string) => void;
}

function InputText({
  image,
  placeholder,
  label,
  type,
  extraStyle,
  min,
  isDisabled,
  colorIsDisabled,
  onChange,
}: InputTextProps) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };
  return (
    <div className={`flex border border-gray-300 px-3 py-3 ${extraStyle}`}>
      <div className="border-r-gray-300 border-r-[1px] pr-4 rounded-sm">
        {image}
      </div>
      <input
        type={type}
        className={`ml-3 outline-none border-none w-full ${colorIsDisabled}`}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        min={min}
        disabled={isDisabled}
      />
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
}

export default InputText;
