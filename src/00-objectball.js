function gameObject() {
    const teamObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason PLumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 14,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return teamObject;
}

const game = gameObject();
const homePlayers = {...game.home.players};
const awayPlayers = {...game.away.players};
const allPlayers = {...homePlayers,...awayPlayers};
const teamValues = Object.values(game);
const playerValue = Object.values(allPlayers)

function numPointsScored(playerName) {
    return allPlayers[playerName].points;
}

function shoeSize(playerName) {
    return allPlayers[playerName].shoe;
}

function teamColors(tName) {
    return teamValues.find(team => team.teamName === tName).colors;
}

function teamNames() {
    return teamValues.map(team => team.teamName)
}

function playerNumbers(tName) {
    for(let team of teamValues) {
        if(team.teamName === tName) {
            let playerValue = Object.values(team.players);
            return playerValue.map(person => person.number)
        } 
    }
}

function playerStats(playerName) {
    return allPlayers[playerName]
}

// function bigShoeRebounds() {
//     let shoeSize = 0;
//     let playerProfile = Object.values(allPlayers);
//     for(let i=0 ; i <playerProfile.length ; i++) {
//         if(playerProfile[i].shoe > shoeSize) {
//             shoeSize = playerProfile[i].shoe
//         }
//     }
//     let rebound = playerProfile.find(size => size.shoe === shoeSize)
//     return rebound.rebounds;
// }

function bigShoeRebounds() {
   let bigShoe = playerValue.sort((a,b)=> {
       return b.shoe - a.shoe
    })
    //console.log(bigShoe);
    return bigShoe[0].rebounds; 
}

function mostPointsScored () {
    let mostScored = Object.entries(allPlayers).sort((a,b)=> b[1].points - a[1].points)
    //console.log(mostScored)
    return mostScored[0];
}


function winningTeam () {
    let homeValue = Object.values(homePlayers);
    let awayValue = Object.values(awayPlayers);
    //console.log(homeValue)
    let homeScore = homeValue.reduce((acc, ele) => acc + ele.points,0)
    //console.log(homeScore)
    let awayScore = awayValue.reduce((acc,ele) => acc + ele.points,0)
    //console.log(awayScore)
    if(homeScore>awayScore) {
        return game.home.teamName;
    } else if(homeScore<awayScore) {
        return game.away.teamName;
    }
}

function playerWithLongestName () {
    let mostLength = Object.entries(allPlayers).sort((a,b)=> b[0].length - a[0].length)
    return mostLength[0];
}

function doesLongNameStealATon () {
    let longestName = playerWithLongestName();
    let mostSteal = Object.entries(allPlayers).sort((a,b) => b[1].steals - a[1].steals)
    //console.log(mostSteal)
    return longestName === mostSteal;
}





