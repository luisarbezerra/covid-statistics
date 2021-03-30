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
    <div className={`${color} mb-2 flex-1 rounded-3xl p-4 shadow-lg`}>
      <img src={vaccine} alt="Vaccine icon" className="invert" />
      {double && <img src={vaccine} alt="Vaccine icon" className="invert" />}
      {data}
    </div>
  );
};

export default VaccineCard;
