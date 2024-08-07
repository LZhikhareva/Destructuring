import { special, getInfo } from '../app';

test('check if getInfo works correct', () => {
  expect(getInfo(special)).toEqual([[8, "Двойной выстрел", "http://...", "Двойной выстрел наносит двойной урон"], [9, "Нокаутирующий удар", "http://...", "Описание недоступно"]]);
});