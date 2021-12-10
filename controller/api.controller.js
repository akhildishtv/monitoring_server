var APISCHEMA = require('../models/api.schema')

const saveAPIData = async (req, res) => {
    let postData = req.body;
    try {
      let data = await saveData(postData)
      if(data){
        return res.json({ data: data, status: "Success", code: 200, msg: "Data Saved Successfully.!" })
      }
    } catch (err) {
      if (err) {
        return res.json({ status: "Failure", code: 301, msg: "Something went wrong.!" });
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
