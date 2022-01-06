var APISCHEMA = require('../models/api.schema')

const saveAPIData = async (req, res) => {
    let postData = req.body;
    try {
        let data = await saveData(postData)
        if (data) {
            return res.json({ data: data, status: "Success", code: 200, msg: "Data Saved Successfully.!" })
        }
    } catch (err) {
        if (err) {
            return res.json({ status: "Failure", code: 301, msg: "Something went wrong.!", err: err });
        }
    }
}

const getAPIData = async (req, res) => {
    let postData = req.body;
    try {
        let query = {
            title: postData.title,
            "isActive": true,
            "isDeleted": false,
        }
        var data = await APISCHEMA.find(query)
        if (data) {
            return res.json({ data: data, status: "Success", code: 200, msg: "Data Found Successfully.!" })
        }
    } catch (err) {
        if (err) {
            return res.json({ status: "Failure", code: 301, msg: "Something went wrong.!", err: err });
        }
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

exports.saveAPIData = saveAPIData;
exports.getAPIData = getAPIData;

