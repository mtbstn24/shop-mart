const controller = require('../controller');
const deliveryValidator = require('../validators/deliveryValidator');
const deliveryService = require('../services/deliveryService');

const getDelivery = async (req,res) => {
    await controller(req, res,{
      validator: deliveryValidator.getDelivery,
      service: deliveryService.getDelivery,
    });
};

const setDelivery = async (req,res) => {
    await controller(req, res,{
      validator: productValidator.setDelivery,
      service: productService.setDelivery,
    });
};



module.exports = {
  getDelivery, 
  setDelivery, 
  
}

