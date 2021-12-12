const { filledArray, sumArrayMembers, sumArrayColumns } = require('./functions');

const scoreBoard = (boardValues, scoreState) => {

  let score = 0;

  const flatValues = boardValues.reduce((acc, row) => {
    return acc.concat(row);
  }, []);

  const flatScores = scoreState.reduce((acc, row) => {
    return acc.concat(row);
  }, []);

  for (let index = 0; index < flatValues.length; index++) {
    if(flatScores.at(index) !== 1){
      score += flatValues[index];
    }
  }
  return score;
}

const setupBingoState = (inputs) => {
  const bingoState = {
    draws: [],
    boards: [],
    dimensions: {},
    scores: []
  };

  bingoState.draws = inputs
    .shift()
    .split(',')
    .map((draw) => parseInt(draw));

  let board = [];
  let possibleScore = 0;

  for (const inputLine of inputs) {
    if (inputLine === '') {
      if (board.length > 0){
        bingoState.boards.push([
          board, board.map(() => filledArray(board.length, 0)), possibleScore, false
        ]);
      }

      board = [];
      possibleScore = 0;
    } else {
      const newRow = inputLine.split(' ').filter((line) => line !== '').map((line) => parseInt(line));
      possibleScore += sumArrayMembers(newRow);
      board.push(newRow);
    }
  }

  bingoState.dimensions.x = bingoState.boards[0][0].length;
  bingoState.dimensions.y = bingoState.boards[0][1].length;

  return bingoState;
};

function draw(bingoState , drawNumber) {
  let i = 0;
  let boardIndex = 0;
  const results = [];

  for (const [board, scores] of bingoState.boards) {
    
    i = 0;
    if(bingoState.boards[boardIndex][3] === true){
      boardIndex ++;
      continue;
    }
    for (const row of board) {
      if(row.includes(drawNumber)){
        
        scores[i][row.indexOf(drawNumber)] = 1;
        
        let possibleScore = bingoState.boards[boardIndex][2];

        possibleScore = bingoState.boards[boardIndex][2] = possibleScore - drawNumber;
        
        const columnHitCounts = sumArrayColumns(scores);

        const rowHitCounts = scores.map((scoreRow) => sumArrayMembers(scoreRow));

        if(columnHitCounts.includes(bingoState.dimensions.y) || rowHitCounts.includes(bingoState.dimensions.x)){

          console.log(`Bingo on board ${boardIndex}, total score ${possibleScore} on draw ${drawNumber}, answer ${possibleScore * drawNumber}`);          
          //scores.forEach((line) => console.log(line.join(',')));
          bingoState.boards[boardIndex][3] = true;
          const score = scoreBoard(board, scores);

          results.push({
            board: boardIndex,
            draw: drawNumber,
            score,
            total: score * drawNumber,
          });
        }
      }
      i++;
    }

    boardIndex ++;
  }

  return results;
}

module.exports = {
  process: (inputs) => {
    const bingoBoards = setupBingoState(inputs);
    let results = [];
    for (const drawNumber of bingoBoards.draws) {
      const result = draw(bingoBoards, drawNumber);
      if(result.length > 0) {
        debugger;
        results = results.concat(result);
        console.log(`Bingo on board ${result.board} for draw ${drawNumber} with score:${result.score} and total ${result.total}`);
      }
    }

    return results;
  },
  setupBingoState,
};
