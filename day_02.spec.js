const { applyMovement, applyMovementAim } = require('./src');

describe('applyMovement', () => {
  it('forward command increases x axis.', () => {
    const coords = {
      x: 0, 
      depth: 0
    };

    const output = applyMovement(coords, 'forward', 5);

    expect(output.x).toBe(5);
  });

  it('up command decreases depth.', () => {
    const coords = {
      x: 0, 
      depth: 0
    };

    const output = applyMovement(coords, 'up', 5);

    expect(output.depth).toBe(-5);
  });

  it('down command increases depth.', () => {
    const coords = {
      x: 0, 
      depth: 0
    };

    expect(applyMovement(coords, 'up', 5)).toStrictEqual({x: 0, depth: -5});
  });
});

describe('applyMovementAim', () => {
  it('down X increases your aim by X units.', () => {
    const coords = {
      x: 0, 
      depth: 0,
      aim: 0,
    };
    const output = applyMovementAim(coords, 'down', 5);

    expect(output.aim).toBe(5);
  });

  it('up X decreases your aim by X units.', () => {
    const coords = {
      x: 0, 
      depth: 5,
      aim: 0,
    };
    const output = applyMovementAim(coords, 'up', 5);

    expect(output.aim).toBe(0);
  });

  it('forward X increases your horizontal position by X units', () => {
    const coords = {
      x: 0, 
      depth: 0,
      aim: 0,
    };
    const output = applyMovementAim(coords, 'forward', 5);

    expect(output.x).toBe(5);
  });

  it('forward X increases your depth by your aim multiplied by X.', () => {
    const coords = {
      x: 0, 
      depth: 0,
      aim: 5,
    };

    const output = applyMovementAim(coords, 'forward', 5);

    expect(output.depth).toBe(25);
  });
});