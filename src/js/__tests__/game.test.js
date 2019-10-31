import { healthPoint, unit } from '../game';

let expected = 0;

test('should introduce correct healthpoint', () => {
  const received = healthPoint();
  if (unit.health > 50) {
    expected = 'healthy';
  } else if (unit.health < 15) {
    expected = 'critical';
  } else {
    expected = 'wounded';
  }

  expect(received).toBe(expected);
});
