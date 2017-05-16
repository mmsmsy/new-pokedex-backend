const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const monk = require('monk');
const db = require('monk')('localhost/pokemon');
const pokemons = db.get('pokemons');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', router);

router.get('/listpokemons', (req, res) => {
  pokemons.find({}, {fields: ['id','name']})
    .then(pokemons => res.json(pokemons))
});

router.get('/pokemons/:id', (req, res) => {
  pokemons.find({id: parseInt(req.params.id)})
    .then(pokemon => res.json(pokemon[0]));
});

app.listen(3001, () => console.log("Server running at 3001"));