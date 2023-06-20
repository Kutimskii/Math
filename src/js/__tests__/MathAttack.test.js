import Magician from '../Magician';

test('test set attack of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setAttack(3);
  const result = Mag.getAttack();
  expect(result).toBe(8);
});

test('test set stoned of Math cell = 3 ', () => {
  const Mag = new Magician('Коля', 'Magician', 100, 1);
  Mag.setStoned(2);
  const result = Mag.getStoned();
  expect(result).toBe(5);
});
