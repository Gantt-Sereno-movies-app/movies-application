"use strict";

let movies = [];

main();

document.addEventListener('DOMContentLoaded', main');

	aysnc function main() {
	// showLoadingMessage(true);
	movies = await getMovies();
	// showLoadingMessage(false);

	displayMovies();

	addListeners();
	initAddMovieForm();
}