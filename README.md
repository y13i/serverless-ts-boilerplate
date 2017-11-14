# serverless-ts-boilerplate

Example project built with [TypeScript](https://www.typescriptlang.org/), [Serverless Framework](https://serverless.com/framework/), [Webpack](https://webpack.github.io/), [TSLint](https://palantir.github.io/tslint/), [Source Map Support](https://github.com/evanw/node-source-map-support) and [Dalamb](https://github.com/y13i/dalamb).

## Usage

Clone the repo.

```
$ git clone git@github.com:y13i/serverless-ts-boilerplate.git
```

Install dependencies.

```
$ cd serverless-ts-boilerplate
$ yarn
```

Replace service name in `serverless.yml`

```
$ sed -i -e 's/serverless-ts-boilerplate/my-service/g' serverless.yml
```

Deploy example.

```
$ yarn run serverless deploy
```

Try HTTP request.

```
$ curl -s "https://${API_ID}.execute-api.${AWS_REGION}.amazonaws.com/dev/diceRoll" | jq
```

With some parameters.

```
$ curl -s "https://${API_ID}.execute-api.${AWS_REGION}.amazonaws.com/dev/diceRoll?faces=4&quantity=4" | jq
```

Raise some error.

```
$ curl -s "https://${API_ID}.execute-api.${AWS_REGION}.amazonaws.com/dev/diceRoll?faces=7" | jq
```

Confirm sourcemap works.

```
$ yarn run serverless invoke --function diceRoll --data '{"queryStringParameters": {"faces": "7"}}'
```

You can also review errors in CloudWatch Logs by using `serverless logs` command.

```
$ yarn run serverless logs --function diceRoll
```

Remove resources.

```
$ yarn run serverless remove
```

Happy coding!
