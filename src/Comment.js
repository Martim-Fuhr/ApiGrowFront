import axios from 'axios';

export default class Comment{
	constructor(){ 
		this.name = document.getElementById('name')
		this.comment = document.getElementById('comment')
	}

	validation() {
		document.getElementsByClassName('btnEnviar')[0].addEventListener('click', event => {
			event.preventDefault()
			if (this.name.value === '') {
				document.getElementsByClassName('alert-danger')[0].classList.remove('d-none')
			} else if (this.comment.value === ''){
				document.getElementsByClassName('alert-danger')[0].classList.remove('d-none')
			} else {
				document.getElementsByClassName('alert-danger')[0].classList.add('d-none')
				document.getElementsByClassName('alert-success')[0].classList.remove('d-none')
			
			setTimeout(( ) => {
				document.getElementsByClassName('alert-success')[0].classList.add('d-none')
			}, 10000);
			}
			
		})
	}

	async saveComment() {
	await axios.get('https://growdev-martim.herokuapp.com/comments/').then(response => {
		//this.populate(console.log(response))
		console.log(response);
	}).catch(error => console.log(error))
	}
}