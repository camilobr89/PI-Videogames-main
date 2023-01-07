// const axios = require('axios');
// const { Videogames, Genre } = require('../db.js');
// const { API_KEY } = process.env;

// const getApiInfo = async () => {
//     const urlApi = await axios(`https://api.rawg.io/api/games?key=${API_KEY}`);
//     const apiInfo = await urlApi.data.map(el => {
//         return {
//             id: el.id,
//             name: el.name,
//             description: el.description,
//             released: el.released,
//             rating: el.rating,
//             platforms: el.platforms.map(el => el.platform.name),
//             genre: el.genre,
//             image: `https://cdn2.thedogapi.com/images/${el.reference_image_id}.jpg`
//         }
//     })
//     return apiInfo;
// }

// const dataBaseInfo = async () => {
//     return await Dogs.findAll ({
//         include: {
//             model: Temperament,
//             attributes: ['name'],
//             through: {
//                 attributes: [],
//             }
//         }
//     });
// };

// const getDogs = async () => {
//     const apiInfo = await getApiInfo();
//     const dbInfo = await dataBaseInfo();
//     const allDogs = apiInfo.concat(dbInfo);
//     return allDogs;  
// };

// module.exports = { getDogs };