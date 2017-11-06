import "source-map-support/register";
import dalamb from "dalamb";
import {APIGatewayEvent} from "aws-lambda";

import Greeter from "../lib/greeter";

export default dalamb<APIGatewayEvent>(async event => {
  const params  = event.queryStringParameters || {};
  const greeter = new Greeter(params.name);
  const message = greeter.greet(params.yourName);

  return {
    statusCode: 200,
    headers:    {},
    body:       JSON.stringify({message}),
  };
});
