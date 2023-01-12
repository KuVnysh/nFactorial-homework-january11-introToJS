const team = 'LA Lakers';
let player1 = {
        name: 'LeBron James',
        age: 37,
        position: 'small Forward',
        isPlayer: true
    }
let player2 = {
        name: 'Russell Westbrook',
        age: 34,
        position: 'point Guard',
        isPlayer: true
    }
let player3 = {
        name: 'Anthony Davis',
        age: 29,
        position: 'center',
        isPlayer: true
    }
let player4 = {
        name: 'Kobe Bryant',
        age: 41,
        position: 'shooting guard',
        isPlayer: false
    }
let player5 = {
        name: 'Shaquille O-Neal',
        age: 50,
        position: "center",
        isPlayer: false
    }
player1['championships'] = 4;
delete player4.isPlayer;
player5.position = 'business'
console.log(player4.isPlayer)

let vehicle = {}
vehicle.brandName = 'at'
vehicle.model = 'arabic'
vehicle.model = 'sogym'
delete vehicle.model
console.log(vehicle)

let salaries_billions = {
    player1: 44,
    player2: 47,
    player3: 37,
}
var result = 0;
for (let key in salaries_billions) {
        result += salaries_billions[key];
    }
console.log('LA Lakers salaries ', result)