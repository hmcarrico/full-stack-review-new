module.exports = {
    getCouches: (req, res) => {
        const db = req.app.get('db');
        db.get_couches().then(couches => {
            res.status(200).json(couches)
        }).catch(error => {
            console.error('error in getCouches', error)
            res.status(500).json({message: 'Blah blah'})
        });
    },
    postCouch: (req, res) => {
        const db = req.app.get('db');
        const {name, price, image} = req.body;
        const {user_id} = req.session.user.id
        db.create_couch([user_id, name, price, image]).then(couches => {
            res.json(couches[0])
        }).catch(error => {
            console.error('error in postCouch', error)
            res.status(500).json({message: 'Blah blah blah'})
        });
    }
}