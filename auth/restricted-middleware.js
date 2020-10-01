module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        next();
    } else {
        next({ apiCode: 403, apiMessage: "Not authorized to access." })
    }
}