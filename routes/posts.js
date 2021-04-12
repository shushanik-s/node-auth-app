const router = require('express').Router();
const verify = require('../verifyToken');

router.get('/', verify, (req, res) => {
    res.json({
        posts: {
            title: "My post title",
            description: "My post description"
        }
    })

    //req.user will contain information about logged in user.
})

module.exports = router