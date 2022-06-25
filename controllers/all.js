const axios = require('axios');
const checkCuaca = require('../helpers/checkCuaca');
const parseString = require('xml2js').parseString;

module.exports = async (req, res) => {
  try {
    const ntb = await axios({
      url : 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-NusaTenggaraBarat.xml',
      method : 'GET'
    })
    const xml = ntb.data
    parseString(xml, function (err, result) {      
      res.status(200).json(result.data.forecast)
    });
  } catch (error) {
    res.status(500).json(error)
  }
}