'use strict';

const ResponseFramer = require('../http-utils/response-framer.js');
const TokenFetcherService = require('../services/token-fetcher-service.js');
const ExpoNotifier = require('../services/expo-push-notifier.js');

module.exports.notify = async event => {
  if (event && event.body) {
    let pushNotificationPayload = JSON.parse(event.body);
    if (pushNotificationPayload.message && pushNotificationPayload.flavor) {
      let tokensRetrived = [];
      try {
        tokensRetrived = await TokenFetcherService.fetchTokensForFlavor(
          pushNotificationPayload.flavor,
        );
      } catch (err) {
        return ResponseFramer.frameResponse(404, {
          message: 'Could not fetch the tokens',
        });
      }
      await ExpoNotifier.notifyUsingExpo(
        tokensRetrived,
        pushNotificationPayload.title || 'Title',
        pushNotificationPayload.message,
      );

      return ResponseFramer.frameResponse(200, {
        message: 'Sent the notification',
      });
    } else {
      return ResponseFramer.frameResponse(400, {
        message: 'Missing Required parameters',
      });
    }
  } else {
    return ResponseFramer.frameResponse(400, {
      message: 'Invalid request body',
    });
  }
};
