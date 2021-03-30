import { coronavirus, globe, mask, upArrow } from 'assets/icons';

const typeConfig = {
  title: {
    country: 'COUNTRY',
    cases: 'TOTAL CASES',
    deaths: 'TOTAL DEATHS',
  },
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

const StatsCard = ({ data, subdata, type }) => (
  <div
    className={`${typeConfig['color'][type]} mb-2 h-auto flex-1 rounded-3xl p-5 shadow-lg relative`}
  >
    <div className="flex flex-col">
      <div className="flex mb-2 items-center">
        <span className="text-sm">{typeConfig['title'][type]}</span>
        <img
          src={typeConfig['icons'][type]}
          alt="Card icon"
          className="invert ml-auto h-7"
        />
      </div>
      <div className="flex flex-col text-center">
        <span className="text-4xl font-bold uppercase mb-2">
          {type === 'country' ? data : Number(data).toLocaleString()}
        </span>
        <span className="flex items-center mx-auto text-sm">
          {type === 'country' ? (
            'POPULATION: '
          ) : (
            <img
              src={upArrow}
              alt="Up arrow"
              className="invert h-4 mb-0.5 mr-1"
            />
          )}
          {Number(subdata).toLocaleString()}
          {type !== 'country' ? ' today' : ''}
        </span>
      </div>
    </div>
  </div>
);

export default StatsCard;
