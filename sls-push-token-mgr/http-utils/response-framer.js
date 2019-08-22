'use strict';

module.exports.frameResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': false,
    },
    body: JSON.stringify(body),
  };
};
