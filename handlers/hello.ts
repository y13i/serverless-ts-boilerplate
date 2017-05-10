import "source-map-support/register";
import * as λ from "@y13i/apex.js";
import {APIGatewayEvent} from "aws-lambda";

import Greeter from "../lib/greeter";

export default λ(async (event: APIGatewayEvent) => {
  const params  = event.queryStringParameters || {};
  const greeter = new Greeter(params.name);
  const message = greeter.greet(params.yourName);

  return {
    statusCode: 200,
    headers:    {},
    body:       JSON.stringify({message}),
  };
});
