var APISCHEMA = require('../models/api.schema')
var request = require('request');
const EMAILCONTROLLER = require('./email.controller');
const { query } = require('express');
var Config = require("../config/default");
var qs = require('qs');

let zeeTokenGenAPI= async () => {
    try {
        let newData = await zeeTokenGenerationRequest()
        let query = {
            title: 'zeeTokenGenAPI',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if(data == null){
            saveData()
        }
        else{if (data.flag == 1) {
            if (newData.responseTime > 1) {
                 newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Zee Token Generation ', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Zee Token Generation ', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }}
        }
    } catch (error) {
        throw new Error(error);
    }
}

let zeeTokenCreateApi = async () => {
    try {
        let newData = await zeeTokenCreationRequest()
        let query = {
            title: 'zeeTokenCreateApi',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if(data == null){
            saveData()
        }
        else{
        if (data.flag == 1) {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Zee Token Creation', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Zee Token Creation', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }
        }}
    } catch (error) {
        throw new Error(error);
    }
}

let kilkkRedirectionApi = async () => {
    try {
        let newData = await kilkkRedirectionRequest()
        let query = {
            title: 'kilkkRedirectionApi',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if (data.flag == 1) {
            if (newData.responseTime > 2) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Klikk Redirection ', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Klikk Redirection ', emailTime)
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

let ChaupalApi = async () => {
    try {
        let newData = await chaupalTokenRequest()
        let query = {
            title: 'ChaupalApi',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if(data == null){
            saveData()
        }else{
        if (data.flag == 1) {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Chaupal Token', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Chaupal Token ', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }
        }}
    } catch (error) {
        throw new Error(error);
    }
}

let GetActiveSubscriptionsAggregator = async () => {
    try {
        let newData = await GetActiveSubscriptionsAggregatorRequest()
        let query = {
            title: 'ActiveSubscriptionsAPI',
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
                await EMAILCONTROLLER.sendEmailSuccess('Active Subscription ', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Active Subscription ', emailTime)
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

let GetActiveSubscriptionsToken = async () => {
    try {
        let newData = await GetActiveSubscriptionsTokenisedRequest()
        let query = {
            title: 'TokenActiveSubscriptionsAPI',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if(data == null){
            saveData()
        }
        else{
        if (data.flag == 1) {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Active Tokenized Subscription ', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Active Tokenized Subscription ', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }
        }}
    } catch (error) {
        throw new Error(error);
    }
}
let GetPrepaidBalanceApi = async () => {
    try {
        let newData = await GetPrepaidBalanceRequest()
        let query = {
            title: 'PrepaidBalanceApi',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if(data == null){
            saveData()
        }
        else{
        if (data.flag == 1) {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Prepaid Balance', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Prepaid Balance', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }
        }}
    } catch (error) {
        throw new Error(error);
    }
}
let GetSubscriptionHistoryApi = async () => {
    try {
        let newData = await GetSubscriptionHistoryRequest()
        let query = {
            title: 'SubscriptionHistoryApi',
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.findOne(query).sort({'createdAt':-1}).limit(1)
        if(data == null){
            saveData()
        }
        else{
        if (data.flag == 1) {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
            }
            else {
                newData.flag = 0
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmailSuccess('Subscription History', emailTime)
            }
        }
        else {
            if (newData.responseTime > 1) {
                newData.flag = 1
                await saveData(newData)
                const emailTime = new Date()
                await EMAILCONTROLLER.sendEmail('Subscription History', emailTime)
            }
            else {
                newData.flag = 0
                await saveData(newData)
            }
        }}
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

let getData = query => new Promise((resolve, reject) => {
    APISCHEMA.find(query, (err, data) => {
        if (err) {
            return reject(err);
        } else {
            resolve(data);
        }
    });
});

let zeeTokenGenerationRequest = () => {
    var options = {
        'method': 'POST',
        'url': 'https://newb2bapi.zee5.com/partner/get-token',
        'headers': {
            'X-AUTH-TOKEN': 'DI26y24pqrczpABUEhaP9GS0W7POf04Lo',
            'X-AUTH-KEY': 'dishtv',
            'path': '/user/subscription',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            'type': 'mobile',
            'package_id': '0-22-1506',
            'partner_uuid': '9873142703',
            'value': '9873142703',
                }

        )
    };
    const startTime = new Date().getTime();
    return new Promise(function (resolve, reject) {
        request(options, function (error, response) {
            if (response) {
                const res = JSON.parse(response.body)
                const authToken = res.token
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'zeeTokenGenAPI',
                    responseTime: diff,
                    hitTime: startTime,
                    token: authToken
                }
                resolve(value);
            }
            else {
                reject(error);
            }
        });
    });
}

let zeeTokenCreationRequest = async() => {
    var check = await zeeTokenGenerationRequest()
    var options = {
        'method': 'POST',
        'url': 'https://newb2bapi.zee5.com/user/subscription',
        'headers': {
            'Authorization': check.token,
            'X-AUTH-KEY': 'dishtv',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            'type': 'mobile',
            'package_id': '0-22-1506',
            'partner_uuid': '9873142703',
            'value': '9873142703',
                }

        )
    };
    const startTime = new Date().getTime();
    return new Promise(function (resolve, reject) {
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'zeeTokenCreateAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                console.log(value)
                resolve(value);
            }
            else {
                reject(error);
            }
        });
    });
}

let kilkkRedirectionRequest = () => {
    var options = {
        'method': 'POST',
        'url': 'https://klikk.co.in/api/?r=DISH/Slientlogin',
        'headers': {
            'API-KEY': 'suf068e71e0d87b098ad51e621redrtf',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "contactNumber": '9873142703',
            "deviceId": '49.36.187.102',
            "deviceName": 'Windows',
            "deviceType": 0
                }

        )
    };
    const startTime = new Date().getTime();
    return new Promise(function (resolve, reject) {
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'kilkkRedirectionApi',
                    responseTime: diff,
                    hitTime: startTime
                }
                console.log(value)
                resolve(value);
            }
            else {
                reject(error);
            }
        });
    });
}

