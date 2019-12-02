function validateContactForm() {
	let name = contact.name.value
	let email = contact.email.value
	let phone = contact.phone.value
	let message = contact.message.value

	if (name === "") {
		alert("Preencha o campo Nome!")
		contact.name.focus()
		return false
	}

	if (email === "") {
		alert("Preencha o campo E-mail!")
		contact.email.focus()
		return false
	} else if (email.indexOf("@") == -1) {
		alert("Preencha o campo E-mail CORRETAMENTE!")
		contact.email.focus()
		return false
	}

	if (phone === "") {
		alert("Preencha o campo Telefone!")
		contact.phone.focus()
		return false
	}

	if (message === "") {
		alert("Preencha o campo Mensagem!")
		contact.message.focus()
		return false
	}
}
