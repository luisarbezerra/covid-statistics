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
        <span className="text-sm">{typeConfig['title'][type]}</span>
        <div className="flex flex-row ml-auto">
          <img
            src={typeConfig['icons'][type]}
            alt="Vaccine icon"
            className="invert  h-7"
          />
          {type === 'double' && (
            <img
              src={typeConfig['icons'][type]}
              alt="Vaccine icon"
              className="invert  h-7"
            />
          )}
        </div>
      </div>
      <div className="flex flex-col text-center">
        <span className="text-4xl font-bold uppercase mb-2">
          {data === '' ? 'N/A' : Number(data).toLocaleString()}
        </span>
        <span className="flex items-center mx-auto text-sm">
          {data === '' ? (
            ''
          ) : (
            <>
              {type === 'total' ? (
                <img
                  src={upArrow}
                  alt="Up arrow"
                  className="invert h-4 mb-0.5 mr-1"
                />
              ) : (
                ''
              )}
              {Number(subdata).toLocaleString()}
              {type === 'total' ? ' today' : '%'}
            </>
          )}
        </span>
      </div>
    </div>
  </div>
);

export default VaccineCard;
