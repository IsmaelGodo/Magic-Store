const card = require('../models/queries');

const getAllCards = async (req, res) => {
    let cards;
    if (req.query.nombre) {
        cards = await card.getCardsByNombre(req.query.nombre);
    }
    else {
        cards = await card.getCards();
    }
    res.status(200).json(cards); 
}




module.exports ={ getAllCards }