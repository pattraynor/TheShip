var objectDissappear1: GameObject;
var objectDissappear2 : GameObject;
var objectDestroy : GameObject;
function OnTriggerEnter (object : Collider){

 if(object.tag == "player")
 {
     
    if(objectDissappear1.renderer.enabled != true)
    {
	objectDissappear1.renderer.enabled = true;
	objectDissappear2.renderer.enabled = true;
	Destroy(objectDestroy);
	}
	

     
 
 }
 
}