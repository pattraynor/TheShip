var isPaused :boolean = false;
var startTime :float;
var timeRemaining : float;
var minutes: int;
var seconds: int;
var timeStr: String;

var remainingTargets: int = 5;

var heart: Texture2D;
var lives: int = 3;


function Start () {
	//guiText.material.color = Color.black;
	lives = (PlayerPrefs.GetInt("Player Lives"));

}
function Update(){
	DoCountDown();
	if (remainingTargets == 0) { Application.LoadLevel("win");	} 
}
function DoCountDown(){
	timeRemaining = startTime - Time.timeSinceLevelLoad;
	if(timeRemaining <= 0) {
		timeRemaining = 0;
		isPaused = true;
		TimeIsUp();
	}
	ShowTime();
	//Debug.Log ("Time remaining = "+ timeRemaining);
}

function PauseClock(){
	isPaused = true;
}

function UnpauseClock(){
	isPaused = false;
}
function ShowTime(){
	minutes = timeRemaining/60;
	seconds = timeRemaining%60;
	timeStr = minutes.ToString() + ":" + seconds.ToString("D2");
}
function TimeIsUp(){
	lives = (PlayerPrefs.GetInt("Player Lives")) - 1;	//*** Get the value of “Player lives” and -1
	PlayerPrefs.SetInt("Player Lives", lives );	// *** and assign it to the local lives variable.
	if (remainingTargets == 0) { }        		// *** Winning Condition
	else if (lives == 0) { Application.LoadLevel("lose"); }			// *** Losing Condition
	else {
		Application.LoadLevel("game");	// *** Reload the current Scene
	}

}

function ReduceTargets(){
	remainingTargets-=1;
	Debug.Log(remainingTargets);
}

function OnGUI(){ 
GetComponent(GUIText).text = timeStr;
for (var i = 0; i<lives; i++){
		GUI.DrawTexture(Rect (i*100,10,heart.width, heart.height), heart );
	}
}
