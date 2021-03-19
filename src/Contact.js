import axios from 'axios';

export default class Contact {
	constructor() {
		this.name = document.getElementById('name2')
		this.phone = document.getElementById('telefone')
		this.email = document.getElementById('email')
		this.comment = document.getElementById('comment2')
	}
	
	validation() {
		document.getElementsByClassName('btn-primary')[0].addEventListener('click', event => {
			event.preventDefault()
			if (this.name.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else if (this.phone.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else if (this.email.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else if  (this.comment.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else {
				document.getElementsByClassName('alert-danger')[1].classList.add('d-none')
				document.getElementsByClassName('alert-success')[1].classList.remove('d-none')
				this.saveContact()
				setTimeout(( ) => {
					document.getElementsByClassName('alert-success')[1].classList.add('d-none')
				}, 10000);
			}
		})
	}

	async saveContact() {
		await axios.post('https://growdev-martim.herokuapp.com/contact',
		{ 
			name: this.name.value,
			phone: this.phone.value,
			email: this.email.value,
			comment: this.comment.value
		}
		).then(res => console.log(res))
		.catch(error => console.log(error))
	}

	clearData() {
		document.getElementsByClassName('btnClear')[0].addEventListener('click', event => {
			event.preventDefault()
			this.resetValues()
		})
	}

	exitClear() {
		document.getElementsByClassName('btnExit')[0].addEventListener('click', event => {
		event.preventDefault()
		this.resetValues()
		})
	}

	resetValues() {
		this.name.value = ''
		this.phone.value = ''
		this.email.value = ''
		this.comment.value = ''
	}
}