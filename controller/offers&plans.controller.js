var APISCHEMA = require('../models/api.schema')
var request = require('request');
const EMAILCONTROLLER = require('./email.controller');

let GetActiveSubscriptionsAPI = async () => {
    try {
        let newData = await GetActiveSubscriptions()
        let query = {
            title: 'GetActiveSubscriptionsAPI',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if (data.flag == 1) {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Get Active Subscriptions ', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Get Active Subscriptions ', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }
        }
    } catch (error) {
        throw new Error(error);
    }
}

let GetActiveSubscriptions = () => {
    var options = {
        'method': 'GET',
        'url': 'https://ottmobileapis.dishtv.in/Api/AppSubscriptionManagement/GetActiveSubscriptions',
        'headers': {
            'Content-Type': 'application/json'
        },
    };
    const startTime = new Date().getTime();
    return new Promise(function (resolve, reject) {
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'GetActiveSubscriptionsAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                resolve(value);
            }
            else {
                reject(error);
            }
        });
    });
}

exports.GetActiveSubscriptionsAPI = GetActiveSubscriptionsAPI;
