var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var sql = require('mssql')

  var config = {
    user: 'sa',
    password: 'sa123',
    server: 'localhost',
    options: {
      encrypt: true,
      enableArithAbort: true,
      database: 'REPOS',
      instanceName: 'SQLEXPRESS'
    }/*,
    pool: {
      max: 100,
      min: 0,
      idleTimeoutMillis: 100000
    }*/
  }

  sql.connect(config, function (err) {
    if (err) console.log(err)

    var request = new sql.Request()

    request.query('SELECT * FROM Cliente', function (err, recordset) {
      if (err) console.log(err)

      res.send(recordset)
    })
  })
})

var server = app.listen(5000, function () {
  console.log('Server is running...')
})
