const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  { id: 1, descripcion: 'Hacer la compra', completada: false },
  { id: 2, descripcion: 'Hacer ejercicio', completada: true },
  { id: 3, descripcion: 'Estudiar programación', completada: false }
];

app.get('/tareas', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
