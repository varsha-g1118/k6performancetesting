const Influx = require('influx');
const influx = new Influx.InfluxDB({
    host: 'localhost',
    port: 8086,
    username: 'varsha',
    password: 'micro@1991'
})
const dbName = 'k6_community'
// Create an InfluxDB database
influx.createDatabase(dbName);
console.log(dbName);
//influx.getMeasurements(dbName).then(names =>    console.log('My measurement names are: ' + names.join(', ')));

