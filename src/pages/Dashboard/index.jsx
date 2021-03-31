import { useQuery } from 'react-query';
import { getData } from 'api';

import StatsCard from 'components/StatsCard';
import VaccineCard from 'components/VaccineCard';
import LastUpdated from 'components/LastUpdated';

import hero from 'assets/images/hero.svg';

const Dashboard = ({ country }) => {
  const { data, isLoading, isError } = useQuery(['stats', country], () =>
    getData(country)
  );

  if (isLoading) return <> {'Loading...'}</>;

  if (isError) return <> {'Error! :('} </>;

  const {
    last_updated_date,
    population,
    total_cases,
    new_cases,
    total_deaths,
    new_deaths,
    total_vaccinations,
    people_vaccinated,
    people_fully_vaccinated,
    new_vaccinations,
    people_vaccinated_per_hundred,
    people_fully_vaccinated_per_hundred,
  } = data;

  return (
    <div className="container lg:items-center m-auto font-poppins tracking-widest flex justify-center flex-col lg:flex-row text-white">
      <img src={hero} className="m-8" alt="People fighting against covid" />

      <div className="flex flex-grow flex-col m-8">
        <LastUpdated date={last_updated_date} />

        <div className="flex flex-col xl:flex-row gap-4 mb-4">
          <StatsCard data={country} subdata={population} type={'country'} />
          <StatsCard data={total_cases} subdata={new_cases} type={'cases'} />
          <StatsCard data={total_deaths} subdata={new_deaths} type={'deaths'} />
        </div>

        <div className="flex flex-col xl:flex-row gap-4">
          <VaccineCard
            data={people_vaccinated}
            subdata={people_vaccinated_per_hundred}
            type={'single'}
          />
          <VaccineCard
            data={people_fully_vaccinated}
            subdata={people_fully_vaccinated_per_hundred}
            type={'double'}
          />
          <VaccineCard
            data={total_vaccinations}
            subdata={new_vaccinations}
            type={'total'}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
