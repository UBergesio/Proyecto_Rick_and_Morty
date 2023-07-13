const axios = require("axios")
let utils = {};

utils.getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const objChar = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(objChar));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text-plain" });
      res.end(err.message);
    });
};

module.exports = utils;
