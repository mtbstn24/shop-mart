const { Sequelize, DataTypes } = require("sequelize");
const db = require("../utilities/dbHelper");

const Delivery = db.define(
  "delivery",
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    userid: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    paymentid: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATE(100),
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  },
  {
    logging: false,
  }
);

Delivery.sync();

// Product.sync().then((res) => {
//   Product.create({

//     name: "130ft Led",
//     description: "Lights Keepsmile APP Control Music Sync Color Changing ",
//     discount: 4,
//     price : 1200,
//     category: "food",
//     comission : 50,
//     count: 20,
//     image_path:"https://m.media-amazon.com/images/I/81f9ShZY6nL._AC_SL1500_.jpg"

//   }).then((res) => {
//     console.log(`Insert successful: ${res._id}`);
//   });
// });

module.exports = Delivery;
