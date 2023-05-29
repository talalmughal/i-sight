interface Props {
  name: string;
  label: string;
  options: any[];
  defaultOption: string;
}

export const RadioButton = ({ name, label, options, defaultOption }: Props) => {
  return (
    <div className="flex flex-col gap-2.5">
      <span className="text-sm font-medium">{label}</span>

      <fieldset className="bg-[#262932] w-full max-w-3xl rounded-md">
        <div className="font-normal outline-none h-auto p-5 space-y-4 md:grid md:grid-flow-row md:grid-cols-2 md:space-y-0 xl:grid xl:grid-flow-row xl:items-center xl:grid-cols-4 xl:space-y-0 xl:space-x-10">
          {options.map((option) => (
            <div
              key={option?.id}
              className="flex items-center w-full md:py-2 xl:py-0"
            >
              <label className="flex items-center">
                <input
                  id={option?.id}
                  name={name}
                  type="radio"
                  defaultChecked={option?.id === defaultOption}
                  className="h-4 w-4 border-gray-300 text-blue-500 focus:ring-blue-500"
                />

                <span className="px-3 block text-base font-normal">
                  {option?.title}
                </span>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
