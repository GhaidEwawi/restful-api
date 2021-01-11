const UserModel = require('../models/UserModel');

module.exports = {
    create: (req, res) => {
        let user = new UserModel({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            team: req.body.team
        })

        user.save()
            .then(result => {
                res.json({ sucess: true, result: result })
            })
            .catch(err => {
                res.json({ sucess: false, result: err })
            })
    },

    update: (req, res) => {
        
        UserModel.updateOne({_id: req.body._id}, req.body)
            .then(user => {
                if(!user) res.json({ sucess: false, result: "User does not exist" })
    
                res.json({sucess: true, result: user})
            })
            .catch(err => {
                res.json({ sucess: false, result: err });
            })
    },
     
}
