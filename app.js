const redSoccerPlayer = {
    firstName: "Daniel",
    lastName: "Acosta",
    playerNumber: 30,
    goals: 5,
    fullName: function() {
      return this.firstName + " " + this.lastName 
    }

  };

  const blueSoccerPlayer = {
    firstName: "Valerie",
    lastName: "Smith",
    playerNumber: 21,
    goals: 4,
    fullName: function() {
      return this.firstName + " " + this.lastName 

    }

  };
  

  let x = blueSoccerPlayer.goals;
  let y = redSoccerPlayer.goals;


//  document.getElementById("goals").innerHTML = x;
  
  document.getElementById("totalGoals").innerHTML = soccerPractice(x,y);
document.getElementById("redPlayer").innerHTML = redSoccerPlayer.fullName();
document.getElementById("bluePlayer").innerHTML = blueSoccerPlayer.fullName();

document.getElementById("capName").innerHTML = capString("dan");
  

function soccerPractice(work, play) {


let ActiveHours = work * play;

return ActiveHours;

}





function capString(name) {


  return name.toUpperCase();
}


function WhichButton(event) {
  

    alert("Player Number: " +  blueSoccerPlayer.playerNumber);
    
    
    alert("Player Goals: " +  blueSoccerPlayer.goals);
    
  }

  function WhichButton2(event) {
  

    alert("Player Number: " +  redSoccerPlayer.playerNumber);
    
    
    alert("Player Goals: " +  redSoccerPlayer.goals);
    
  }


