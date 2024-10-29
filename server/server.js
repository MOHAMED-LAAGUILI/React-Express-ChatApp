const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const result = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "8c63dbce-80a7-455a-890b-9368d16e1dcb" } }
    );

    return res.status(result.status).json(result.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else {
      console.error("Request error:", error.message);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
});

app.listen(3001, () => {
  console.log("Server is running on port http://localhost:3001/");
});

