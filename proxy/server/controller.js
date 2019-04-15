const axios = require('axios');

const controller = {
  navbar: (req, res) => {
    axios
    .get(`http://localhost:3001/api/navbar`)
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => console.error(err))
  },

  navbarWithId: (req, res) => {
      let { restaurantId } = req.params;
      axios
      .get(`http://localhost:3001/api/navbar/${restaurantId}`)
      .then(data => res.send(JSON.stringify(data.data)))
      .catch(err => console.log('ERROR'))
  },

  reservation: (req, res) => {
    axios
    .get(`http://localhost:3002/api/reservation/`)
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => console.error(err))
  },

  reservationWithId: (req, res) => {
      let { restaurantId } = req.params;
      axios
      .get(`http://localhost:3002/api/reservation/id/${restaurantId}`)
      .then(data => res.send(JSON.stringify(data.data)))
      .catch(err => console.log('ERROR'))
  },

  descriptionWithId: (req, res) => {
    let { restaurantId } = req.params;
    axios
    .get(`http://localhost:3003/api/restaurant/${restaurantId}`)
    .then(data => res.send(JSON.stringify(data.data)))
    .catch(err => console.error(err))
  },

  reviewsWithId: (req, res) => {
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!')
      let { restaurantId } = req.params;
      axios
      .get(`http://localhost:3004/api/restaurant/${restaurantId}`)
      .then(data => res.send(JSON.stringify(data.data)))
      .catch(err => console.log('ERROR'))
  }

}

module.exports = controller;
