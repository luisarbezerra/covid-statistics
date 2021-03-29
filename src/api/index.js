import groupBy from 'lodash/groupBy';
/**
 *
 * @param country {string}
 */
export const getData = async (country) => {
  const csv = require('csvtojson');

  const csvStr = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv'
  ).then((res) => res.text());

  const data = await csv().fromString(csvStr);

  const groupedData = groupBy(data, 'location');

  const index = Object.keys(groupedData[country])[
    Object.keys(groupedData[country]).length - 1
  ];

  return groupedData[country][index];
};
