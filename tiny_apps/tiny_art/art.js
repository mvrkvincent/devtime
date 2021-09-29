const render = () => {
	const canvas = document.getElementById('art')
	const ctx = canvas.getContext("2d");
	for (let x=0; x < 255; x++) {
		for (let y=0; y < 255; y++) {
			if ((x ^ y) % 10) {
				ctx.fillRect(x*((x ^ y) % 210), y*((x ^ y) % 210), x, y);
				ctx.fillStyle = `rgb(${(x ^ y) % 210}, ${y} ,${x} `;
			};
		};
	};

};

document.addEventListener("DOMContentLoaded", render)
