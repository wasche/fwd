var dns = require('dns');

/*
 * GET home page.
 */

exports.index = function(req, res){
  dns.reverse(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    function(err, domains){
      if (err) {
        console.err(err);
      } else {
        console.log(require('util').inspect(domains));
        res.render('index', {
          title: 'Express'
        , host: domains
        });
      }
  });
};
