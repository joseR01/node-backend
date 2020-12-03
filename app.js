const express = require('express');
const sequelize = require('./database/db.js');
const app = express();
require('./database/asociations.js')

//setting

const PORT = process.env.PORT || 3000

//middleware
//para poder rellanar el req.body
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//router
app.get('/', (req,res)=>{
    res.json("hola mundo")
});

app.use('/api/posts',require('./routes/posts'));
app.use('/api/users',require('./routes/users'));
app.use('/api/addresses',require('./routes/address'));

//stating the server
app.listen(PORT, ()=>{
    console.log('el servidor a iniciado en el puerto http://localhost:3000/ ')
    //conectar a la base de datos
    sequelize.sync({force:true}).then(()=>{
        console.log('Estamos conectado a las base de datos')
    }).catch((error)=>{console.log('se ha producido un error',error)})
})
