const express = require("express");
const app = express();
const produtoRoutes = require("./routes/produtoRoutes");

app.use(express.json());
app.use("/api", produtoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});