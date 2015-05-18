var parentObj:Transform;

function Start () {
	if(parentObj == null)
		parentObj = (GameObject.Find("First Person Controller")).transform;
}
function Update () {
	if(parentObj !=null){
		if (Input.GetAxis("Horizontal") != 0 ||  Input.GetAxis("Vertical") != 0)
			animation.Play("Run");
		else 
			animation.Play("Idle");
	}
}
