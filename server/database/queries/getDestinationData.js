const dbConnection = require('./../db_connection');

const getDestinationData = country => {
  return dbConnection.query('select * from destination where country = $1', [
    country
  ]);
};

module.exports = getDestinationData;
