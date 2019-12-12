const dbConnection = require('./../db_connection');

const getDestinationData = () => {
  return dbConnection.query('SELECT * FROM destination');
};

module.exports = getDestinationData;
