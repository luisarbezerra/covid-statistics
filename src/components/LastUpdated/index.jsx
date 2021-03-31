const LastUpdated = ({ date }) => (
  <div className="flex text-gray-400 items-center  mb-4">
    <hr className="flex-1 border-current" />
    <span className="ml-4 uppercase text-xs">Last Updated at: {date}</span>
  </div>
);

export default LastUpdated;
