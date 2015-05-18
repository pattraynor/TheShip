var player: GameObject;
var i: int;

function OnTriggerEnter(object: Collider){
if(object == player.collider){
	var eCollection = GameObject.FindGameObjectsWithTag("Enemy");
	print (eCollection.Length);
	for (i = 0; i<eCollection.Length; i++){
		var AIscript:Attack= eCollection[i].GetComponent("Attack");
		if (AIscript.attacking == true)
			AIscript.attacking = false;
		}
	}
}
function OnTriggerExit(object:Collider){
if(object == player.collider){
	var eCollection = GameObject.FindGameObjectsWithTag("Enemy");
	for (i = 0; i<eCollection.Length; i++){
		var AIscript:Attack = eCollection[i].GetComponent("Attack");
		AIscript.attacking = true;
	}
}
}
