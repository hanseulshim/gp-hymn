Instructions for starting up the Backend Locally:

1) Run `npm run server` to get the nodemon server running at `localhost:8080`. Frontend is setup for port 5000.

2) Make sure MongoDB is installed and running (mongod); can use a UI to visualize collections

3) Verify that the connection url in `app.js` matches the location that your local MongoDB instance is running on

4) If you don't have any data yet, run `./node_modules/.bin/babel-node populatedb` from the root directory of gp-hymn. Will populate the db with a few test entries.

5) In the DB `hymns`, you should see a collection called `hymncollections` with 4 hymns entered