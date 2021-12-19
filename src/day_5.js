const {
  filledArray,
  filledAnyArray
} = require('./functions');

function parseInput(inputs) {
  const lineSegments = [];
 
  let x = 0;
  let y = 0;

  for (const line of inputs) {
    if(line === ''){
      continue;
    }
    const segment = line.split('->').map((coords) => {
      const row = coords
        .trim()
        .split(',')
        .map((coord) => parseInt(coord));

        x = Math.max(x, row[0] + 1);
        y = Math.max(y, row[1] + 1);        
        return row;
    });

    lineSegments.push(segment);
  }

  const grid = filledAnyArray(y, filledAnyArray(x, 0));
  
  return {
    grid,
    lineSegments
  };
}

module.exports = {
  process: (inputs) => {

    const {lineSegments, grid} = parseInput(inputs);

    for (const segment of lineSegments) {
      const [[x1, y1], [x2, y2]] = segment;
      let cursorX = x1;
      let cursorY = y1;
      if(y2 === y1 || x2 === x1){
        while(cursorX !== x2 || cursorY !== y2){
          cursorX += (x2 === x1)? 0 : x2 < x1 ? -1 : 1;
          cursorY += (y2 === y1)? 0 : y2 < y1 ? -1 : 1;
          grid[cursorY][cursorX] += 1;
        }
        grid[y1][x1] += 1;
      }
      console.log(grid.map((row) => row.join(',')).join('\n'))
    }

    const overLapPoints = grid.reduce((acc, nextValue) => {
      return acc + (nextValue.filter((rowValue) => rowValue >= 2).length - 1);
    }, 0);
    
    console.log(`Overlap >=2 ${overLapPoints}`);
    
    return {
      overLapPoints
    }
  },
  parseInput,
};
