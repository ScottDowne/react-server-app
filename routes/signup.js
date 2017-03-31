var hatchet = require('hatchet');
var url = process.env.SIGNUP;
var sourceUrl = process.env.SOURCEURL;

var signupRoutes = function(transaction, callback) {
  var payload = {
    format: 'html',
    lang: transaction.locale,
    newsletters: 'mozilla-foundation',
    trigger_welcome: 'N',
    source_url: sourceUrl,
    email: transaction.email,
    country: transaction.country,
    first_name: transaction.firstName,
    last_name: transaction.lastName
  };

  hatchet.send("send_post_request", {
    url: url,
    json: true,
    form: payload
  }, (hatchet_error, response) => {
    callback(hatchet_error, payload);
  });
};

module.exports = signupRoutes;
