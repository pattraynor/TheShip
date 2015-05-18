function OnMouseDown(){

	var campSound: AudioSource = GetComponent(AudioSource);
	campSound.Play();

	var flame: GameObject = GameObject.Find("FireSystem");
	(flame.GetComponent(ParticleSystem)).enableEmission = true;

	/**** Legend Particle System *********************
	var flame: GameObject = GameObject.Find("FireSystem");
	var flameEmitter: ParticleEmitter = flame.GetComponent(ParticleEmitter);
	flameEmitter.emit=true;
	
	var smoke: GameObject =  GameObject.Find("SmokeSystem");
	var smokeEmitter: ParticleEmitter = smoke.GetComponent(ParticleEmitter);
	smokeEmitter.emit=true;
	**************/
}
