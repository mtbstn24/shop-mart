const { Sequelize, DataTypes } = require('sequelize');
const db = require('../utilities/dbHelper');

const ProductPayment = db.define(
  'productPayment',
  {
    
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    productid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
    }, 
    purchaseDate: {
      type: DataTypes.DATE(),
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT(3),
      allowNull: true,
    }, 

  }
  ,{
    logging: false,
  }
);




module.exports= ProductPayment;