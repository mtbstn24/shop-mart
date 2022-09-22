const {DataTypes} = require("sequelize");
const sequelize = require("../database");
const Payment = sequelize.define("Payment",{
    paymentId :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    customerID :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    noOfItems :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    price :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    date :{
        type:DataTypes.STRING,
        allowNull:false,
    },
    time :{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports = Payment;