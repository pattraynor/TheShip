private var targetObj: GameObject; 
private var searchDis :float = 5;  // if the target is close to the enemy less than the search distance.
function Start()
{    
	targetObj = GameObject.Find("Player"); //be sure to correctly set this to match the name of the player object ON QUIZ!!!!!1111!!!
}
	function Update () 
	{
		var distance = Vector3.Distance(targetObj.transform.position, transform.position);
	    if (distance < searchDis) 
	    {       
		     var direction = Vector3.Normalize(targetObj.transform.position - transform.position);
		     transform.position += direction * Time.deltaTime;        
		     var rotation = Quaternion.LookRotation(direction);        
		     transform.rotation = rotation;    
	     }
}
