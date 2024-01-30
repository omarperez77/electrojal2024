const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("electrojal-app/dist"));
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

app.get("/api/pirates/:id", (req, res) => {
  const id = req.params.id;
  const pirate = getPirate(id);
  if (!pirate) {
    res.status(404).send({ error: `Pirate ${id} not found` });
  } else {
    res.send({ data: pirate });
  }
})

function getPirate(id) {
    const pirates = [
        {id: 1, name: 'Jose Rodríguez', active: 'yes', country: 'Alemania'},
        {id: 2, name: 'Juan Serrano', active: 'yes', country: 'México'},
        {id: 3, name: 'Mercedes Aguilar', active: 'no', country: 'Japon'},
        {id: 4, name: 'Alemania Treviño', active: 'yes', country: 'China'},
        {id: 5, name: 'Claudia Morales', active: 'yes', country: 'Brazil'},
        {id: 6, name: 'Jesus Becerra', active: 'yes', country: 'Alemania'},
    ];
    return pirates.find(p => p.id == id);
}