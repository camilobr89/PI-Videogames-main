const { Router } = require ("express");
const axios = require ("axios");
const { Genre } = require("../db")
const router = Router();
const {API_KEY} = process.env;

router.get('/', async (req, res) => {
    try {
        const genresApi = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = genresApi.data.map(genres => genres.genres).join(", ").split(", ").filter(genres => genres != "");

        genres.forEach(genres => {
            Genre.findOrCreate ({
                where: {name: genres}
            })
        });
        const videogameGenres = await Genre.findAll();
        res.send(videogameGenre)
    } catch (error) {
        res.status(404).send('invalid genre')
    }

});


module.exports = router;