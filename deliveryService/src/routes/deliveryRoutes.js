const express = require('express')
const deliveryController = require('../controllers/deliveryController')
const router = express.Router()

router.route('/').post(deliveryController.setDelivery)
router.route('/:id').get(deliveryController.getDelivery)



module.exports = router 