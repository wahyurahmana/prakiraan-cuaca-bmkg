const axios = require('axios');
const xmlToJSON = require('../helpers/xmlToJSON');

module.exports = async (req, res) => {
  try {
    const bangkaBelitung = await axios({
      url : 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-BangkaBelitung.xml',
      method : 'GET'
    })
    const xml = bangkaBelitung.data
    const area = await xmlToJSON(xml)
    res.status(200).json({status : true, area})
  } catch (error) {
    res.status(500).json(error)
  }
}