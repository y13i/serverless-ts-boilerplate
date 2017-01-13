import * as lambda           from 'apex.js';
import * as SourceMapSupport from 'source-map-support';

import Greeter from '../lib/greeter';

SourceMapSupport.install();

export default lambda(event => {
  const params = event.queryStringParameters || {};

  const greeter = new Greeter(params.name);
  const message = greeter.greet(params.yourName);

  return {
    statusCode: 200,
    body:       JSON.stringify({message}),
  };
});
