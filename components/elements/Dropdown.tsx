import React, { useRef, useState } from "react";
import { useOnClickOutside } from "@/hooks";

interface OptionProps {
  id: number | string;
  label: string;
}

interface DropdownProps {
  title?: string;
  className?: string;
  options: OptionProps[];
  selected: OptionProps | undefined;
  onChange: any;
  dropdownClassName?: string;
  titleClassName?: string;
  selectedClassName?: string;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    title,
    selected,
    placeholder,
    options,
    className = "",
    onChange,
    dropdownClassName,
    titleClassName,
    selectedClassName,
  } = props;

  const [isOpen, setOpen] = useState(false);

  const ref: any = useRef();

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative w-full">
      {title && <h6 className={`mb-3 text-sm ${titleClassName}`}>{title}</h6>}
      <button
        className={`text-white border border-white rounded-xl ${className}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div
          style={{ background: !className ? "rgba(0, 0, 0, 0.4)" : "" }}
          className={`px-2 py-1 flex items-center justify-between w-full ${selectedClassName}`}
        >
          <span className="mr-2 text-sm w-12 text-left whitespace-nowrap">
            {selected?.label || placeholder || "Select"}
          </span>
          <svg
            className={`fill-current h-4 w-4 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 13l-5-5h10l-5 5z" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          className={`absolute top-16 z-50 left-0 w-full rounded-md shadow-lg bg-[#191A1A] ${dropdownClassName}`}
          ref={ref}
        >
          {options.map((option) => (
            <button
              key={option.id}
              className="block w-full text-left text-black px-4 py-2 hover:bg-gray-900 whitespace-nowrap"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
