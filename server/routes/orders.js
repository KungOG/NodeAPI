/* Resource orders */
/*let orders = require('../data/orders.json');*/
exports.get = (req, res, next) => {

};
exports.post = (req, res, next) => {
    console.log(req.headers);
    res.status(200).send(req.body);
};
exports.patch = (req, res, next) => {

};  