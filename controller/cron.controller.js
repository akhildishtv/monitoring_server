const cron = require('node-cron');
const APICONTROLLER = require("./api.controller")
const WATCHOCONTROLLER = require('./watcho.controller')
const ANALYTICSCONTROLLER = require('./analytics.controller')
const OFFERSANDPLANSCONTROLLER = require('./offers&plans.controller')

cron.schedule("*/30 * * * * *", function () {
    //Watcho APIs
    // WATCHOCONTROLLER.webSeriesAPI()
    // WATCHOCONTROLLER.videoPlayerAPI()
    // WATCHOCONTROLLER.GetActiveSubscriptions()
    // WATCHOCONTROLLER.KalturaLoginAPI()

    // //Analytics APIs
    // ANALYTICSCONTROLLER.NewsChannelsAPI()
    // ANALYTICSCONTROLLER.ProgramsAPI()
    // ANALYTICSCONTROLLER.LanguagesAPI()

    //offers&plans APIs

    OFFERSANDPLANSCONTROLLER.GetActiveSubscriptionsAPI()
});

cron.schedule("*/45 * * * * *", function () {
    // ANALYTICSCONTROLLER.LocationsAPI()
});
