import Select from "react-select";

const arrayToOptions = (options) => {
  const items = [];
  options.forEach((option) => {
    items.push({
      label: option,
      value: option,
    });
  });
  return items;
};

const Bar = ({ date, countries, country, setCountry }) => {
  const options = arrayToOptions(countries);
  const defaultOptionIndex = options.findIndex(
    (option) => option.value === country
  );
  return (
    <div className="flex flex-col lg:flex-row text-gray-400 items-center p-2  mb-4">
      <div className="mr-4 w-64">
        <Select
          aria-label="Choose your country"
          defaultValue={options[defaultOptionIndex]}
          onChange={(opt) => setCountry(opt.value)}
          options={options}
        />
      </div>
      <hr className="flex-1 hidden lg:block border-gray-200" />
      <span className="ml-4 uppercase text-3xl lg:text-xs mt-4 lg:mt-0">
        Last Updated at: <b>{date}</b>
      </span>
    </div>
  );
};

export default Bar;
