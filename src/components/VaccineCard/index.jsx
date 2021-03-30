import { vaccine } from 'assets/icons';

const typeConfig = {
  color: {
    single: 'bg-cyan-light',
    double: 'bg-cyan',
  },
};

const VaccineCard = ({ data, double = false }) => {
  const color = double
    ? typeConfig['color']['double']
    : typeConfig['color']['single'];

  return (
    <div className={`${color} mb-2 flex-1 rounded-lg p-4 shadow-lg`}>
      <img
        src={vaccine}
        alt="Vaccine icon"
        style={{ filter: 'invert(100%)' }}
      />
      {double && (
        <img
          src={vaccine}
          alt="Vaccine icon"
          style={{ filter: 'invert(100%)' }}
        />
      )}
      {data}
    </div>
  );
};

export default VaccineCard;
