'use strict';

const DDBWrapper = require('../aws-wrappers/dynamodb.js');

module.exports.fetchTokensForFlavor = async flavor => {
  var params = {
    TableName: process.env.TOKENS_TBL_NAME,
    ExpressionAttributeNames: {
      '#flavor': 'flavor',
    },
    FilterExpression: '#flavor = :flavor',
    ExpressionAttributeValues: {
      ':flavor': flavor,
    },
  };
  console.log('params are', params);
  let dataCollector = [];
  let result = await DDBWrapper.recursiveScan(dataCollector, params);
  return result.map(item => {
    return item.pushToken;
  });
};
