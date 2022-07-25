'use strict';

module.exports = function(app) {
    var appfunc = require('../controllers/index.js');

    app.route('/api').post(appfunc.modifierWord);
}