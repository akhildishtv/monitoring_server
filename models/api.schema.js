var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema(
    {
        title: {
            type: String,
        },
        responseTime: {
            type: String,
        },
        hitTime: {
            type: String,
        },
        isActive: {
            type: Boolean, default: true
        },
        isDeleted: {
            type: Boolean, default: false
        },
        flag: {
            type: Number
        }
    }, {
    timestamps:
    {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});
module.exports = mongoose.model('realTime-API', Schema);