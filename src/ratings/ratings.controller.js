// Import ratings data as ratings
const ratings = require("../data/ratings-data");

function list(req, res) {
    res.json({ data: ratings });
}

module.exports = {
    list,
}