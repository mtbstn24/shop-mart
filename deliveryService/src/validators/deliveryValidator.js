const validate = require('../utilities/validationHelper')
const {
    getDeliverySchema,
    setDeliverySchema
} = require('../schema/deliverySchema');

const getDelivery = async (req) => {

    const attributes = {id:req.params.id}

    return validate(getDeliverySchema(), attributes);
};


const setDelivery  = async (req) => {

    const attributes = {
        userid: req.body.userid, 
        paymentid: req.body.paymentid,
        Date: req.body.Date,
        telephone: req.body.telephone,
        address: req.body.address,
    }
    
    return validate(setDeliverySchema(), attributes);
    };

module.exports = {
    getDelivery ,
    setDelivery 
}