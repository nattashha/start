let container = document.getElementById('closed-container')


let btn = document.getElementById('open-btn')
btn.onclick = function() {
	container.style.display = 'block'
	container.style.opacity = 0 
	let x = 0

	setInterval(function() {
		if (x <= 1) {
			x += 0.01
			container.style.opacity = `${Number(container.style.opacity) + 0.01}`
		}
	}, 10);
	window.scrollTo(0, window.outerHeight);
};
