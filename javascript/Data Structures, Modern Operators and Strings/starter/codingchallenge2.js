const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

let scored = Object.entries(game.scored);
console.log(scored);

for (let [score, player] of scored) {
  score = Number(score);

  console.log(`Goal ${score + 1}:  ${player}`);
}
let odds = Object.entries(game.odds);
console.log(odds);

let average = 0;
for (let [team, value] of odds) {
  console.log(value);
  // value += value;
  average += value / 3;
  console.log(`Avergae odd is ${average}`);
}
const teamOdds = Object.entries(game.odds);
for (const [team, value] of teamOdds) {
  console.log(`Odd of victory ${game[team] ?? 'draw'}: ${value}`);
}
