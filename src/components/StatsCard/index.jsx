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
    className={`${typeConfig['color'][type]} mb-2 h-auto flex flex-col flex-1 rounded-3xl p-5 shadow-lg relative `}
  >
    <div className="flex flex-col flex-1">
      <div className="flex mb-2 items-center">
        <span className="text-3xl lg:text-sm">{typeConfig['title'][type]}</span>
        <img
          src={typeConfig['icons'][type]}
          alt=""
          className="invert ml-auto h-12 lg:h-7"
        />
      </div>
      <div className="flex flex-col text-center justify-center my-auto">
        <span className="text-6xl lg:text-4xl font-bold uppercase mb-2">
          {data === ''
            ? 'N/A'
            : type === 'country'
            ? data
            : Number(data).toLocaleString()}
        </span>
        <span className="flex items-center mx-auto text-3xl lg:text-sm justify-center flex-1">
          {subdata === '' ? (
            (data === '' ? '' : 'N/A')
          ) : (
            <>
              {type === 'country' ? (
                'POPULATION: '
              ) : (
                <img
                  src={upArrow}
                  alt="Increased by"
                  className="invert h-6 lg:h-4 mb-0.5 mr-1"
                />
              )}
              {Number(subdata).toLocaleString()}
              {type !== 'country' ? ' today' : ''}
            </>
          )}
        </span>
      </div>
    </div>
  </div>
);

export default StatsCard;
