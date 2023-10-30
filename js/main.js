// main.js

import * as MovieAPI from "./movie.js"; // Import the functions from movie.js

// Initial display of movies
fetchAndDisplayMovies();

// Add event listeners for search and add movie form submission
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchMovies);

const addMovieButton = document.getElementById("add-new-movie-btn");
addMovieButton.addEventListener("click", toggleMovieModal);

const movieModal = document.getElementById("movieModal");
const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", toggleMovieModal);

const saveMovieButton = document.getElementById("save-movie");
saveMovieButton.addEventListener("click", saveMovie);

const deleteMovieButton = document.getElementById("delete-movie");
deleteMovieButton.addEventListener("click", deleteMovie);

const movieForm = document.getElementById("movie-form");

// Function to fetch and display movies
function fetchAndDisplayMovies() {
	showLoadingMessage();

	MovieAPI.getMovies()
		.then(movies => {
			const movieContainer = document.getElementById("movie-cards-row");
			movieContainer.innerHTML = ""; // Clear existing content

			movies.forEach(movie => {
				const movieCard = createMovieCard(movie);
				movieContainer.appendChild(movieCard);
			});

			addEventListenersForMovies();
		})
		.catch(error => {
			console.error("Error fetching movies:", error);
		});
}

// Function to create a movie card
function createMovieCard(movie) {
	// Create the card HTML structure here and return it
	const card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("col-4");

	// Add movie details to the card
	// ...

	return card;
}

// Function to add event listeners for movie cards
function addEventListenersForMovies() {
	const movieCards = document.querySelectorAll(".card");
	movieCards.forEach(card => {
		card.addEventListener("click", () => {
			// Handle click on a movie card (e.g., open details modal)
			fillMovieFormForEditing(card.dataset.movieId);
			toggleMovieModal();
		});
	});
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


// Function to search for movies
function searchMovies() {
	// Implement movie search functionality
	// ...
}

// Function to toggle the movie modal
function toggleMovieModal() {
	movieModal.style.display = movieModal.style.display === "block" ? "none" : "block";
}

function fillMovieFormForEditing(movieId) {
	// Fetch the movie details for the given movieId using your existing code
	MovieAPI.getMovie(movieId)
		.then(movie => {
			// Fill the form fields with movie details
			document.querySelector("#title").value = movie.title;
			document.querySelector("#director").value = movie.director;
			document.querySelector("#released").value = movie.released;
			document.querySelector("#rating").value = movie.rating;
			document.querySelector("#genre").value = movie.genre;
			document.querySelector("#movieSummary").value = movie.movieSummary;

			// Display the modal for editing (use your existing code)
			// For example, by setting modal.style.display = "block";
		})
		.catch(error => {
			console.error("Error fetching movie details:", error);
		});
}


function saveMovie() {
	// Get movie details from the form
	const title = document.querySelector("#title").value;
	const director = document.querySelector("#director").value;
	const released = parseInt(document.querySelector("#released").value);
	const rating = parseFloat(document.querySelector("#rating").value);
	const genre = document.querySelector("#genre").value;
	const movieSummary = document.querySelector("#movieSummary").value;
	const posterURL = document.querySelector("#posterURL").value;

	// Check if it's an edit or an add (by movie ID or other criteria)
	const movieId =...; // You'll need to determine how to identify if it's an edit or add

	if (movieId) {
		// If it's an edit, update the existing movie
		updateMovie(movieId, title, director, released, rating, genre, movieSummary, posterURL);
	} else {
		// If it's an add, create a new movie
		addMovie(title, director, released, rating, genre, movieSummary, posterURL);
	}
}


// Function to delete a movie
function deleteMovie() {
	// Implement movie deletion
	// ...
}
