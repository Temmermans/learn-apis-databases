We will build Rest Apis to work with people, movies and genres.

The following table shows overview of the Rest APIs that will be exported:

| Methods           | Urls                          | Actions                                       |
| -----------       | -----------                   | -----------                                   |
| POST              | api/register                  | register a new user                           |
| POST              | api/login                     | login to application                          |
| GET               | api/users/me                  | Get logged in user details                    |
| GET               | api/movies                    | Get all movies                                |
| GET               | api/movies/recommended        | Get movies recommended for the user           |
| GET               | api/movies/rated              | Get all rated movies                          |
| GET               | api/movies/:id                | Get details of a single movie                 |
| GET               | api/movies/genre/:id          | Find movies by genre                          |
| GET               | /movies/daterange/:start/:end | Find movies where the between start and end   |
| GET               | /movies/directed_by/:id       | Find movies with a certain director           |
| GET               | /movies/acted_in_by/:id       | Find movies with a specific actor             |
| GET               | /movies/written_by/:id        | Find movies written by                        |
| POST              | /movies/:id/rate              | Rate a specific movie                         |
| DELETE            | /movies/:id/rate              | Delete movie rating                           |
| GET               | /people                       | List all people                               |
| GET               | /people/:id                   | Get details of a user                         |
| GET               | /people/bacon                 | Get neighbouring users                        |
| GET               | /genres                       | List all available genres                     |