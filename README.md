# Shoe Fits API Microservice

Use this API to return the average fit value score for a given shoe, and allow users to submit new fit scores to get added to the average.

### Installation Instructions
The easiest way to install this app is by building Docker containers off of the included docker-compose.yml file.

- Clone the repository
- Run 'docker-compose build' to create the image
- Run 'docker-compose up' to start the containers
- Docker will start two containers - Postgres and Node10.16-Alpine
- Once the Postgres container is started and ready, Docker will run the knex migrations and start nodemon to serve the app
- Once nodemon is running, you can access the API endpoint at localhost:3000


### API Endpoints
There are three endpoints available via this service
- `GET /api/v1/shoefits/{shoeId}` - returns all of the fit values entered for a specific shoe ID
- `GET /api/v1/shoefits/TrueToSizeCalculation/{shoeId}` - returns the average fit value for a specific shoe ID
- `POST /api/v1/shoefits/{shoeId}` - adds a new fit value by shoe ID (limited between 1 and 3 in this example data).  fitValue parameter must be present in POST request body and must be a number between 1 and 5.

**Note:** Shoe ID is always required in API calls and must be numeric.  For the included sample data shoe ID can be between 1 and 3.


### Testing with Mocha
There are included unit tests powered by Mocha and Supertest that will be run automatically when the Docker container is started and after the knex migrations are run.  See `./test/app.test.js` for more information.