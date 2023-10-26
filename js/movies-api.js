"use strict";

const MOVIES_HOST = "http://localhost:3000";


// This file hands the movie apis that will be exported to the main

//Get movies

// export
// function hideLoadingMessage() {
// 	spinner starts when page starts up
// 	document.querySelector("#spinner-border").hide();
// }


// export
function getMovies() {
	fetch(`${MOVIES_HOST}/movies`)
		.then(response => response.json())
		.then(movies =>
			console.log(movies));

}

getMovies()

// export
function displayMovies(movies) {
	movies.forEach(movie =>{
		const div = document.createElement('div');
		const image = document.createElement('img');
		const name = document.createElement('h3');
		const summary = document.createElement('p')
		const edit = document.createElement('button');
		const remove = document.createElement('button');

		div.classList = 'card'
		image.classList = 'card-img'

		image.src = 'movies.posterURL'
		name.innerText = 'movies.title'
		summary.inner = 'movies.movieSummary'
		edit.textContent = 'Edit'
		remove.innerText = 'Delete'

div.appendChild()
div.appendChild()
div.appendChild()
div.appendChild()


	})

}


function addMovie() {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(movie)
		}
		return getMovies();
	} catch (error) {
		console.error(error);
	}
}

