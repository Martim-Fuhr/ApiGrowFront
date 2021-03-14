export default class CommentGrow {
	constructor() {
		this.name = document.getElementById('name2')
		this.email = document.getElementById('email')
		this.comment = document.getElementById('comment2')
	}
	
	validation() {
		document.getElementsByClassName('btnEnviar')[1].addEventListener('click', event => {
			event.preventDefault()
			if (this.name.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else if (this.email.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else if (this.comment.value === '') {
				document.getElementsByClassName('alert-danger')[1].classList.remove('d-none')
			} else {
				document.getElementsByClassName('alert-danger')[1].classList.add('d-none')
				document.getElementsByClassName('alert-success')[1].classList.remove('d-none')

			setTimeout(( ) => {
				document.getElementsByClassName('alert-success')[1].classList.add('d-none')
			}, 10000);
			}
		})
	}
}