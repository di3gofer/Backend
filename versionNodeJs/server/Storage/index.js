var fs = require('fs'),
    path = require('path')

module.exports = {
  /*saveData: function(dataType, newData, data){
    console.log(dataType);
    console.log(newData);
    console.log(data.current);
    var dataPath = dataType == 'users' ? __dirname + path.join('/data/users.json'):
                  __dirname + path.join('/data/messages.json')
    data.push(newData)
    console.log(newData);
    return new Promise(function(resolve, reject){
      fs.writeFile(dataPath, JSON.stringify(data), function(err){
        if(err) reject(err)
        resolve('OK')
      })
    })
  },*/
  getData: function(dataType){
    var dataPath = dataType == 'bienes' ?
                  __dirname + path.join('/data/data.json'):
                  //__dirname + path.join('/data/messages.json')
                  console.log('Algo esta mal en Storage/index.js');
    return new Promise(function(resolve, reject){
      fs.readFile(dataPath, 'utf8', function(err, readData){
        if(err) reject(err)
        resolve(readData)
      })
    })
  }
}
