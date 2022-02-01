var APISCHEMA = require('../models/api.schema')
var request = require('request');
const EMAILCONTROLLER = require('./email.controller')

let webSeriesAPI = () => {
    try {
        var options = {
            'method': 'POST',
            'url': 'https://restv4-as.ott.kaltura.com/v5_0_3/api_v3/service/asset/action/list',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "apiVersion": "5.1.2.17630",
                "ks": "djJ8NDg3fPbH1m4lNsxW3bfPkL1_7mAaDV5rgRqJ5vsW_G5-CHPWSl8Xvt706-5Ydvone7awyfygdn4ozhz1fQR-u_nbe0p5Jdup0eyt3kakQBMzuXHhKHRtSkPrv8JnKGZaSC56Or4BRRPPOiiz2QjcGRU5zMoFsqrGlQeUGZ6e4rC0j6E-2MwsaSokWltChak8VIw-Uy_yCXITpkns0VjBRoLAY0RBH4xVDunD7FHEP2RctSvUIWTPD3d2V8l53FQiTIut6MUjtWL7EWfdSTk4nVVfvhv0Y0lnGamNjbjQg9if1pD64AD-s4f9Uvpcza2ibgdF1mLODGru4z7-zZKi0_PWt4PgAZY2tAq65_l05d3i9JtY",
                "filter": {
                    "objectType": "KalturaSearchAssetFilter",
                    "typeIn": "656",
                    "kSql": "(and SeriesId = 'SID_BEFALTU_08092020' Season number='1')",
                    "dynamicOrderBy": {
                        "orderBy": "META_ASC",
                        "objectType": "KalturaDynamicOrderBy",
                        "name": "Episode Number"
                    }
                },
                "pager": {
                    "objectType": "KalturaFilterPager",
                    "pageIndex": "1",
                    "pageSize": "500"
                }
            })
        };
        const startTime = new Date().getTime();
        const emailTime = new Date()
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'WebSeriesAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                    EMAILCONTROLLER.sendEmail('Web Series ',emailTime)
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

let videoPlayerAPI = () => {
    try {
        var options = {
            'method': 'GET',
            'url': 'http://a-fds.youborafds01.com/data?outputformat=json&system=dishindiadev&pluginVersion=6.7.35-adapterless-js&requestNumber=0.9426220496137825&timemark=1638955838474',
        };
        const startTime = new Date().getTime();
        const emailTime = new Date()
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'VideoPlayerAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                    EMAILCONTROLLER.sendEmail('Video Player ',emailTime)
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

let GetActiveSubscriptions = () => {
    try {

        var options = {
            'method': 'GET',
            'url': 'https://ottmobileapis.dishtv.in/API/SubscriptionManagement/GetActiveSubscriptions',
            'headers': {
                'Cookie': 'ApplicationGatewayAffinity=87baa15aec7e2dc29f7549994773889e; ApplicationGatewayAffinityCORS=87baa15aec7e2dc29f7549994773889e'
            }
        };
        const startTime = new Date().getTime();
        const emailTime = new Date()
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'ActiveSubscriptionsAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                    EMAILCONTROLLER.sendEmail('Active Subscription ',emailTime)
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

let KalturaLoginAPI = () => {
    try {
        var options = {
            'method': 'POST',
            'url': 'https://restv4-as.ott.kaltura.com/v5_0_3/api_v3/service/ottuser/action/login',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "partnerId": 487,
                "username": 47828792,
                "password": "\"vF0+aO/4JiWB4hVacGruSnFyrhCmlWlZzECk99HwOEfLoTNNrXQSoCWVm36SBdwPBPMEz27XgVbHdNDX3OABBA==\"",
                "extraParams": {
                    "": {
                        "objectType": "KalturaStringValue",
                        "value": ""
                    }
                },
                "udid": "Y5BN6MTD7HI4E",
                "ignoreNull": true,
                "format": 1,
                "apiVersion": "5.0.3",
                "clientTag": "swift:18-07-03",
                "ks": "djJ8NDg3fKuplFLelV6aRiZLTDjGaXPN83CN_hweLsPtWH3a_flIbYd54VhCDydW5LmRr5BBz0w2BP2GtNmUzKCVH27IFuadAn0rArR5CMn8algNNhcnHZDNTaRnf7OGcp6hcFihG16wt1VmMAnfnu__UDxieAUNvgLdu-daqDcJdmAJTe6qUoqS0NtywzQ-NmkWMoITgu5nyVNWXiqdH_neuBEGfwbxvtb05CSthuj8RUOsKEj-_BweHcAhoWb3gj7UomsIEpcMAC9iKACxCig4_6uvMFWcskqM1imb71wHKKvguzgSG8zEKNGjHdEoNbzCouz_4w=="
            })

        };
        const emailTime = new Date()
        const startTime = new Date().getTime();
        request(options, function (error, response) {
            if (response) {
                const endTime = new Date().getTime();
                const diff = (endTime - startTime) / 1000
                let value = {
                    title: 'kalturaLoginAPI',
                    responseTime: diff,
                    hitTime: startTime
                }
                // saveData(value)
                if (diff > 1) {
                    saveData(value)
                    EMAILCONTROLLER.sendEmail('Kaltura ', emailTime)
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

exports.videoPlayerAPI = videoPlayerAPI;
exports.webSeriesAPI = webSeriesAPI;
exports.GetActiveSubscriptions = GetActiveSubscriptions;
exports.KalturaLoginAPI = KalturaLoginAPI
