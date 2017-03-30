import {install} from 'source-map-support';
install();

import {APIGatewayEvent, Context} from 'aws-lambda';

import Greeter from '../lib/greeter';

export default async function hello(event: APIGatewayEvent, _context: Context) {
  const params = event.queryStringParameters || {};

  const greeter = new Greeter(params.name);
  const message = greeter.greet(params.yourName);

  return {
    statusCode: 200,
    headers:    {},
    body:       JSON.stringify({message}),
  };
}
