/* Resource Menu */
let menu = require('../data/menu.json');

exports.get = (req, res, next) => {
    console.log(req);
    res.status(200).send(menu);
}