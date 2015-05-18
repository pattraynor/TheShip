#pragma strict

var objectClickedOn : GameObject;
var objectDissappear1: GameObject;
var objectDissappear2 : GameObject;
function OnMouseDown () 
{
yield WaitForSeconds (3);

	if(objectDissappear1.renderer.enabled == false)
	{
	objectDissappear1.renderer.enabled = true;
	objectDissappear2.renderer.enabled = true;
	}
	else
	{
	yield WaitForSeconds (1);
	objectDissappear1.renderer.enabled = false;
	objectDissappear2.renderer.enabled = false;
	}
}
