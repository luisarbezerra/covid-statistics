export const getData = async () => {
  const csv = require('csvtojson');

  const csvStr = await fetch(
    'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv'
  ).then((res) => res.text());

  return await csv().fromString(csvStr);
};
