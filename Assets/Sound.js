#pragma strict

function Start () {
	GetComponent.<AudioSource>().Play();
	Sound();
}

function Sound () {
	yield WaitForSeconds(GetComponent.<AudioSource>().clip.length);
	Destroy(gameObject);

}