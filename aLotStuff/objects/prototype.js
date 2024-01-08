function SportsMan(name, age, country, height, weight){
    name, 
    age,
    country,
    height,
    weight
}

function SoccerPlayer(name, age, country, height, weight, team, position){
    SportsMan.call(this, name, age, country, height, weight)
    this.team = team;
    this.position = position;
}

Object.setPrototypeOf(SoccerPlayer.prototype, SportsMan.prototype);

let messi = new SoccerPlayer("Messi", 34, "Argentina", 1.7, 72, "Barcelona", "Forward");
console.log(messi.objct);
