const fs = require('fs');
const path = require('path');
const render = require('../lib/render');

function home(req, res) {
    render(res, 'index.html');
}

module.exports = home;