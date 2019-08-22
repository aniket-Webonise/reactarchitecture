// eslint-disable-next-line import/no-unresolved
const AWS = require('aws-sdk');
// eslint-disable-line import/no-extraneous-dependencies

let options = {convertEmptyValues: true};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  let DDB_PORT = process.env.DDB_PORT;

  Object.assign(options, {
    region: 'localhost',
    endpoint: 'http://localhost:10001',
  });
}

const DDBClient = new AWS.DynamoDB.DocumentClient(options);

async function updateItem(updateParams) {
  return DDBClient.update(updateParams).promise();
}

async function recursiveScan(allData, params) {
  let data = await DDBClient.scan(params).promise();

  if (data['Items'].length > 0) {
    allData = [...allData, ...data['Items']];
  }

  if (data.LastEvaluatedKey) {
    params.ExclusiveStartKey = data.LastEvaluatedKey;
    return await recursiveScan(allData, params);
  } else {
    return allData;
  }
}

module.exports = {
  updateItem,
  recursiveScan,
};
