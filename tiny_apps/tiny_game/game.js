const generateGame = () => {
    canvas = document.createElement('canvas');
    canvas.id = 'game';
    canvas.width = '500';
    canvas.height = '500';
    canvas.style.border = '4px solid #FF66FF'

    const display = document.getElementById('display');
    display.append(canvas)

    ctx = canvas.getContext('2d');

    // intial state for our game
    posX = posY = 10;
    appleX = appleY = 15;
    gridSize = 20
    tableSize = 25;

    // only values manipulated by our d-pad (directional values)
    moveX = moveY = 0;

    // our snake
    body = []; // {x: posX, y: posY}
    segments = 5;


    // logic for game
    const game = () => {

        // adjust the position of our snake based on changes to directional values.
        posX += moveX;
        posY += moveY;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#2ED9EB';

        // if our snake exits our table, redraw on oposite side.
        if(posX < 0) {
            posX = tableSize - 1;
        };
        if(posX > tableSize - 1) {
            posX = 0;
        };
        if(posY < 0) {
            posY = tableSize - 1;
        }
        if(posY > tableSize - 1) {
            posY = 0;
        }

        // draw our snake based on the size of our grid 
        for(let i=0; i < body.length; i++) {
            ctx.fillRect(body[i].x * gridSize, body[i].y * gridSize, gridSize - 2, gridSize - 2);
            
            // if at any point a segment of our snake intersects with another segment, reset our segments back to initial value.
            if(body[i].x === posX && body[i].y === posY) {
                segments = 5;
            };
        };

        body.push({x: posX, y: posY});

        // if at any point our body becomes longer than the number of segments, remove surplus segments.
        while(body.length > segments) {
            body.shift();
        };

        // logic for eating: if apple position and snake position overlap, add a segment and re-generate apple.
        if(appleX === posX && appleY === posY) {
            segments++
            appleX = Math.floor(Math.random() * tableSize);
            appleY = Math.floor(Math.random() * tableSize);
        }    

        ctx.fillStyle = "#FF0000";
        ctx.fillRect(appleX * gridSize, appleY * gridSize, gridSize - 2, gridSize - 2)

    }

    // logic for d-pad control
    const keyDown = e => {
        switch(e.keyCode) {
            case(65):
                moveX = -1;
                moveY = 0;
                break;
            case(87):
                moveX = 0;
                moveY = -1;
                break;
            case(68):
                moveX = 1;
                moveY = 0;
                break;
            case(83):
                moveX = 0;
                moveY = 1;
                break;
        }
    }

// on load, initialize our game.
    
    document.addEventListener('keydown', keyDown);
    setInterval(game, 60);
}