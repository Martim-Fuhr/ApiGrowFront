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
				this.saveComment()
			setTimeout(( ) => {
				document.getElementsByClassName('alert-success')[0].classList.add('d-none')
			}, 10000);
			}
		})
	}

	async saveComment() {
		await axios.post('https://growdev-martim.herokuapp.com/comments',
		{ 
			name: this.name.value,
			comment: this.comment.value
		}
		).then(res => console.log(res))
		.catch(error => console.log(error))
	}


	async showComment() {
		await axios.get('https://growdev-martim.herokuapp.com/comments').then(response => {
			this.populate(response)
		}).catch(error => console.log(error))
	}

	populate(response) {
		document.getElementsByClassName('exibirComentarios')[0].innerHTML += '';
		//console.log(response.data)
		response.data.forEach(element => {
			const cardComment = `<div class="col-4">
									<div class="cadaCard">
										<p class="h4">${element.name}</p>
										<p>${element.comment}</p>
									</div>
								</div>
								`;
			document.getElementsByClassName('exibirComentarios')[0].innerHTML += cardComment;
		});
	}
	
}