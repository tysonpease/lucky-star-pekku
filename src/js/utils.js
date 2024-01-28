export function title_case(s) {
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export function setCookie(cname, cvalue) {
	document.cookie = cname + '=' + cvalue + ';'
}

export function getCookie(cname) {
	const name = cname + '='
	const ca = document.cookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) === ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ''
}

// https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript
export function find_get_parameter(parameter_name) {
	let result = null,
		tmp = []
	location.search
		.substr(1)
		.split('&')
		.forEach(function (item) {
			tmp = item.split('=')
			if (tmp[0] === parameter_name) result = decodeURIComponent(tmp[1])
		})
	return result
}

export function init_accordions() {
	let acc = document.getElementsByClassName('accordion-button')
	acc.forEach((el) => {
		el.addEventListener('click', () => {
			this.classList.toggle('active')
			let panel = this.nextElementSibling
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null
			} else {
				panel.style.maxHeight = panel.scrollHeight + 'px'
			}
		})
	})
}
