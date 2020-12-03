const Post = require('./models/Post');
const User = require('./models/User');
const Address = require('./models/Address');

//Uno a uno
//añadir una clave foranea userId a la tabla address
User.hasOne(Address, {as:'domicilio', foreignKey:'residente_id'})

//añade una clave userId a la tabla address
Address.belongsTo(User,{as:'residente', foreignKey:'residente_id'});

//uno a muchos, 1 a N,
//usuarios van a tener muchoo posts o publicaciones.
//se añade una clave userId a la tabla posts
User.hasMany(Post, {as:'publicaciones', foreignKey:'autorId'});

//se añase una clave userId a la tabla posts
Post.belongsTo(User, {as:'autor', foreignKey:'autorId'});