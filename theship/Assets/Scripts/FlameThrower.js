var fire: GameObject;
var smoke: GameObject;


function OnMouseDown(){

	var campSound: AudioSource = GetComponent(AudioSource);
	campSound.Play();
	print ("Yoshi clicked");
	
	var flame: GameObject = Instantiate(fire,transform.position, Quaternion.identity); 
	var flameEmitter: ParticleSystem = flame.GetComponent(ParticleSystem);
	flameEmitter.enableEmission=true;

}
