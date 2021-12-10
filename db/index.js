
var mongoose = require('mongoose');
const databaseUrl = 'mongodb+srv://dishtv-monitor:<password>@cluster0.6zt4l.mongodb.net/test'

mongoose.connect(databaseUrl, {
    useCreateIndex: true,
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const connection = () => {
    mongoose.connection.on("connected", function () {
        console.log("Mongoose connected! ");
    });
};