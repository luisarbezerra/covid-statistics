const StatsCard = ({ data }) => (
  <div className="bg-blue-500 mb-2 flex-1 rounded-lg p-4 shadow-lg relative">
    {data?.value}
  </div>
);

export default StatsCard;
