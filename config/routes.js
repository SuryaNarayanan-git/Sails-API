/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    "GET /": "home/index",
    'POST /user/register': 'user/register',
    'GET /user/confirm': 'user/confirm',
    'post/user/login': 'usrr/login'

};