'use strict';

const DDBWrapper = require('../aws-wrappers/dynamodb.js');

module.exports.registerToken = async tokenRequest => {
  var params = {
    TableName: process.env.TOKENS_TBL_NAME,
    Key: {
      flavor: tokenRequest.flavor,
      deviceId: tokenRequest.deviceId,
    },
    UpdateExpression: 'set  #pushToken = :pushToken',
    ExpressionAttributeNames: {
      '#pushToken': 'pushToken',
    },
    ExpressionAttributeValues: {
      ':pushToken': tokenRequest.pushToken,
    },
    ReturnValues: 'UPDATED_NEW',
  };

  console.log('params are', params);

  return await DDBWrapper.updateItem(params);
};
