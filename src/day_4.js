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
        
        console.log(`registered hit on board[${boardIndex}], row [${i}] column [${row.indexOf(drawNumber)}], possible score is now ${possibleScore}`);

        const columnHitCounts = sumArrayColumns(scores);
        debugger;
        console.log(`column counts ${JSON.stringify(columnHitCounts)}`);

        const rowHitCounts = scores.map((scoreRow) => sumArrayMembers(scoreRow));

        if(columnHitCounts.includes(bingoState.dimensions.y)){

          console.log(`Column Bingo on board ${boardIndex}, total score ${possibleScore} on draw ${drawNumber}, answer ${possibleScore * drawNumber}`);          
          //scores.forEach((line) => console.log(line.join(',')));
          bingoState.boards[boardIndex][3] = true;
          return {
            board: boardIndex,
            possibleScore,
          }
        }

        if(rowHitCounts.includes(bingoState.dimensions.x)){
          console.log(`Row Bingo on board ${boardIndex}, total score ${possibleScore} on draw ${drawNumber}, answer ${possibleScore * drawNumber}`);          
          //scores.forEach((line) => console.log(line.join(',')));
          bingoState.boards[boardIndex][3] = true;
          return {
            board: boardIndex,
            possibleScore,
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
  return false;
}

module.exports = {
  process: (inputs) => {
    const bingoBoards = setupBingoState(inputs);
    const results = [];
    for (const drawNumber of bingoBoards.draws) {
      const result = draw(bingoBoards, drawNumber);
      if (result !== false){
        results.push({
          score: result.possibleScore * drawNumber,
          possibleScore: result.possibleScore,
          drawNumber,
        });
      }
    }
    return results;
  },
  setupBingoState,
};
