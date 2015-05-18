var customSkin: GUISkin;
function OnGUI () {
	var buttonW:int = 100;
	var buttonH:int = 50;
	var  halfScreenW:float = Screen.width/2;
	var  halfButtonW: float = buttonW/2;
	var myRect = new Rect(halfScreenW+150, 400, buttonW, buttonH);
	var isButtonCreated : boolean = GUI.Button(myRect, "Main Menu");
	if (isButtonCreated) {
		GUI.skin = customSkin;
		Application.LoadLevel("title");
	}

} 	
