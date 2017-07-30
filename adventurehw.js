// want all the prompt in one box but to target each switch and the right case and right dfault
var ventureType = prompt("You wanna go on ventures?");
switch(ventureType) {
	  case "yes":
  		var yesVenture = prompt("Where do you wanna go? Downtown Fresno, School, Hiking, Roadtrip ?");
    	switch(yesVenture){
          case "Downtown Fresno":
//you can have ventures downtown wit diff events n times going on
            var downTownFresno = prompt("Downtown Fresno A,  Downtown Fresno B,  Downtown Fresno C");
            switch(downTownFresno) {
              case "Downtown Fresno A":
                alert("You've Ventured to SMLK Blvd and Belgravia Ave at 1:45am");
                break;
              case "Downtown Fresno B":
                alert("Your Venture Begins at 761 Hammond Ave march 12, 2004 Marcus Wessons Home");
                break;
              case "Downtown Fresno C":
                alert("Ventures in Tower District at 10pm on Olive and Echo st");
                break;
              default:
                alert("! Venture Going");
            }
          break;
//skool ventures can choose from 3 different skools and events going on
        case "School":
            var schoolVentures = prompt("School A,  School B,  School C");
            switch (schoolVentures) {
              case "School A":
                alert("You've Ventured to Blath School Massacare in Bath Township, Michigan May 18, 1927");
                break;
              case "School B":
                alert("You've Ventured to Columbine! in Columbine, Colorado April 20, 1999");
                break;
              case "School C":
                alert("Bitwise South Stadium GeekWise Academy, Fresno Ca");
                break;
              default:
                alert("! Venture Going");
          }
         break;
        case "Hiking":
//hiking ventures can choose from 3 diiferent ventures
         	var hikingVentures = prompt("Hiking A , Hiking B , Hiking C");
            switch (hikingVentures) {
              case "Hiking A":
                alert("You hiked Off a Cliff");
                break;
              case "Hiking B":
                alert("Mt Whitney Hiked 22miles in the Kingscanyon National Park");
                break;
              case "Hiking C":
                alert("Mirror Lake Trail 2miles in Yosemite National Park");
                break;
              default:
                alert("! Venture Going");
            }
        case "Roadtrip":
            var roadTrip = prompt("Roadtrip A , Roadtrip B , Roadtrip C");
            switch (roadTrip) {
              case "Roadtrip A":
                alert("You're on a venture roadtrip with The Donner Party in 1846");
                break;
              case "Roadtrip B":
                alert("Venture roadtrip to Parlier Cat House on the Kings");
                break;
              case "Roadtrip C":
                alert("Venture roadtip with the Hell's Angles in 1962");
                break;
              default:
                alert("! Venture Going");
                break;
            }
        }
         break;
      default:
         alert("! Venture Going");
}
