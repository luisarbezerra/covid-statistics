import { vaccine, protect, upArrow } from 'assets/icons';

const typeConfig = {
  title: {
    single: 'FIRST DOSE',
    double: 'SECOND DOSE',
    total: 'TOTAL DOSES',
  },
  icons: {
    single: vaccine,
    double: vaccine,
    total: protect,
  },
  color: {
    single: 'bg-cyan-light',
    double: 'bg-cyan',
    total: 'bg-cyan-dark',
  },
};

const VaccineCard = ({ data, subdata, type }) => (
  <div
    className={`${typeConfig['color'][type]} mb-2 h-auto flex-1 rounded-3xl p-5 shadow-lg relative`}
  >
    <div className="flex flex-col">
      <div className="flex mb-2 items-center">
        <span className="text-3xl lg:text-sm">{typeConfig['title'][type]}</span>
        <div className="flex flex-row ml-auto">
          <img
            src={typeConfig['icons'][type]}
            alt=""
            className="invert  h-12 lg:h-7"
          />
          {type === 'double' && (
            <img
              src={typeConfig['icons'][type]}
              alt=""
              className="invert  h-12 lg:h-7"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col text-center">
        <span className="text-6xl lg:text-4xl font-bold uppercase mb-2">
          {data === '' ? 'N/A' : Number(data).toLocaleString()}
        </span>
        <span className="flex items-center mx-auto text-3xl lg:text-sm">
          {subdata === '' ? (data === '' ? '' : 'N/A')
           : (
            <>
              {type === 'total' ? (
                <img
                  src={upArrow}
                  alt="Increased by"
                  className="invert h-6 lg:h-4 mb-0.5 mr-1"
                />
              ) : (
                ''
              )}
              {Number(subdata).toLocaleString()}
              {type === 'total' ? ' today' : '% of total population'}
            </>
          )}
        </span>
      </div>
    </div>
  </div>
);

export default VaccineCard;
