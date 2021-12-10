var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema(
    {
        title: {
            type: String, required: "title name is required."
        },
        isActive: {
            type: Boolean, default: true
        },
        isDeleted: {
            type: Boolean, default: false
        }
    }, {
    timestamps:
    {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});
module.exports = mongoose.model('realTime-API', Schema);