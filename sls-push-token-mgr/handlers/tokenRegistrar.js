'use strict';

const ResponseFramer = require('../http-utils/response-framer.js');

// eslint-disable-next-line max-len
const TokenRegistrationService = require('../services/token-registration-service.js');

module.exports.register = async event => {
  if (event && event.body) {
    let tokenRegistrationRequest = JSON.parse(event.body);
    try {
      await TokenRegistrationService.registerToken(tokenRegistrationRequest);
      return ResponseFramer.frameResponse(200, {
        message: 'Saved the token',
      });
    } catch (error) {
      return ResponseFramer.frameResponse(400, {
        message: 'Could not register the token',
      });
    }
  } else {
    return ResponseFramer.frameResponse(400, {
      message: 'Invalid request body',
    });
  }
};
