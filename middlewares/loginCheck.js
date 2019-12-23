module.exports = (req, res, next) => {
    if(req.user === false) {
        return res.status(401)
        .send({error: 'Please log in!'});
    }
    next();
};