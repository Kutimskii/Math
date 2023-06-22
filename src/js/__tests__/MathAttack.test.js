import Magician from '../Magician';

test('test set attack of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setAttack(3);
  const result = Mag.getAttack(1);
  expect(result).toBe(3);
});

test('test set stoned of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setStoned(2);
  const result = Mag.getStoned();
  expect(result).toBe(2);
});

test('test get attack of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setStoned(true);
  const result = Mag.getAttack(1);
  expect(result).toBe(10);
});
