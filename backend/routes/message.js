const router = require('express').Router()

const message =require('../modal/Message')




// Router 2
router.post('/addmsg',

    async (req, res) => {
        // to return the error if any
        try {
            const { name, email, subject,msg } = req.body;
            // console.log(req.user);
            const newmsg = new message({
                name, email, subject, msg
            })
            try {
                const savemsg = await newmsg.save()
                console.log(savemsg);
                res.json(savemsg);
            }
            catch (err) {
                console.log(err);
            }
        }
        catch (err) {
            res.json({ err: "Internal server error" });
        }
    })







module.exports = router