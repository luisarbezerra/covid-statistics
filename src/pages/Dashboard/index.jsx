import { useQuery } from 'react-query';
import { getData } from 'api';

import hero from 'assets/images/hero.svg';
import StatsCard from 'components/StatsCard';
import VaccineCard from 'components/VaccineCard';

const Dashboard = ({ country }) => {
  const { data, isLoading, isError } = useQuery(['stats', country], () =>
    getData(country)
  );

  if (isLoading) return <> {'Loading...'}</>;

  if (isError) return <> {'Error! :('} </>;

  const {
    total_cases,
    total_deaths,
    people_vaccinated,
    people_fully_vaccinated,
  } = data;

  return (
    <div className="container m-auto font-poppins flex justify-center flex-col lg:flex-row">
      <img src={hero} className="m-8" alt="People fighting against covid" />

      <div className="flex flex-grow flex-col">
        <div className="flex flex-grow flex-row gap-4 mb-4">
          <StatsCard data={total_cases} />
          <StatsCard data={total_cases} />
          <StatsCard data={total_deaths} />
        </div>

        <div className="flex flex-grow flex-row gap-4">
          <VaccineCard data={people_vaccinated} />
          <VaccineCard data={people_fully_vaccinated} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
