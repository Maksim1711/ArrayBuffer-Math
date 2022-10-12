import Character from '../Magician';

test('create Character ok', () => {
  const character = new Character('Rick', 'Magician');
  const result = {
    name: 'Rick',
    type: 'Magician',
    health: 100,
    level: 1,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
