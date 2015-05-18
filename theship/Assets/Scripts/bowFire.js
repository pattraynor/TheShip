var bowSpark: GameObject;
var bowModel: GameObject;
var objectDissappear1: GameObject;
var objectDissappear2 : GameObject;
function wait()
		{
        yield WaitForSeconds (1);
        objectDissappear1.renderer.enabled = false;
		objectDissappear2.renderer.enabled = false;
        }

function Update () 
{

	var hit: RaycastHit;
	//var fireAmount = 0;
		if(Physics.Raycast(transform.position, transform.forward, hit, 100))
		{
		if(objectDissappear1.renderer.enabled == true)
		{
				if(Input.GetMouseButtonDown(0))
				{
					var hitDirection = Quaternion.LookRotation(hit.normal);
						if(hit.collider.gameObject.tag == "enemy")
						{
							Instantiate(bowSpark, hit.point, hitDirection);
							Destroy(hit.collider.gameObject);
							Instantiate(bowModel, hit.point, hitDirection);
						}
					else if (hit.collider.gameObject.tag == "terrain")
					{
					Instantiate(bowSpark, hit.point, hitDirection);
					}
					wait();
				//	objectDissappear1.renderer.enabled = false;
				//	objectDissappear2.renderer.enabled = false;
					
				}
		
			}
		}
		
     }
	

