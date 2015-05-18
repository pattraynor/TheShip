var customSkin: GUISkin;
function OnGUI () {
	var buttonW:int = 100;
	var buttonH:int = 50;
	var  halfScreenW:float = Screen.width/2;
	var  halfButtonW: float = buttonW/2;
	var myRect = new Rect(halfScreenW-150, 380, buttonW, buttonH);
	var isButtonCreated : boolean = GUI.Button(myRect, "Play Game");
	if (isButtonCreated) {
		GUI.skin = customSkin;
		Application.LoadLevel("theShipMain");
	}
	
	var myRect2 = new Rect(halfScreenW+50, 380, buttonW, buttonH);
	var isButtonCreated2 : boolean = GUI.Button(myRect2, "Show Info");
	if (isButtonCreated2) {
		GUI.skin = customSkin;
		Application.LoadLevel("info");
	}
} 	
