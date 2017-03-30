import {install} from 'source-map-support';
install();

import {APIGatewayEvent, Context, Callback} from 'aws-lambda';

import Greeter from '../lib/greeter';

export default async function hello(event: APIGatewayEvent, context: Context, callback: Callback): Promise<void> {
  try {
    console.log({event, context});

    const params = event.queryStringParameters || {};

    const greeter = new Greeter(params.name);
    const message = greeter.greet(params.yourName);

    callback(undefined, {
      statusCode: 200,
      headers:    {},
      body:       JSON.stringify({message}),
    });
  } catch (ex) {
    console.error(ex);
    callback(ex);
  }
}
