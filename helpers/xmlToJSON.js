const checkCuaca = require('../helpers/checkCuaca');
const checkArahAngin = require('../helpers/checkArahAngin');
const parseString = require('xml2js').parseString;


const xmlToJSON = (xml) => {
  return new Promise((resolve, reject) => {
    parseString(xml, function (err, result) {
      if (err) {
        reject('ERROR PARSE')
      } else {
        const forecast = []
        for(let i = 0; i < result.data.forecast[0].area.length; i++){
          if(!result.data.forecast[0].area[i].parameter){
            continue
          }else{
            forecast.push({
              daerah : result.data.forecast[0].area[i].$.description,
              ramalan : [{
                cuaca : {
                  kemarin : checkCuaca(result.data.forecast[0].area[i].parameter[6].timerange[3].value[0]._),
                  hariIni : checkCuaca(result.data.forecast[0].area[i].parameter[6].timerange[5].value[0]._),
                  besok : checkCuaca(result.data.forecast[0].area[i].parameter[6].timerange[9].value[0]._)
                }
              },{
                kelembapanUdara : {
                  kemarin : `${result.data.forecast[0].area[i].parameter[0].timerange[3].value[0]._}%`,
                  hariIni : `${result.data.forecast[0].area[i].parameter[0].timerange[5].value[0]._}%`,
                  besok : `${result.data.forecast[0].area[i].parameter[0].timerange[9].value[0]._}%`
                }
              },{
                suhuUdara : {
                  kemarin : `${result.data.forecast[0].area[i].parameter[5].timerange[3].value[0]._}°C`,
                  hariIni : `${result.data.forecast[0].area[i].parameter[5].timerange[5].value[0]._}°C`,
                  besok : `${result.data.forecast[0].area[i].parameter[5].timerange[9].value[0]._}°C`
                }
              },{
                arahAngin : {
                  kemarin : checkArahAngin(result.data.forecast[0].area[i].parameter[7].timerange[3].value[1]._),
                  hariIni : checkArahAngin(result.data.forecast[0].area[i].parameter[7].timerange[5].value[1]._),
                  besok : checkArahAngin(result.data.forecast[0].area[i].parameter[7].timerange[9].value[1]._)
                }
              },{
                kecepatanAngin : {
                  kemarin : `${result.data.forecast[0].area[i].parameter[8].timerange[3].value[0]._} Knot`,
                  hariIni : `${result.data.forecast[0].area[i].parameter[8].timerange[5].value[0]._} Knot`,
                  besok : `${result.data.forecast[0].area[i].parameter[8].timerange[9].value[0]._} Knot`
                }
              }
            ]
            })
          }
        }
        resolve(forecast)
      }
    });
  })

}

module.exports = xmlToJSON