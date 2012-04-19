var dns = require('dns');

exports.path = '/';

exports.get = function(req, res){
  dns.reverse(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    function(err, domains){
      if (err) {
        console.err(err);
      } else {
        res.render('index', {
          title: null
        , host: domains
        });
      }
  });
};
