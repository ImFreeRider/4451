#pragma strict
var text: GUIText;
function OnGUI (){
	GetComponent.<GUIText>().text="Score:"+MainCode.score;
}