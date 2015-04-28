#pragma strict

function Start () {
GetComponent.<AudioSource>().Play();
sound();
}

function sound () {
	yield WaitForSeconds (GetComponent.<AudioSource>().clip.length);
	if (MainCode.score>=MainCode.Song1highscore){
		MainCode.Song1highscore=MainCode.score;
	}
	return;
}