// Couldn't get class to work
// Error said 'this.header was not a function'

class Helpers {
	constructor() {
		this.header = document.querySelector('.header');
		this.search = '';
		this.searchPanel = '';

		this.eventListeners();
		this.header();
		this.search();
	}

	eventListeners() {
		window.addEventListener('scroll', () => {
			this.header();
		})

		window.addEventListener('resize', () => {
			this.header();
		})
	}

	// Header class toggle
	header() {
		if(window.pageYOffset > 100) {
			this.header.classList.add('scrolled');
		} else {
			this.header.classList.remove('scrolled');
		}
	}

	// Search Toggle
	search() {		
		if(document.querySelector('.search') && document.querySelector('.search_panel')) {
			this.search = document.querySelector('.search');
			this.searchPanel = document.querySelector('.search_panel');
	
			this.search.addEventListener('click', () => {
				this.searchPanel.classList.toggle('active');
			});
		}
	}
}

export default function initHelpers() {

	// new Helpers;

	const header = document.querySelector('.header');
	let search = '';
	let searchPanel = '';


	const eventListeners = () => {
		window.addEventListener('scroll', () => {
			initHeader();
		})

		window.addEventListener('resize', () => {
			initHeader();
		})
	}

	// Header class toggle
	const initHeader = () => {
		if(window.pageYOffset > 100) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	}

	// Search Toggle
	const initSearch = () => {		
		if(document.querySelector('.search') && document.querySelector('.search_panel')) {
			search = document.querySelector('.search');
			searchPanel = document.querySelector('.search_panel');

			search.addEventListener('click', () => {
				searchPanel.classList.toggle('active');
			});
		}
	}

	eventListeners();
	initHeader();
	initSearch();


}