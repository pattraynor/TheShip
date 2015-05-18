#pragma strict

var gamePointer: GameObject;

function OnMouseEnter (){
	gamePointer.SendMessage ("CursorColorChange", true);
}

function OnMouseExit(){
	gamePointer.SendMessage ("CursorColorChange", false);
}
