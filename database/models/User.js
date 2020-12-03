const {Model, DataTypes}= require('sequelize');
const sequelize = require('../db.js');

class User extends Model {}
User.init({
  name:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"Este campo no puede estar en blanco"
      },
      isAlpha: {
        args:true,
        msg:"Esto solo puede tener letras",
      },
      len:{
        args:  [3,10],
        msg: "el numbre debe tener minimo entre 3 a 255 caracteres"
      }
    }
  },

  email:{
    type: DataTypes.STRING,
    validate:{
      isEmail:{
        args:true,
        msg:'Solo se permite correo electronico',
      }
    }
  },

  age:{
    type: DataTypes.INTEGER,
    validate:{
      isInt:{
        args:true,
        msg:"la edad tiene que ser un numero"
      },
      max:{
        args:100,
        msg:"la edad debe ser menos de 100 años",
      },
      min:{
        args:1,
        msg:"la edad debe ser mayor que 1",
      }
    }
  },

  role: DataTypes.INTEGER,
  // si es 0  es un usuario normal y si es 1 es un administrador
  role:{
    type:DataTypes.INTEGER,
    defaultValue: 0,
  }
}, {
     sequelize,
     modelName: 'user',
     timestamps: false,
   });

module.exports = User;