var gunSpark: GameObject;

function Update () {
	var hit: RaycastHit;
	if(Physics.Raycast(transform.position, transform.forward, hit, 100)) {
		Debug.DrawLine(transform.position, hit.point);
		Debug.Log("Selected object is " + hit.collider.gameObject.name);
		if(Input.GetMouseButtonDown(0)){
			var hitDirection = Quaternion.LookRotation(hit.normal);
			Instantiate(gunSpark, hit.point, hitDirection);
		}
	}
}