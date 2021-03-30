import { useQuery } from 'react-query';
import { getData } from 'api';

import StatsCard from 'components/StatsCard';
import VaccineCard from 'components/VaccineCard';

import hero from 'assets/images/hero.svg';

const Dashboard = ({ country }) => {
  const { data, isLoading, isError } = useQuery(['stats', country], () =>
    getData(country)
  );

  if (isLoading) return <> {'Loading...'}</>;

  if (isError) return <> {'Error! :('} </>;

  const {
    population,
    total_cases,
    new_cases,
    total_deaths,
    new_deaths,
    people_vaccinated,
    people_fully_vaccinated,
  } = data;

  return (
    <div className="container m-auto font-poppins flex justify-center flex-col lg:flex-row text-white">
      <img src={hero} className="m-8" alt="People fighting against covid" />

      <div className="flex flex-grow flex-col">
        <div className="flex flex-grow flex-row gap-4 mb-4">
          <StatsCard data={country} daily={population} type={'country'} />
          <StatsCard data={total_cases} daily={new_cases} type={'cases'} />
          <StatsCard data={total_deaths} daily={new_deaths} type={'deaths'} />
        </div>

        <div className="flex flex-grow flex-row gap-4">
          <VaccineCard data={people_vaccinated} />
          <VaccineCard data={people_fully_vaccinated} double />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
