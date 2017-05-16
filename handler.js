'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.webhook_fb = (event, context, callback) => {
  const queryStringParameters = event.queryStringParameters || {};
  const mode = queryStringParameters['hub.mode'] || '';
  const challenge = queryStringParameters['hub.challenge'] || '';
  const verify_token = queryStringParameters['hub.verify_token'] || '';

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  if (mode.length > 0 && challenge.length > 0 && verify_token.length > 0) {
    if (verify_token === 'test123') {
      response.body = challenge;
    } else {
      response.statusCode = 403;
      response.body = 'Falied validation. Make sure the validation tokens match.';
    }
  } else {
    response.statusCode = 403;
    response.body = 'Falied validation. Make sure the validation tokens match.';
  }

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
