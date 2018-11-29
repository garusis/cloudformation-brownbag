const aws = require('aws-sdk')

const docClient = new aws.DynamoDB.DocumentClient()
const tableName = process.env.USER_TABLE

async function fill(event, context, callback) {
  const users = [
    {
      name: 'Pepe',
      lastName: 'Grillo'
    },
    {
      name: 'Mr.',
      lastName: 'Gold'
    },
    {
      name: 'Emma',
      lastName: 'Swan'
    }
  ]
  await Promise.all(users.map(user => docClient.put({TableName: tableName, Item: user}).promise()))
  
  var response = {
    'isBase64Encoded': false,
    'headers': { 'Access-Control-Allow-Origin': '*' , 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'},
    'statusCode': 200,
    'body': 'OK'
  };
  callback(null, response);
}

async function list(event, context, callback) {
  const params = {TableName: tableName, Select: 'ALL_ATTRIBUTES'}
  const {Items} = await docClient.scan(params).promise()
  
  var response = {
    'isBase64Encoded': false,
    'headers': { 'Access-Control-Allow-Origin': '*' , 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'},
    'statusCode': 200,
    'body': JSON.stringify(Items)
  };
  callback(null, response);
}

exports.handler = async function(event, context, callback){
  if(event.httpMethod === 'OPTIONS'){
    var response = {
      'isBase64Encoded': false,
      'headers': { 'Access-Control-Allow-Origin': '*' , 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'},
      'statusCode': 200,
      'body': 'OK'
    };
    callback(null, response);
  } else if(event.path === '/fill'){
    await fill(event, context, callback)
  } else if(event.path === '/list'){
    await list(event, context, callback)
  }
};
