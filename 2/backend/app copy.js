// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");
// const app = express();

// const port = process.env.PORT;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello,Express!");
// });

// app.post("/chat", async (req, res) => {
//   let messages = [];
//   const NewMesaages = { role: "user", content: content };
//   messages = [...messages, NewMesaages];
//   const answer = response.data.choices[0].message;
//   messages = [...messages, answer];

//   try {
//     const { content } = req.body;

//     const bearerToken = req.headers.authorization?.substring(7);
//     if (bearerToken !== process.env.SECRET_KEY) {
//       return res
//         .status(400)
//         .json({ ok: false, error: "올바른 키를 입력해주세요." });
//     }
//     if (!content) {
//       return res
//         .status(400)
//         .json({ ok: false, error: "올바른 키를 입력해주세요." });
//     }
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [{ role: "user", content: content }],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${process.env.OPENAI_KEY}`,
//         },
//       }
//     );

//     // console.log(response.data.choices[0].message.content);
//     res.json({ ok: true, result: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error();
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port: ${port}`);
// });
