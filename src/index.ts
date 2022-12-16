import("dotenv").then(dotenv => dotenv.config())

const queryChatgpt = async (query: string) => {
	const { ChatGPTAPIBrowser } = await import("chatgpt")
	const chatgptApi = new ChatGPTAPIBrowser({
		email: process.env.OPENAI_EMAIL as string,
		password: process.env.OPENAI_PASSWORD as string,
	})
	await chatgptApi.init()
	return await chatgptApi.sendMessage(query)
}

export {}
