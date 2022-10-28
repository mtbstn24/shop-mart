const Delivery = require("../models/delivery");

const getDelivery = async (attributes) => {
    const delivery = await Delivery.findByPk(attributes.id);

    return {
      delivery
    };
};

const setDelivery = async (attributes) => {

    // create one product
    const delivery = await Delivery.create({ 
            userid: attributes.userid, 
            paymentid: attributes.paymentid,
            Date: attributes.Date,
            telephone: attributes.telephone,
            address: attributes.address,
          }).then((res) => {
            console.log(`Insert successful: ${res._id}`);
            return {
                res
            };
          }).catch((err) => {
            console.log(`Error: ${err}`);
          });
        
    return {
      delivery
    };
};


module.exports = {
    getDelivery,
    setDelivery,
}