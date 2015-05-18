//Script originally created by aldonaletto at http://answers.unity3d.com/questions/164638/how-to-make-the-fps-character-controller-run-and-c.html
//Script was slightly modifed to use left control key to crouch, and the run feature removed..
var crchSpeed: float = 2; // crouching speed
var walkSpeed: float = 7; // regular speed var crchSpeed: float = 3; // crouching speed var runSpeed: float = 20; // run speed

private var chMotor: CharacterMotor; private var ch: CharacterController; private var tr: Transform; private var height: float; // initial height

function Start(){ chMotor = GetComponent(CharacterMotor); tr = transform; ch = GetComponent(CharacterController); height = ch.height; }

function Update(){

 var h = height;
 var speed = walkSpeed;
 
 
 
 if (Input.GetKey("left ctrl")){ // press the left CTRL to crouch
     h = 0.5 * height;
     speed = crchSpeed; // slow down when crouching
 }
 chMotor.movement.maxForwardSpeed = speed; // set max speed
 var lastHeight = ch.height; // crouch/stand up smoothly 
 ch.height = Mathf.Lerp(ch.height, h, 5*Time.deltaTime);
 tr.position.y += (ch.height-lastHeight)/2; // fix vertical position
 }