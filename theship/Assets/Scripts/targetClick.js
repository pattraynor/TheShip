#pragma strict

var myParent: GameObject;
var clock: GameObject;

function OnMouseDown() {
	clock.SendMessage("ReduceTargets");
	Destroy(myParent);
}