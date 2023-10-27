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
		.then(movies => {
			console.log(movies);
		displayMovies(movies) //maybe move this to main too
		})
}

getMovies()//delete this later

const movieCards = document.querySelector("#movie-cards-row") //move this to main
// export
function displayMovies (movies) {

	movies.forEach( movie =>{
		const div = document.createElement('div');
		const image = document.createElement('img');
		const name = document.createElement('h3');
		const summary = document.createElement('p')
		const edit = document.createElement('button');
		const remove = document.createElement('button');

		div.classList.add('card')
		div.classList.add('col')
		image.classList.add('card-img')

		image.src = movie.posterURL
		name.innerText = movie.title
		summary.innerText = movie.movieSummary
		edit.textContent = 'Edit'
		remove.innerText = 'Delete'

		div.appendChild(image)
		div.appendChild(name)
		div.appendChild(summary)
		div.appendChild(edit)
		div.appendChild(remove)

		movieCards.appendChild(div)
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

function createMovie(movie) {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(movie)
		}
		return fetch(`${MOVIES_HOST}/movies`, options)
			.then(response => response.json())
			.then(movies => movie);
	} catch(error) {
		console.error(error);
	}
}

async function updateMovie(movie) {
	try {
		const options = {
			method: "PUT",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify(movie)
		}
		return fetch(`${MOVIES_HOST}/movies/${movie.id}`, options)
			.then(response => response.json())
			.then(movie => movie);
	} catch(error) {
		console.error(error);
	}
}
