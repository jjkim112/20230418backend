const chatlog = [];

const messages = [{ role: "user", content: "content" }];

const add = [{ role: "user", content: "content2" }];

const result = [...messages, ...add];

// console.log(result);
console.log(chatlog);

const response = await axios.post(
  "https://api.openai.com/v1/chat/completions",
  {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: content },
      { role: "assistant", content: response.data.choices[0].message.content },
    ],
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_KEY}`,
    },
  }
);

res.json({ ok: true, result: response.data.choices[0].message.content });
