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
showLoadingMessage()
function getMovies() {
	fetch(`${MOVIES_HOST}/movies`)
		.then(response => response.json())
		.then(movies => {
			console.log(movies);
		generateCard(movies) //maybe move this to main too
		})

}

getMovies()//delete this later

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
			.then(movie => movie);
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

async function deleteMovie(id) {
	try {
		const options = {
			method: "DELETE"
		}
		return fetch(`${MOVIES_HOST}/movies/${id}`, options)
			.then(response => response.json())
			.then(movie => movie);
	} catch(error) {
		console.error(error);
	}
}

function getMovie(id) {
	try {
		return fetch(`${MOVIES_HOST}/movies/${id}`)
			.then(response => response.json())
			.then(async movie => {
				return book;
			});
	} catch(error) {
		console.error(error);
	}
}
function showLoadingMessage() {
	const movieContainer = document.getElementById("movie-cards-row");
	const spinner = document.createElement("div");
	spinner.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;

	movieContainer.innerHTML = ""; // Clear existing content
	movieContainer.appendChild(spinner);
}


function hideLoadingMessage() {
	const spinner = document.querySelector(".spinner-border");
	if (spinner) {
		spinner.style.display = "none";
	}
}

  /////////// MOVE THIS TO MAIN//////////////
const addMovieBtn = document.querySelector("#add-new-movie-btn")
const movieCards = document.querySelector("#movie-cards-row")

addMovieBtn.addEventListener("click", (e)=>{
	e.preventDefault()

	let movies = [];

	//create a movie object from the form fields
	let newMovie ={
		title: document.querySelector("#title").value,
		rating: document.querySelector("#rating").value,
		genre: document.querySelector("#genre").value,
		movieSummary: document.querySelector("#movieSummary").value
	}

	createMovie(newMovie)//adds movie to JSON
	movies.push(newMovie)//pushes movie to array
	///add something that says thanks for your submission after clicking add my movie

})
function generateCard (movies) {

	movies.forEach( movie =>{
		const div = document.createElement('div');
		const image = document.createElement('img');
		const name = document.createElement('h3');
		const summary = document.createElement('p')
		const edit = document.createElement('button');
		// edit.addEventListener("click", editMovie)
		const remove = document.createElement('button');
		remove.addEventListener("click", removeMovieCard)

		div.classList.add('card')
		div.classList.add('col-4')
		image.classList.add('card-img')

		image.src = movie.posterURL
		name.innerText = movie.title
		summary.innerText = movie.movieSummary
		edit.textContent = 'Edit'
		remove.innerText = 'Remove'

		div.appendChild(image)
		div.appendChild(name)
		div.appendChild(summary)
		div.appendChild(edit)
		div.appendChild(remove)

		movieCards.appendChild(div)
	})
}
function removeMovieCard(event){
	if (confirm("Are you sure?"))
	event.target.parentElement.remove()
}

// async function deleteMovie(id) {
// 	try {
// 		const options = {
// 			method: "DELETE"
// 		}
// 		return fetch(`${MOVIES_HOST}/movies/${id}`, options)
// 			.then(response => response.json())
// 			.then(movie => movie);
// 	} catch(error) {
// 		console.error(error);
// 	}
// }
// function removeMovieCard(event){
// 	if (confirm("Are you sure?")) {
// 		let movieId = event.target.parentElement.dataset.movie.id;
// 		deleteMovie(movieId);
// 		event.target.parentElement.remove();
// 	}
// }