let chaupalTokenRequest = () => {
    try {
        const CLIENT_ID = Config.tokens.auth.clientID;
        const CLIENT_SECRET = Config.tokens.auth.clientSecret;
        const ACCESS_URL = Config.tokens.auth.accessUrl;

        var options = {
            'method': 'POST',
            'url': `${ACCESS_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body: qs.stringify({
                "grant_type": "client_credentials",
                "scope": "partner_platform_resource_server/auth-api"
            })

        };
        const firstRes = new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                    var resp = JSON.parse(response.body)
                    const chaupalToken = `Bearer ${resp.access_token}`
                    const date = new Date();
                    date.setDate(date.getDate() + 1); 
                    var options2 ={
                        'method': 'POST',
                        'url': `${ACCESS_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
                        'headers': {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                        },
                        body2 : JSON.stringify({
                            // "subscription_end_timestamp": date.getTime(),
                            "subscription_end_timestamp": date,
                            "partner_platform_user_id": `919873142703`
                        })
                    }
                    const startTime = new Date().getTime();
                    return new Promise(function (resolve, reject) {
                        request(options2, function (error, response) {
                        if (response) {
                            const endTime = new Date().getTime();
                            const diff = (endTime - startTime) / 1000
                            let value = {
                                title: 'ChaupalApi',
                                responseTime: diff,
                                hitTime: startTime
                            }
                            console.log(value)
                            resolve(value);
                        }
                        else {
                            reject(error);
                        }
                    });
                })

            })
        })

    } catch (error) {
        throw new Error(error);
    }
}

