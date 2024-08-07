export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
        }
    ]
}

export const { special } = character;

export const getInfo = function (arr) {
    const players = [];
    for (let item of arr) {
        const playerInfo = [];
        const { id, name, icon, description = 'Описание недоступно' } = item;
        playerInfo.push(id, name, icon, description);
        players.push(playerInfo)
    }
    return players;
}
