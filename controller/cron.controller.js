const cron = require('node-cron');
const APICONTROLLER = require("./api.controller")
const WATCHOCONTROLLER = require('./watcho.controller')
const ANALYTICSCONTROLLER = require('./analytics.controller')

cron.schedule("*/30 * * * * *", function () {
    //Watcho APIs
    WATCHOCONTROLLER.webSeriesAPI()
    WATCHOCONTROLLER.videoPlayerAPI()

    //Analytics APIs
    ANALYTICSCONTROLLER.NewsChannelsAPI()
    ANALYTICSCONTROLLER.ProgramsAPI()
    ANALYTICSCONTROLLER.LanguagesAPI()
});


cron.schedule("*/45 * * * * *", function () {
    ANALYTICSCONTROLLER.LocationsAPI()
});

