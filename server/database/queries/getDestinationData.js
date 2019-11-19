const dbConnection = require('./../db_connection');

const getDestinationData = country => {
  return dbConnection.query('SELECT * FROM destination WHERE country = $1', [
    country
  ]);
};

module.exports = getDestinationData;
