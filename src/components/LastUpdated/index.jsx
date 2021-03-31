const LastUpdated = ({ date }) => (
  <div className="flex text-gray-400 items-center  mb-4">
    <hr className="flex-1 border-gray-200" />
    <span className="ml-4 uppercase text-xs">
      Last Updated at: <b>{date}</b>
    </span>
  </div>
);

export default LastUpdated;
