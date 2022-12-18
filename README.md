# ChatGPT Proxy Server

[![Continuous Integration](https://github.com/kiranvshah/chatgpt-proxy-server/actions/workflows/continuous_integration.yaml/badge.svg)](https://github.com/kiranvshah/chatgpt-proxy-server/actions/workflows/continuous_integration.yaml)

This README was written by ChatGPT.

This repository contains the code to run a server that can host the ChatGPT API. The ChatGPT API allows you to send a query to ChatGPT and receive a response. It is useful in environments where Node 18.x cannot be used, such as when creating VS Code extensions. The API uses the [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api) library.

## ChatGPT API

### Endpoint

`POST /askchatgpt`

### Parameters

- `query`: a string representing the query to send to ChatGPT.

### Response

The API will return a JSON object with the following structure:

```json
{
	"response": "string"
}
```

The `response` field contains the response from ChatGPT as a string, with line breaks represented by `\\n`.

### Example

```bash
curl -X POST -H "Content-Type: application/json" -d '{"query": "How can I check if a number is prime in Python?"}' localhost:3000/askchatgpt
```

This request will send the query "How can I check if a number is prime in Python?" to ChatGPT and receive a response.

```json
{
	"response": "To check if a number is prime in Python, you can use the following code:\n\ndef is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n ** 0.5) + 1):\n        if n % i == 0:\n            return False\n    return True"
}
```

### Requirements

To use this API, you will need to have an account with OpenAI and set the `OPENAI_EMAIL` and `OPENAI_PASSWORD` environment variables in a '.env' file. You will also need to install the required dependencies by running `pnpm install`.

### Usage

1. Create a '.env' file in the root directory of your project and set the `OPENAI_EMAIL` and `OPENAI_PASSWORD` environment variables.
2. Generate a NopeCHA key [here](https://nopecha.com/manage) and paste it as the `NOPECHA_KEY` in '.env'.
3. Run `pnpm install` to install the required dependencies.
4. Start the server by running `pnpm start`.
