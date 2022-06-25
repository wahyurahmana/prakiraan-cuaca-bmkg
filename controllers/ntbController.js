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
      const area = {
          Dompu : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[0].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[0].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[0].parameter[6].timerange[11].value[0]._)
            }
          },
          Gerung : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[1].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[1].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[1].parameter[6].timerange[11].value[0]._)
            }
          },
          Kota_Bima : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[2].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[2].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[2].parameter[6].timerange[11].value[0]._)
            }
          },
          Mataram : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[3].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[3].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[3].parameter[6].timerange[11].value[0]._)
            }
          },
          Praya : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[4].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[4].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[4].parameter[6].timerange[11].value[0]._)
            }
          },
          Sape : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[5].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[5].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[5].parameter[6].timerange[11].value[0]._)
            }
          },
          Selong : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[6].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[6].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[6].parameter[6].timerange[11].value[0]._)
            }
          },
          Sumbawa_Besar : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[7].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[7].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[7].parameter[6].timerange[11].value[0]._)
            }
          },
          Taliwang : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[8].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[8].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[8].parameter[6].timerange[11].value[0]._)
            }
          },
          Tanjung : {
            cuaca : {
              hari_ini : checkCuaca(result.data.forecast[0].area[9].parameter[6].timerange[3].value[0]._),
              besok : checkCuaca(result.data.forecast[0].area[9].parameter[6].timerange[7].value[0]._),
              lusa : checkCuaca(result.data.forecast[0].area[9].parameter[6].timerange[11].value[0]._)
            }
          }
      }
      res.status(200).json({status : true, area})
    });
  } catch (error) {
    res.status(500).json(error)
  }
}