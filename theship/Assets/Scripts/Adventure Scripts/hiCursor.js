#pragma strict

function Start () {

}

function Update () {
  if (Input.GetButton ("Horizontal") || Input.GetButton ("Vertical") || Input.GetButton("Turn") ||  Input.GetButton("ML Enable")  )
   {
   	Screen.showCursor = false;
   }
   else {
   	Screen.showCursor = true;
   }
}
