import app from "./app.js";

const port = 3000;

app.listen(3000, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`http://localhost:${port}`);
});
