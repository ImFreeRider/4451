#pragma strict
var WhatButton: int = 1;
var object: Transform;
var SoundError: GameObject;
var SoundRight: GameObject;
var Sparks: GameObject;

function Start () {
	if ( WhatButton == 1){
		object = GameObject.Find("RedNoteButton").transform;
	}
	if ( WhatButton == 2){
		object = GameObject.Find("YellowNoteButton").transform;
	}
	if ( WhatButton == 3){
		object = GameObject.Find("BlueNoteButton").transform;
	}
	if ( WhatButton == 4){
		object = GameObject.Find("GreenNoteButton").transform;
	}
}

function Update () {
	if (Input.GetButtonDown ("1")) {
		if ( WhatButton == 1 ) {
			if (transform.position.y <= object.position.y)
			{
				Instantiate(SoundRight, transform.position + Vector3(-1.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(-0.8, 0, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}
		}
	}
	if (Input.GetButtonDown ("2")) {
		if ( WhatButton == 2 ) {
			if (transform.position.y <= object.position.y)
			{
				Instantiate(SoundRight, transform.position + Vector3(-0.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(-0.5, 0, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}		
		}
	}
	if (Input.GetButtonDown ("3")) {
		if ( WhatButton == 3 ) {
			if (transform.position.y <= object.position.y)
			{
				Instantiate(SoundRight, transform.position + Vector3(0.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(0.5, 0, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}		
		}
	}
	if (Input.GetButtonDown ("4")) {
		if ( WhatButton == 4 ) {
			if (transform.position.y <= object.position.y)
			{
				Instantiate(SoundRight, transform.position + Vector3(1.5, 4, 0), Quaternion.Euler(0,0,0) );
				Instantiate(Sparks, transform.position + Vector3(0.8, -0.5, -2), Quaternion.Euler(0,0,0) );
				MainCode.score += 100;
				Destroy(gameObject);
			}		
		}
	}
}