exports.path = '/_add';

function save_handler(response){
  return function(err){
    if (err) {
      response.render('add', {
        title: null
      , error: err
      });
    } else {
      response.redirect('/');
    }
  };
}

exports.get = function(req, res){
  var dns = require('dns');
  dns.reverse(
    req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    function(err, domains){
      if (err) {
        throw err;
      }

      res.render('add', {
        title: null
      , error: null
      , host: domains && domains.length && domains[0]
      });
    }
  );
};

exports.post = function(req, res){
  var dns = require('dns')
    , mongoose = require('mongoose')
    , Forward = mongoose.model('Forward')
    , User = mongoose.model('User')
    , fwd = {
        name: req.body.name
      , target: req.body.url
      , dynamic: !!req.body.dynamic
    }
    ;

  if (req.body.personal) {
    User.$where('this.hosts.indexOf(' + req.body.hostname + ') >= 0').exec(function(err, docs){
      if (err) { throw err; }
      if (!(docs && docs.length)) {
        var user = new User();
        user.hosts.push(req.body.hostname);
        user.forwards.push(fwd);
        user.save(save_handler(res));
      } else {
        docs[0].forwards.push(fwd);
        docs[0].save(save_handler(res));
      }
    });
  } else {
    Forward.create(fwd, save_handler(res));
  }
};
