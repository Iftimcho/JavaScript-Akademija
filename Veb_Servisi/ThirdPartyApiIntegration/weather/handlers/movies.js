const movies = require('../pkg/movies/index');

const getMovie = async (req, res) => {
    try {
        const movie = await movies.byTitle(req.params.title);
        res.send({
            error: false,
            movie
        });
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        });
    }
};

const getSeason = async (req, res) => {
    try{
        const episodes = await movies.bySeason(req.params.title, req.params.season)
        res.send({
            error: false,
            episodes
        });
    } catch (error) {
        res.send({
            error: true,
            message: error.message
        });
    }
}

module.exports = {
    getMovie,
    getSeason
}