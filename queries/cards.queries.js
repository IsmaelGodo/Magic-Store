const cards_queries = {
    getAllCards: `SELECT *
    FROM card;`,
    getCardsByNombre: `SELECT * FROM card
        WHERE nombre = $1;` 
}
module.exports = cards_queries;