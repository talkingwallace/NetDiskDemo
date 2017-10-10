/**
 * Created by cwj on 2017/3/30.
 */
var  express = require('express');
var app = express();
var router = require('./model/router');

app.use(express.static('files'));
router.setRouter(app);
var server = app.listen(8000, function () {
      var host = server.address().address;
      var post = server.address().port;
      console.log('server is running');
});