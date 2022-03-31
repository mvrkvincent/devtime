// no ties
// matches = [team1, team2]
// results = 1 team 1 won, 2, team two won
// O(n) time

const devtimeCup = (matches, outcome) => {
    // iterate over array, store countries as key, val as score

    let score = {};
    let highScore = 0;
    // let result = '';

    for (let i = 0; i < matches.length; i++) { // match: ['germany', 'spain']  outcome: 2
        let match = matches[i];
        let winnerIdx = outcome[i] - 1;
        score[match[winnerIdx]] ? score[match[winnerIdx]] += 1 : score[match[winnerIdx]] = 1;
    };

    console.log(score)
    
    // for (let k in score) {
    //     if (score[k] > highScore) {
    //         highScore = score[k];
    //         result = k
    //     }
    // }

    return Object.keys(score).reduce((a,b) => score[a] > score[b] ? a : b)
   
    // return result;
};

const matches = [['germany', 'spain'], ['spain', 'england'], ['england', 'germany']]
const outcome = [2, 2, 1] 

console.log(devtimeCup(matches, outcome)) // england

// first = [0,2,7,5,2,3,1,3,3,9]
// second = [1,8,7,3,1,3,4,2,3,1]
// t/f is this photo possible?
// first.length === second.length

const cupPhoto = (first, second) => { // [1,1 3] [1, 5, 9]
    // sort arrays
    first.sort((a,b) => b-a);
    second.sort((a,b) => b-a);

    let front, back;

    if (first[0] > second[0]) {
        back = first
        front = second
    } else {
        back = second
        front = first
    }

    for (i in back) {
        if (front[i] >= back[i]) return false;
    }

    return true
}

let first = [1,9]
let second = [5,3]

console.log(cupPhoto(first, second))