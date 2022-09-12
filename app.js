const redSoccerPlayer = {
    firstName: "Daniel",
    lastName: "Acosta",
    playerNumber: 30,
    goals: 5,
    fullName: function() {
      return this.firstName + " " + this.lastName + "<br> " 
      + "PLAYER NUMBER: " + " " + this.playerNumber;

    }

  };

  const blueSoccerPlayer = {
    firstName: "Valerie",
    lastName: "Smith",
    playerNumber: 21,
    goals: 4,
    fullName: function() {
      return this.firstName + " " + this.lastName + "<br> " 
      + "PLAYER NUMBER: " + " " + this.playerNumber;

    }

  };

  let x = blueSoccerPlayer.goals;

  document.getElementById("demo4").innerHTML = x;
  
  document.getElementById("demo").innerHTML = monday(4,x);
document.getElementById("demo2").innerHTML = redSoccerPlayer.fullName();
document.getElementById("demo3").innerHTML = blueSoccerPlayer.fullName();






function monday(work, play) {


let ActiveHours = work * play;
//console.log(ActiveHours)

return ActiveHours;

}


function tuesday() {


}


function wedensday() {



}

function thursday() {



}


function friday() {



}


