import { useQuery } from 'react-query';
import { getData, getVaccination } from 'api';

import hero from 'assets/images/hero.svg';
import StatsCard from 'components/StatsCard';
import VaccineCard from 'components/VaccineCard';

const Dashboard = ({ country }) => {
  const { data, isLoading, isError } = useQuery(['stats', country], () =>
    getData(country)
  );

  const vaccination = useQuery(['vaccination', country], () =>
    getVaccination(country)
  );

  console.log(vaccination);

  if (isLoading) return <> {'Loading...'}</>;

  if (isError) return <> {'Error! :('} </>;

  const { confirmed, recovered, deaths } = data;

  return (
    <div className="container m-auto mt-10 font-poppins flex">
      <img src={hero} alt="People fighting against covid" />

      <div className="flex flex-row gap-2">
        <StatsCard data={confirmed} />
        <StatsCard data={recovered} />
        <StatsCard data={deaths} />

        <VaccineCard />
        <VaccineCard />
      </div>
    </div>
  );
};

export default Dashboard;
