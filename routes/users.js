﻿var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.send(req.params.id+'用户');
});


module.exports = router;
