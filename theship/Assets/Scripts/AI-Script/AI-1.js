private var targetObj: GameObject; 

function Update () {
    targetObj = GameObject.Find("Player");
	var direction = Vector3.Normalize(targetObj.transform.position - transform.position);
	transform.position += direction * Time.deltaTime;
	var rotation = Quaternion.LookRotation(direction);
	transform.rotation = rotation;
}

