const express = require("express");
const router = express.Router();
const routes = require("./routes");

router.post("/register", routes.users.register);
router.post("/login", routes.users.login);
router.get("/users/me", routes.users.me);
router.get("/movies", routes.movies.list);
router.get("/movies/recommended", routes.movies.getRecommendedMovies);
router.get("/movies/rated", routes.movies.findMoviesRatedByMe);
router.get("/movies/:id", routes.movies.findById);
router.get("/movies/genre/:id", routes.movies.findByGenre);
router.get(
  "/movies/daterange/:start/:end",
  routes.movies.findMoviesByDateRange
);
router.get("/movies/directed_by/:id", routes.movies.findMoviesByDirector);
router.get("/movies/acted_in_by/:id", routes.movies.findMoviesByActor);
router.get("/movies/written_by/:id", routes.movies.findMoviesByWriter);
router.post("/movies/:id/rate", routes.movies.rateMovie);
router.delete("/movies/:id/rate", routes.movies.deleteMovieRating);
router.get("/people", routes.people.list);
router.get("/people/:id", routes.people.findById);
router.get("/people/bacon", routes.people.getBaconPeople);
router.get("/genres", routes.genres.list);

module.exports = router;