let GetActiveSubscriptionsAggregatorRequest = () => {
    try {
        var options = {
            'method': 'GET',
            'url': 'https://ottmobileapis.dishtv.in/Api/AppSubscriptionManagement/GetActiveSubscriptions',
            'headers': {
                'Cookie': 'ApplicationGatewayAffinity=87baa15aec7e2dc29f7549994773889e; ApplicationGatewayAffinityCORS=87baa15aec7e2dc29f7549994773889e'
            }
        };
        const startTime = new Date().getTime();
        return new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (response) {
                    const endTime = new Date().getTime();
                    const diff = (endTime - startTime) / 1000
                    let value = {
                        title: 'ActiveSubscriptionsAPI',
                        responseTime: diff,
                        hitTime: startTime
                    }
                    console.log(value)
                    resolve(value);
                }
                else {
                    reject(error);
                }
            });
        })
    } catch (error) {
        throw new Error(error);
    }
}

let GetActiveSubscriptionsTokenisedRequest = () => {
    try {
        var options = {
            'method': 'GET',
            'url': 'https://ottmobileapis.dishtv.in/Api/AppSubscriptionManagement/GetActiveSubscriptions',
            'headers': {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ijk4NzMxNDI3MDMiLCJuYmYiOjE2NjUxMzM0NTUsImV4cCI6MTc1MTUzMzQ1NSwiaWF0IjoxNjY1MTMzNDU1LCJpc3MiOiJEaXNoT1RUIiwiYXVkIjoiRGlzaE9UVCJ9.hzNVYeJy2Pi_eMIe_08ivP2532skMg8FN6mFfDpgnEU'
            }
        };
        const startTime = new Date().getTime();
        return new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (response) {
                    const endTime = new Date().getTime();
                    const diff = (endTime - startTime) / 1000
                    let value = {
                        title: 'TokenActiveSubscriptionsAPI',
                        responseTime: diff,
                        hitTime: startTime
                    }
                    console.log(value)
                    resolve(value);
                }
                else {
                    reject(error);
                }
            });
        })
    } catch (error) {
        throw new Error(error);
    }
}
let GetPrepaidBalanceRequest = () => {
    try {
        var options = {
            'method': 'GET',
            'url': 'https://ottmobileapis.dishtv.in/Api/AppSubscriptionManagement/GetPrepaidBalance/51437819',
        };
        const startTime = new Date().getTime();
        return new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (response) {
                    const endTime = new Date().getTime();
                    const diff = (endTime - startTime) / 1000
                    let value = {
                        title: 'PrepaidBalanceApi',
                        responseTime: diff,
                        hitTime: startTime
                    }
                    console.log(value)
                    resolve(value);
                }
                else {
                    reject(error);
                }
            });
        })
    } catch (error) {
        throw new Error(error);
    }
}
let GetSubscriptionHistoryRequest = () => {
    try {
        var options = {
            'method': 'GET',
            'url': 'https://ottmobileapis.dishtv.in/Api/AppSubscriptionManagement/SubscriptionHistory/51437819',
        };
        const startTime = new Date().getTime();
        return new Promise(function (resolve, reject) {
            request(options, function (error, response) {
                if (response) {
                    const endTime = new Date().getTime();
                    const diff = (endTime - startTime) / 1000
                    let value = {
                        title: 'SubscriptionHistoryAPI',
                        responseTime: diff,
                        hitTime: startTime
                    }
                    console.log(value)
                    resolve(value);
                }
                else {
                    reject(error);
                }
            });
        })
    } catch (error) {
        throw new Error(error);
    }
}

exports.zeeTokenCreateApi = zeeTokenCreateApi;
exports.zeeTokenGenAPI = zeeTokenGenAPI;
exports.kilkkRedirectionApi = kilkkRedirectionApi;
exports.ChaupalApi = ChaupalApi
exports.GetActiveSubscriptionsAggregator = GetActiveSubscriptionsAggregator;
exports.GetActiveSubscriptionsToken = GetActiveSubscriptionsToken;
exports.GetPrepaidBalanceApi = GetPrepaidBalanceApi;
exports.GetSubscriptionHistoryApi = GetSubscriptionHistoryApi;