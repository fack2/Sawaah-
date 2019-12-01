const getDestinationData = require('../database/queries/getDestinationData');

exports.getDestinationInfo = (req, res) => {
  getDestinationData()
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => console.log(err));
};
