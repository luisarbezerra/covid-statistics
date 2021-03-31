const Bar = ({ date, countries, country, setCountry }) => (
  <div className="flex flex-col lg:flex-row text-gray-400 items-center p-2  mb-4">
    <select
      className="mr-4 p-0.5 px-2 bg-gray-200 rounded-md text-gray-600 uppercase text-4xl lg:text-sm"
      defaultValue={country}
      onChange={(e) => setCountry(e.target.value)}
    >
      {countries.map((opt, index) => (
        <option key={index} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    <hr className="flex-1 hidden lg:block border-gray-200" />
    <span className="ml-4 uppercase text-3xl lg:text-xs mt-4 lg:mt-0">
      Last Updated at: <strong>{date}</strong>
    </span>
  </div>
);

export default Bar;
