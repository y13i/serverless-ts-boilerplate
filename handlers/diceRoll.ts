import "source-map-support/register";
import dalamb from "dalamb";
import {APIGatewayEvent} from "aws-lambda";

import {DiceRoller} from "../lib/diceRoller";

export default dalamb<APIGatewayEvent>(async event => {
  const qsp = event.queryStringParameters;

  const params = qsp ? {
    faces:    (qsp["faces"] ? parseInt(qsp["faces"]) : undefined),
    quantity: (qsp["quantity"] ? parseInt(qsp["quantity"]) : undefined),
  } : {};

  const diceRoller = new DiceRoller(params);

  return {
    statusCode: 200,
    headers:    {},
    body:       JSON.stringify(diceRoller.roll()),
  };
});
