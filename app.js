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
  let y = redSoccerPlayer.goals;


  document.getElementById("goals").innerHTML = x;
  
  document.getElementById("totalGoals").innerHTML = monday(4,x);
document.getElementById("redPlayer").innerHTML = redSoccerPlayer.fullName();
document.getElementById("bluePlayer").innerHTML = blueSoccerPlayer.fullName();


//const WhichButton = document.getElementById("WhichButton");



function monday(work, play) {


let ActiveHours = work * play;
//console.log(ActiveHours)

return ActiveHours;

}





function friday() {



}


function WhichButton(event) {
  

    alert("Player Number: " +  blueSoccerPlayer.playerNumber);
    
    
    alert("Player Goals: " +  blueSoccerPlayer.goals);
    
  }


