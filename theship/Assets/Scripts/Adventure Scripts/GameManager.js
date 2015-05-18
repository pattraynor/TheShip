#pragma strict
var navigating: boolean; 
private var gamePointer: GameObject;
var mouseOverColor = Color.green;
var mouseOverMaterial :Material;

var useMOCursorChange:boolean = true;
var useMOMaterialChange:boolean = false;

function Awake () {
	Screen.SetResolution(1024, 768, false);
}
function Start() {
	Screen.showCursor = false;
	gamePointer = GameObject.Find("GamePointer");
}

function Update () {
	if (Input.GetButton ("ML Enable") || Input.GetButton("Horizontal") ||
		Input.GetButton ("Vertical") || Input.GetButton("Turn")){
		navigating = true;
		gamePointer.guiTexture.enabled = false;
	}
	else{
		navigating = false;
		gamePointer.guiTexture.enabled = true;
	}
}
