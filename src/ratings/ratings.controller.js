// Import ratings data as ratings
const ratings = require("../data/ratings-data");

function list(req, res) {
    const { noteId } = req.params; 
    res.json({ data: ratings.filter(noteId ? rating => rating.noteId == noteId : () => true) });
}

// Middleware vailidation fx to verify rating exists
function ratingExists(req, res, next) {
    const { ratingId } = req.params;
    const foundRating = ratings.find((rating) => rating.id === Number(ratingId));
    if (foundRating) {
        res.locals.rating = foundRating;
        return next();
    }
    next({ 
        status: 404,
        message: `Rating id not found ${ratingId}`,
    })
}

// read() to read the foundRating data 
function read(req, res) {
    res.json({ data: res.locals.rating })
}
module.exports = {
    list,
    read: [ratingExists, read],
    ratingExists
}