#pragma strict
var controlCenter : GameObject;
private var mouseOverColor : Color;

function Update () {
	var pos = Input.mousePosition;
	guiTexture.pixelInset.x = pos.x;
	guiTexture.pixelInset.y = pos.y- 32; 
}

function Start(){
	guiTexture.enabled=false;
	mouseOverColor= controlCenter.GetComponent(GameManager).mouseOverColor;
}

function CursorColorChange (colorize: boolean) {
	if (colorize) guiTexture.color = mouseOverColor;
	else guiTexture.color = Color.white;
}
