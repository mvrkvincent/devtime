const renderArt = () => {
	const context = tinyart.getContext("2d");
	for (let x=0; x < 255; x++) {
		for (let y=0; y < 255; y++) {
			if ((x ^ y) % 10) {
				context.fillRect(x*((x ^ y) % 210), y*((x ^ y) % 210), x, y);
				context.fillStyle = `rgb(${(x^y) % 210}, ${y} ,${x} `;
			};
		};
	};

};

renderArt();