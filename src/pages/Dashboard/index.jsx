import { useState } from 'react';
import { useQuery } from 'react-query';
import groupBy from 'lodash/groupBy';

import { getData } from 'api';
import StatsCard from 'components/StatsCard';
import VaccineCard from 'components/VaccineCard';
import Bar from 'components/Bar';

import { logo, hero } from 'assets/images';

const Dashboard = () => {
  let storedCountry = localStorage.getItem('country');
  const [country, setCountry] = useState(storedCountry ?? 'Brazil');

  const { data, isLoading, isError } = useQuery(['data'], () => getData());

  if (isLoading) return '';

  if (isError) return '';

  const handleCountryChange = (country) => {
    setCountry(country);
    localStorage.setItem('country', country);
  };

  const groupedData = groupBy(data, 'location');

  const finalData = groupedData[country][groupedData[country].length - 1];

  const countries = Object.keys(groupedData);

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
  } = finalData;

  return (
    <main className="lg:container px-8 mx-auto pb-8 mt-8 xl:mt-20 font-poppins tracking-widest flex flex-col xl:flex-row text-white">
      <h1 className="sr-only">
        {'Covid statistics'}
      </h1>
      <div className="mt-20">
        <img
          src={hero}
          className="pr-8 hidden xl:block "
          alt="People fighting against covid"
        />
        <img
          src={logo}
          className="px-8 block xl:hidden"
          alt="Covid Stats"
        />
      </div>

      <div className="flex flex-grow flex-col m-8">
        <img
          src={logo}
          className="p-8 hidden xl:block"
          alt="Covid Stats"
        />

        <Bar
          date={last_updated_date}
          country={country}
          setCountry={handleCountryChange}
          countries={countries}
        />

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
    </main>
  );
};

export default Dashboard;
