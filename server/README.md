Instructions for starting up the Backend Locally:

1) Run `npm run server` to get the nodemon server running at `localhost:8080`. Frontend is setup for port 5000.

2) Make sure MongoDB is installed and running (mongod); can use a UI to visualize collections

3) Verify that the connection url in `app.js` matches the location that your local MongoDB instance is running on

4) If you don't have any data yet, run `./node_modules/.bin/babel-node populatedb` from the root directory of gp-hymn. Will populate the db with a few test entries.

5) In the DB `hymns`, you should see a collection called `hymncollections` with 4 hymns entered

6) When loading `localhost:8080` in the browser, after all is said and done, it should spit out an array of the 4 hymn objects in the DB


DIRECTIONS FOR CREATING DATA:

1) All hymn data is located in `data.js`. Verse and Chorus data is will be wrapped in a `<pre>` tag.

2) Run `mongod`

3) run `./node_modules/.bin/babel-node populatedb` which will wipe the current db and write the data

4) run `mongodump --db hymns --collection hymncollections`

5) navigate to the dump folder

6) log into mlab and wipe current collection

7) run `mongorestore -h <db> -d hymns -c hymncollections -u <user> -p <password> hymncollections.bson` with correct credentials.
