const express = require('express');
const router = express.Router();
const controller = require('./controller')

router.route('/navbar') // get
  .get(controller.navbar)

router.route('/navbar/:restaurantId') // get
  .get(controller.navbarWithId)

router.route('/reservation') // get
  .get(controller.reservation)

router.route('/reservation/id/:restaurantId') // get
  .get(controller.reservationWithId)

router.route('/restaurant/:restaurantId') // get
  .get(controller.descriptionWithId)

router.route('/reviews/:restaurantId') // get
  .get(controller.reviewsWithId)

module.exports = router;