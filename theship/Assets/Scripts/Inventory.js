var objectIs3D: boolean = false;
var associatedIcon: GUITexture;
var associatedObj: GameObject;

function OnMouseDown(){
	if(objectIs3D) {
		renderer.enabled = false;
		associatedIcon.guiTexture.enabled = true;
	}
	else {
		guiTexture.enabled = false;
		associatedObj.renderer.enabled = true;
	}
}
