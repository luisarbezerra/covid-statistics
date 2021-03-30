import { coronavirus, globe, mask } from 'assets/icons';

const typeConfig = {
  icons: {
    country: globe,
    cases: mask,
    deaths: coronavirus,
  },
  color: {
    country: 'bg-green-400',
    cases: 'bg-purple-400',
    deaths: 'bg-red-400',
  },
};

const StatsCard = ({ data, daily, type }) => (
  <div
    className={`${typeConfig['color'][type]} mb-2 flex-1 rounded-lg p-4 shadow-lg relative`}
  >
    <img
      src={typeConfig['icons'][type]}
      alt="Card icon"
      style={{ filter: 'invert(100%)' }}
    />
    {data}
    {daily}
  </div>
);

export default StatsCard;
