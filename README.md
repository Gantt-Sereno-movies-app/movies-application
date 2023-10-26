# movies-application
The Movies Application is a single-page application (SPA) that empowers users to manage a collection of movies. With this application, users can perform various actions, such as adding, editing, and deleting movies, as well as rating them. Here's a quick guide to get started:

Figma Design Link https://www.figma.com/file/lTqTI3FVcI3Qz8ydeC7ina/Movie-Streaming-Web-App-UI-(Community)?type=design&node-id=204%3A332&mode=design&t=QaNLnuShByzFsCJO-1

Setting Up JSON Data
In the project's data directory, create a new file named movies.json.
Populate movies.json with the following example content:
json
Copy code
{
"movies": [
{
"id": 1,
"title": "Shrek",
"rating": 5,
"movieSummary": "An animated classic featuring the adventures of Shrek."
}
]
}
The JSON data includes an array of movie objects, each having properties like id, title, rating, and movieSummary. The id property serves as a unique identifier for each movie, while the others are self-explanatory.

Setting Up json-server
In your IntelliJ command line, install json-server using npm:
bash
Copy code
npm install -g json-server
Create a package.json file in the top directory of your project if it doesn't already exist.

Add a scripts property to your package.json with the following configuration:

json
Copy code
"scripts": {
"db": "json-server -d 1200 --watch data/movies.json"
}
The -d 1200 flag adds a 1.2-second delay to the response time (useful for simulating network latency).
The --watch flag specifies the location of the JSON file used for data storage.
Running json-server
To start the json-server and make your movie data accessible through HTTP requests, execute the custom script