import Magician from '../Magician';

test('test set attack of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setCell(1);
  Mag.setAttack(3);
  const result = Mag.getAttack();
  expect(result).toEqual(3);
});

test('test set stoned of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setCell(1);
  Mag.setStoned(2);
  const result = Mag.getStoned();
  expect(result).toBe(2);
});

test('test get attack of Math cell = 1 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setStoned(true);
  Mag.setCell(1);
  const result = Mag.getAttack();
  expect(result).toBe(10);
});

test('test get cell of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setCell(3);
  const result = Mag.getCell();
  expect(result).toEqual(3);
});
