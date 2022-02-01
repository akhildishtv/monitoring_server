const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')
var CONFIG = require("../config/default");
// initialize nodemailer
var transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: CONFIG.emailInfo.user,
            pass: CONFIG.emailInfo.pass
        }
    }
);

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions))




// trigger the sending of the E-mail
let sendEmail = (apiName, time) => {
    var mailOptions = {
        from: `"Watcho Monitoring Alert" <${CONFIG.emailInfo.user}>`, // sender address
        to: CONFIG.emailInfo.receiver, // list of receivers
        subject: 'Watcho Monitoring Alert.!',
        template: 'email', // the name of the template file i.e email.handlebars
        context: {
            API_Name: apiName, // replace {{name}} with Adebola
            TIME: time // replace {{company}} with My Company
        }
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log(info.response)
    });
}

exports.sendEmail = sendEmail;

