var targetObj: GameObject;
var enemyPrefab: GameObject;
private var num :int = 0;
private var interval: int =0;
function Update ()
{    
	interval += 1;
    if (num < 10 && interval%60 == 0) 
    generateEnemy();   
}
    function generateEnemy()
    {       
     num += 1;
     var xpos = targetObj.transform.position.x + Random.Range(5, 10);
     var zpos = targetObj.transform.position.z + Random.Range(5, 10);
     Instantiate (enemyPrefab, Vector3(xpos, 10, zpos), Quaternion.identity);
    }
