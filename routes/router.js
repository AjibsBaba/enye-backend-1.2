const express = require('express');
const axios = require('axios');

const router = express.Router();


router.get('/rates', function(req, res, next) {
  axios.get('https://api.exchangeratesapi.io/latest', {
    params: {
      base: req.query.base,
      symbols: req.query.currency
    }
  })
  .then(function (response, data) {
    res.send(response.data);
  })
  .catch(function (error) {
    res.send(error);
  })
  .then(function () {
    // always executed
  });  

});



module.exports = router
