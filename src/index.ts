import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

const queryChatgpt = async (query: string) => {
	const { ChatGPTAPIBrowser } = await import("chatgpt")
	const chatgptApi = new ChatGPTAPIBrowser({
		email: process.env.OPENAI_EMAIL as string,
		password: process.env.OPENAI_PASSWORD as string,
	})
	await chatgptApi.init()
	return await chatgptApi.sendMessage(query)
}

app.post("/askchatgpt", async (req, res) => {
	const query = req.body.query
	const response = await queryChatgpt(query)
	res.json(response)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server running on port ${port}`)
})

export {}
