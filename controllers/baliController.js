const axios = require('axios');
const checkCuaca = require('../helpers/checkCuaca');
const parseString = require('xml2js').parseString;

module.exports = async (req, res) => {
  try {
    const ntb = await axios({
      url : 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Bali.xml',
      method : 'GET'
    })
    const xml = ntb.data
    parseString(xml, function (err, result) {      
      const area = {
          Amlapura : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[1].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[1].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[1].parameter[6].timerange[11].value[0]._)
            }
          }
      }
      res.status(200).json({status : true, area})
    });
  } catch (error) {
    res.status(500).json(error)
  }
}