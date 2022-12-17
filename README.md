# ChatGPT Proxy Server

Uses [chatgpt-api](https://github.com/transitive-bullshit/chatgpt-api) in order to query ChatGPT with a POST request. Useful in environments where Node 18.x cannot be used (e.g. when creating VS Code extensions).

## Usage

1. Add `OPENAI_EMAIL` and `OPENAI_PASSWORD` to `.env`.
2. Run program
3. Query by sending a post request to port 3000 at `/askchatgpt` with the following body:

```json
{
	"query": "Explain how to find if a number is prime in python. Include a sample program."
}
```

## Limitations

ChatGPT needs captchas to be solved, so this cannot run fully automatically. If you have a [2captcha](https://2captcha.com/) account, you could add the parameter `captchaToken` to the `ChatGPTAPIBrowser` options, although the 2captcha API is not free.
