const checkCuaca = require('../helpers/checkCuaca');
const parseString = require('xml2js').parseString;


const xmlToJSON = (xml) => {
  return new Promise((resolve, reject) => {
    const area = []
    parseString(xml, function (err, result) {
      if (err) {
        reject('ERROR PARSE')
      } else {
        for (let i = 0; i < result.data.forecast[0].area.length; i++) {
          let daerah = result.data.forecast[0].area[i].$.description
          if(!result.data.forecast[0].area[i].parameter){
            continue;
          }else{
            area.push({
              daerah,
              cuaca : {
                hariIni : checkCuaca(result.data.forecast[0].area[i].parameter[6].timerange[3].value[0]._),
                besok : checkCuaca(result.data.forecast[0].area[i].parameter[6].timerange[7].value[0]._),
                lusa : checkCuaca(result.data.forecast[0].area[i].parameter[6].timerange[11].value[0]._)
              }
            })
          }
        }
        resolve(area)
      }
    });
  })

}

module.exports = xmlToJSON