const express = require('express');
const api = require('./server/index')(express());

const port = 8001;

api.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
