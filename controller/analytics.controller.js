const moment= require('moment') 
var request = require('request');
let now = new Date()
var todayDate = new Date()
todayDate.setHours(0, 0, 0, 0)
var dateStringWithTime = moment(now).local().format(`yyyy-MM-DDTHH:mm:ss`);
var tsYesterday = moment(todayDate).local().format(`yyyy-MM-DDTHH:mm:ss`);
var APISCHEMA = require('../models/api.schema')

let newsChannelsAPI = () => {
    try {
        var options = {
            'method': 'POST',
            'url': 'http://analytics.mysmartstick.com/api/v1/analytics/channel/news',
            'headers': {
                'secrettoken': '/GScsTA$7HU+c4K5qtxt9Rq;',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "end": dateStringWithTime,
                "start": tsYesterday
            })

        };
        const startTime = new Date().getTime();
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'NewsChannelsAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                }
            }
            else {
                throw new Error(error);
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}

let programsAPI = () => {
    try {
        var options = {
            'method': 'POST',
            'url': 'http://analytics.mysmartstick.com/api/v1/analytics/event/newsevents',
            'headers': {
                'secrettoken': '/GScsTA$7HU+c4K5qtxt9Rq;',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "end": dateStringWithTime,
                "start": tsYesterday
            })

        };
        const startTime = new Date().getTime();
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'ProgramsAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                }
            }
            else {
                throw new Error(error);
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}

let languagesAPI = () => {
    try {
        var options = {
            'method': 'POST',
            'url': 'http://analytics.mysmartstick.com/api/v1/analytics/language/newslanguages',
            'headers': {
                'secrettoken': '/GScsTA$7HU+c4K5qtxt9Rq;',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "end": dateStringWithTime,
                "start": tsYesterday
            })

        };
        const startTime = new Date().getTime();
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'LanguageAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                }
            }
            else {
                throw new Error(error);
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}

let locationsAPI = () => {
    try {
        var options = {
            'method': 'POST',
            'url': 'http://analytics.mysmartstick.com/api/v1/analytics/channel/newslocationuser',
            'headers': {
                'secrettoken': '/GScsTA$7HU+c4K5qtxt9Rq;',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "end": dateStringWithTime,
                "start": tsYesterday
            })

        };
        const startTime = new Date().getTime();
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'LocationAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 30) {
                    saveData(value)
                }
            }
            else {
                throw new Error(error);
            }
        });
    } catch (error) {
        throw new Error(error);
    }
}


let saveData = body => new Promise((resolve, reject) => {
    APISCHEMA.create(body, (err, data) => {
        if (err) {
            return reject(err);
        } else {
            resolve(data);
        }
    });
});

exports.NewsChannelsAPI = newsChannelsAPI;
exports.LanguagesAPI = languagesAPI;
exports.LocationsAPI = locationsAPI;
exports.ProgramsAPI = programsAPI;
