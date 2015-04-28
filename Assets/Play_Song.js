#pragma strict
var Redobject : GameObject;
var Blueobject : GameObject;
var Greenobject : GameObject;
var Yellowobject : GameObject;
var Whatpart: int = 0;
var Music: AudioClip;

function Start () {
if (Whatpart<=1){
	SongStart();
	//GetComponent.<AudioSource>().PlayOneShot(Music,0.7);
	//Debug.Log("Song Function Start");
	return;
	}
}
function SongStart() {
	yield WaitForSeconds(0.5);
	Instantiate(Redobject, transform.position + Vector3(-1.5, 4, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.5);
	Debug.Log("Note Drop");
	Instantiate(Yellowobject, transform.position + Vector3(-0.5, 4, 0), Quaternion.Euler(0,0,0) );
	yield WaitForSeconds(0.5);
	Debug.Log("Note Drop");
	Instantiate(Blueobject, transform.position + Vector3(0.5, 4, 0), Quaternion.Euler(0,0,0) );
	//yield WaitForSeconds(0.5);
	Instantiate(Greenobject, transform.position + Vector3(1.5, 4, 0), Quaternion.Euler(0,0,0) );
	//yield WaitForSeconds(0.5);
	Whatpart+=1;
	Debug.Log("SongStartEnd");
	return;
}
