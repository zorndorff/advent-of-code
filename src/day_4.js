const { filledArray, sumArrayMembers, sumArrayColumns } = require('./functions');

const scoreBoard = (board, boardSize) => {
  const bingoRow = board[1].indexOf(boardSize.x);
  const scoreLine = board[0].splice(bingoRow, 1)[0];

  return sumArrayMembers(scoreLine);
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
          board, board.map(() => filledArray(board.length, 0)), possibleScore
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
  const hasWinner = false;
  let winner = {};
  for (let [board, scores, possibleScore] of bingoState.boards) {
    i = 0;
    for (const row of board) {
      if(row.includes(drawNumber)){
        scores[i][row.indexOf(drawNumber)] = 1;
        possibleScore = possibleScore - drawNumber;
        console.log(`registered hit on board[${boardIndex}], row [${i}] column [${row.indexOf(drawNumber)}], possible score is now ${possibleScore}`);

        const columnHitCounts = sumArrayColumns(scores);
        const rowHitCounts = scores.map((scoreRow) => sumArrayMembers(scoreRow));

        if(columnHitCounts.includes(bingoState.dimensions.y) || rowHitCounts.includes(bingoState.dimensions.x)){
          console.log(`Bingo on board ${boardIndex}, total score ${possibleScore} on draw ${drawNumber}, answer ${possibleScore * drawNumber}`);          
          
          return {
            board: boardIndex,
            possibleScore, 
            drawNumber,  
          }
        }
      }
      i++;
    }

    if (false){ 
      
      const score = scoreBoard(bingoState.boards[boardIndex], bingoState.dimensions);

      console.log(`Bingo on board ${boardIndex}, total score ${score} on draw ${drawNumber}, answer ${score * drawNumber}`);
      process.exit();
    }
    boardIndex ++;
  }
  return 
}

module.exports = {
  process: (inputs) => {
    const bingoBoards = setupBingoState(inputs);
    
    for (const drawNumber of bingoBoards.draws) {
      debugger;
      draw(bingoBoards, drawNumber);
    }
  },
  setupBingoState,
};
