const pool = require('../utils/db_pgsql'); // Conexión a la BBDD
const queries = require('../queries/cards.queries'); // Queries SQL


const getCards = async () => {

    let client, result;
    try {
      client = await pool.connect();
      let data = await client.query(queries.getAllCards);
      result = data.rows;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
        client.release();
    }
    return result;
  };

  const getCardsByNombre = async (nombre) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getCardsByNombre, [nombre])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


  const cards_queries = {
    getCards,
    getCardsByNombre
    
}

module.exports = cards_queries;