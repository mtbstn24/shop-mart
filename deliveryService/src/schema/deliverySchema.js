const Joi = require('joi');

const getDeliverySchema = () => Joi.object().keys({
    id: Joi.alternatives(Joi.string(), Joi.number()).required(),
});

const setDeliverySchema = () => Joi.object().keys({
    userid: Joi.string().required(),
    paymentid: Joi.string().required(),
    Date: Joi.date().required(),
    telephone: Joi.string().required(),
    address: Joi.string().required(),
});



module.exports = {
    getDeliverySchema,
    setDeliverySchema
};