private var targetObj: GameObject; //this will point to the player
var attacking: boolean = false;
function Awake() 
{      
targetObj = GameObject.Find("Player");
}
function Update () 
{
   
        if (attacking == true) 
        { 
        //attacking state will be changed by the triggerzone script
            var distance = Vector3.Distance(targetObj.transform.position, transform.position);
            var direction = Vector3.Normalize(targetObj.transform.position - transform.position);        
            transform.position += direction * Time.deltaTime;
            var rotation = Quaternion.LookRotation(direction);        
            transform.rotation = rotation;
         }
}