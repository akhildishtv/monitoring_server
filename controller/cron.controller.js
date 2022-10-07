const cron = require('node-cron');
const APICONTROLLER = require("./api.controller")
const WATCHOCONTROLLER = require('./watcho.controller')
const ANALYTICSCONTROLLER = require('./analytics.controller')
const AGGREGATORCONTROLLER = require('./aggregator.controller');
const { aggregate } = require('../models/api.schema');


cron.schedule("*/30 * * * * *", function () {
    //Watcho APIs
    WATCHOCONTROLLER.webSeriesAPI()
    WATCHOCONTROLLER.videoPlayerAPI()
    WATCHOCONTROLLER.GetActiveSubscriptions()
    WATCHOCONTROLLER.KalturaLoginAPI()

    //Analytics APIs
    ANALYTICSCONTROLLER.NewsChannelsAPI()
    ANALYTICSCONTROLLER.ProgramsAPI()
    ANALYTICSCONTROLLER.LanguagesAPI()

     //Aggregator APIs
    AGGREGATORCONTROLLER.zeeTokenGenAPI()
    AGGREGATORCONTROLLER.zeeTokenCreateApi()
    AGGREGATORCONTROLLER.ChaupalApi()
    AGGREGATORCONTROLLER.GetActiveSubscriptionsAggregator()
    AGGREGATORCONTROLLER.GetActiveSubscriptionsToken()
});

cron.schedule("*/45 * * * * *", function () {
    // ANALYTICSCONTROLLER.LocationsAPI()
});

cron.schedule("*/180 * * * * *", function () {
    AGGREGATORCONTROLLER.kilkkRedirectionApi()
});