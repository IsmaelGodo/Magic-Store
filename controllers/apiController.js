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

const getAllIlus = async (req, res) => {
    let ilus;
    if (req.query.nombre) {
        ilus = await card.getIlustByNombre(req.query.nombre);
    }
    else {
        ilus = await card.getIlust();
    }
    res.status(200).json(ilus); 
}

const createIlust = async (req, res) => {

    const newIlust = req.body; // {nombre, cif, direccion}
    const response = await card.createIlust(newIlust);
    res.status(201).json({
        "message": `Creado: ${newIlust.name}`
    });
}




module.exports ={ 
    getAllCards,
    getAllIlus,
    createIlust
 }