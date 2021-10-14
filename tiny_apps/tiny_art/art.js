const generateArt = () => {
	const canvas = document.createElement('canvas');
	canvas.id = 'art';
	canvas.height = '500';
	canvas.width = '500';
	canvas.style.border = `5px solid ${appList[0].color}`;
	canvas.style.background = '#000000'

	const ctx = canvas.getContext("2d");

	for (let x=0; x < 255; x++) {
		for (let y=0; y < 255; y++) {
			if ((x ^ y) % 10) {
				ctx.fillRect(x*((x ^ y) % 210), y*((x ^ y) % 210), x, y);
				ctx.fillStyle = `rgb(${(x ^ y) % 210}, ${y} ,${x} `;
			};
		};
	};

	const display = document.getElementById('display');
	display.append(canvas)

};
