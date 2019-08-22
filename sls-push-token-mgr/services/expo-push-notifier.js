'use strict';

// eslint-disable-next-line import/no-unresolved
const rp = require('request-promise');

module.exports.notifyUsingExpo = async (tokens, body, title) => {
  console.log('pushing data', tokens.length);

  let pnPayload = tokens.map(token => {
    return {to: token, sound: 'default', body: body, title: title};
  });

  var requestOptions = {
    method: 'POST',
    uri: 'https://exp.host/--/api/v2/push/send',
    body: pnPayload,
    json: true,
    headers: {
      host: 'exp.host',
      accept: 'application/json',
      'accept-encoding': 'gzip, deflate',
      'content-type': 'application/json',
    },
  };
  try {
    let resp = await rp(requestOptions);
    //response has the delivery tickets.
    //TODO: add the tickets in the tokens table for reconcilation later
    console.log('response is ', resp);
  } catch (err) {
    console.log('error in comunicating', err);
  }
};
