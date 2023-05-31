import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  label: string;
  options: string[];
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

export const Dropdown = ({
  label,
  options,
  selectedItem,
  setSelectedItem,
}: Props) => {
  const [style, setStyle] = useState("text-[#9ca3af]");

  return (
    <Menu
      as="div"
      className="relative inline-block text-left text-input h-auto"
    >
      <div className="full">
        <Menu.Button
          className={`flex w-full items-center justify-between bg-[#262932] font-normal outline-none h-[50px] px-5 rounded-md max-w-5xl ${style}`}
        >
          {label}

          <svg
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 5L0 0H10L5 5Z" fill="#3C68FF" />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-full max-w-5xl h-auto max-h-52 origin-top-right rounded-md bg-[#262932] shadow-lg focus:outline-none overflow-auto">
          {options?.map((option, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  setSelectedItem(option);
                  setStyle("text-white");
                }}
              >
                <Menu.Item>
                  {({ active }) => (
                    <span
                      className={classNames(
                        active
                          ? "bg-[#374151] text-white"
                          : "text-white bg-gray-600",
                        "block px-7 py-4 text-sm cursor-pointer"
                      )}
                    >
                      {option}
                    </span>
                  )}
                </Menu.Item>
              </div>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
