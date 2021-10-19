// numbers, operations, defaultState
const nums = [1,2,3,4,5,6,7,8,9,'.',0, 'c', 'ENTER'];
const ops = ['add', 'sub', 'mult', 'div'];

const defaultState = {
    currentInput: '',
    total: 0,
    currentOp: null,
}

const generateMath = () => {
    // declare state
    let state = {...defaultState};

    // draw calculator
    const math = document.createElement('div');
    math.id = 'math';
    math.style.border = `5px solid ${appList[0].color}`

    // draw "lcd" display
    const lcd = document.createElement('span');
    lcd.id = 'lcd';
    lcd.innerHTML = state.total;

    math.append(lcd);

    // draw keypad display

    const numbers = document.createElement('div');
    numbers.id = 'numbers';

    // handle number inputs

    const handleNumInput = numInput => {
        if (numInput === '.') return;


        if (numInput === 'c') {
            state = {...defaultState};
           return lcd.innerHTML = 0;
        }

        state.currentInput += numInput;
        console.log(state);
        lcd.innerHTML = state.currentInput;
    };

    // handle calculations
    const calculate = () => {
        let currentValue = parseFloat(state.currentInput);
        switch(state.currentOp) {
            case('add'):
                state.total += currentValue;
                break;
            case('sub'):
                state.total -= currentValue;
                break;
            case('mult'):
                state.total *= currentValue;
                break;
            case('div'):
                state.total /= currentValue;
                break;
        }

        state.currentInput = '';
        lcd.innerHTML = state.total;
    }

    // handle operation input
        // handle color change
        // if opperation selected => calculate()
        // else set the total to the current input, reset current input, set operation === input
    const handeOpInput = opInput => {
        if (state.currentOp) {
            calculate()
            state.currentOp = opInput;
        } else {
            state.total = parseFloat(state.currentInput);
            state.currentInput = '';
            state.currentOp = opInput;
        }
        console.log(state)
    }

    // draw numbers buttons

    nums.forEach(num => {
        let button = document.createElement('button');
        button.innerHTML = num;
        if (num === 'c') button.style.color = appList[0].color;
        button.onclick = () => handleNumInput(num);
        numbers.append(button);
    })

    // draw ops button

    ops.forEach(op => {
        let button = document.createElement('button');
        button.innerHTML = op;
        button.onclick = () => handeOpInput(op);
        options.append(button);
    })

    math.append(numbers);

    display.append(math);
        

}