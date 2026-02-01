const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Espaço VIP Backend Online 🚀");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
