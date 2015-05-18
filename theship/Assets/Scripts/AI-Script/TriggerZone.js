private var player: GameObject;
var enemy: GameObject; //works with a single enemy object

function Awake () {
    player = GameObject.Find("Player");
}
function OnTriggerEnter (object: Collider){
   if (object == player.collider)
   {
   		   //var TurnOffMovement: movementEnemy = enemy.GetComponent(movementEnemy);
   		//   enemy.GetComponent(movementEnemy).enabled = false;
           var Attack: enemyTrigger = enemy.GetComponent(enemyTrigger);
           Attack.attacking = true;
           //TurnOffMovement.enabled = false;
  
           
   }
}
