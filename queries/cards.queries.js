const cards_queries = {
    getAllCards: `SELECT c.*, i.nombre AS nombre_ilustrador
    FROM card AS c
    JOIN ilustrator AS i ON c.id_ilu = i.id_ilu;`,
    getCardsByNombre: `SELECT c.*, i.nombre AS nombre_ilustrador
    FROM card AS c
    JOIN ilustrator AS i ON c.id_ilu = i.id_ilu
    WHERE LOWER(c.nombre) = LOWER($1)
    ORDER BY c.nombre DESC;`,
    getAllIlust:`SELECT i.*, c.nombre AS nombre_card
    FROM ilustrator AS i
    LEFT JOIN card AS c ON i.id_ilu = c.id_ilu;`,
    getIlustByNombre:`SELECT i.*, c.nombre AS nombre_card
    FROM ilustrator AS i
    LEFT JOIN card AS c ON i.id_ilu = c.id_ilu
    WHERE LOWER(i.nombre) = LOWER($1);`,
    createIlust: `INSERT INTO ilustrator (nombre, cif, direccion) VALUES ($1, $2, $3)`
}
module.exports = cards_queries;