const express = require('express');
const app = express();
const port = 3000;

const apiRoutes = require('./routes/apiRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.send('funciona')
})
app.use('/api/',apiRoutes);

app.listen(port, () => {
    console.log(`Puerto funcionando en el siguiente enlace: http://localhost:${port}`)
})