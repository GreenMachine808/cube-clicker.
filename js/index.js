var Uscore = 0;

var highscore = 25;

var press = function() {
	Uscore++; 
	document.getElementById('score').innerHTML = "This is " + Uscore + " Cube"

	if (Uscore > highscore) {
		document.getElementById('hiscore').innerHTML = "New Cube highscore " + Uscore;
		return;
	}
}