import groupBy from 'lodash/groupBy';

export const getData = (country) =>
  fetch(`https://covid19.mathdro.id/api/countries/${country}`).then((data) =>
    data.json()
  );

export const getVaccination = async (country) => {
  const csv = require('csvtojson');

  const csvStr = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv'
  ).then((res) => res.text());

  const data = await csv().fromString(csvStr);

  const groupedData = groupBy(data, 'location');

  const index = Object.keys(groupedData['Brazil'])[
    Object.keys(groupedData['Brazil']).length - 1
  ];

  return groupedData[country][index];
};
