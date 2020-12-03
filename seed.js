const sequelize = require('./database/db');
const Post = require('./database/models/Post');
const User = require('./database/models/User');
const Address = require('./database/models/Address');
require('./database/asociations')

//Usuarios 
const users =[
    {name:'Antonio', email:'antonio@email.com', age:27, role:1,},
    {name:'Jose', email:'jose@email.com', age:28, role:0,},
    {name:'Leidys', email:'leidys@email.com', age:25, role:0,}
];

//Direcciones 
const addresses =[
    {street: 'Cabimas', residente_id:1},
    {street: 'Maracaibo', residente_id:2},
    {street: 'Maracaibo', residente_id:3},
];

//Entradas 
const posts = [
    {title:"Foo", body:"Bar 1", autorId:"1"},
    {title:"Foo", body:"Bar 2", autorId:"1"},
    {title:"Tittle", body:"Bar 3", autorId:"1"},
    {title:"Yo que se ", body:"Bar 4", autorId:"1"},
    {title:"Me da igual", body:"Bar 5", autorId:"2"},
    {title:"Todo", body:"Bar 5", autorId:"2"},
    {title:"Foo", body:"Bar 7", autorId:"3"},
];

// sequelize.sync({force:true}).then(()=>{
//     //conexion establecida 
//     console.log('conexion establecida...');
// }).then(()=>{
//     //rellenar usuarios
//     users.forEach(user =>User.create(user));
// }).then(()=>{
//     //Rellenar direcciones
//    addresses.forEach(address => Address.create(address));
// }).then(()=>{
//     //Rellenar posts
//    posts.forEach(post => Post.create(post));
// });

// // User.create(users)
// // users.forEach(async user => await User.create(user));
// // addresses.forEach( address => await Address.create(address));
// // posts.forEach( post => await Post.create(post));

[...users, ...addresses, ...posts].forEach(async (element, index) => { 
    if(users.length >= index){
        await User.create(element)
    } else if(addresses.length + users.length >= index){
        await Address.create(element)
    } else if(addresses.length + users.length + posts.length >= index){
        await Post.create(post)
    }
} )

