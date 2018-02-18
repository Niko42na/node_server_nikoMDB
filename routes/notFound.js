const render = require('../lib/render');

function notFound(req, res) {
    render(res, 'error.html', {error: 'Not Found'});
}

module.exports = notFound;