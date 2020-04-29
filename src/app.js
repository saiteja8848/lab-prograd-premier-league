//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var data = [];
  data[0] = arguments[0];
  data[1] = arguments[1];
  data[2] = arguments[2];
  data[3] = arguments[3];
  return data;
}



// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}


//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length == 0)
    return null;
  else
    var obj = {
      "defender": formation[0],
      "midfield": formation[1],
      "forward": formation[2]
    }
  return obj;
}


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  var data = players.filter(player => player.debut == year);
  return data;
}


//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  var data = players.filter(player => player.position == position);
  return data;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName) {
  //var data = players.filter(player => player.awards.every(award => award.name == awardName));
  var data = [], count = 0;
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        data.push(players[i]);
        break;
      }
    }
  }
  return data;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  var count = 0;
  var data = [];
  var k = 0;
  for (let i = 0; i < players.length; i++) {
    count = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) { data[k] = players[i]; k++; }

  }
  return data;
}



//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var data = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return data;
}


//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  var data = players.slice();
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i].age < data[j].age) {
        var temp = data[i].age;
        data[i].age = data[j].age;
        data[j].age = temp;
      }
    }
  }

  return data;
}


//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function FilterByTeamxSortByNoOfAwards(team) {
  var teamData = players.filter(player => player.team == team);
  for (let i = 0; i < teamData.length; i++) {
    for (let j = i + 1; j < teamData.length; j++) {
      if (teamData[i].awards.length < teamData[j].awards.length) {
        var temp = teamData[i];
        teamData[i] = teamData[j];
        teamData[j] = temp;
      }
    }
  }
  return teamData;
}



//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a, b) {
  let value = 0;
  if (a.name > b.name) {
    value = 1;
  }
  else if (a.name < b.name) { value = -1; }
  else { value = 0; }
}
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var dataOne = filterByAwardxTimes(awardName, noOfTimes);
  var dataTwo = dataOne.filter(player => player.country == country);
  return dataTwo.sort(compare);
}


//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var data = players.filter(player => player.age > age);
  return data;
}

