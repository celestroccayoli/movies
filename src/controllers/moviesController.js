const db = require('./database/models/index.js');

const moviesController = {
    list:(req, res) =>{
        let movies = db.Movie.findAll()
        res.render('moviesList', {movies: movies});
    },
    new: (req, res)=>{

    },
    detail: (req, res) =>{
        
    },
    recomended: (req, res)=>{

    }
}
module.exports = moviesController;