import React from "react";

interface ButtonProps {
  label: string;
  extraStyle?: string;
  onClick?: (event: any) => void;
}

const Button = ({ label, extraStyle, onClick }: ButtonProps) => {
  return (
    <div className={`${extraStyle}`}>
      <button className="w-full">
        <div className="py-2 bg-yellow-400 text-sm rounded-md">
          <p className="text-white text-center" onClick={onClick}>
            {label}
          </p>
        </div>
      </button>
    </div>
  );
};

export default Button;
