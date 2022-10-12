import Character from '../Daemon';

test('create Character ok', () => {
  const character = new Character('Rick', 'Daemon');
  const result = {
    name: 'Rick',
    type: 'Daemon',
    health: 100,
    level: 1,
    defence: 40,
  };
  expect(character).toMatchObject(result);
});
