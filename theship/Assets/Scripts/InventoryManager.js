var iMode : boolean  = false;
function Update () {
	if (Input.GetKeyDown("i")){
		if (iMode == false) {iMode = true;}
		else { iMode = false;}
	}
	if(iMode == true) {camera.enabled = true;}
	else {camera.enabled = false;}
}
