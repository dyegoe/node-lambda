var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("America/Sao_Paulo");
    callback(null, {
        statusCode: '200',
        body: '#### The time in Sao Paulo is: ' + currentTime.toString(),
    });
};