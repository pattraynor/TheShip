#pragma strict

var aniParent : GameObject;
var aniClip : AnimationClip;
function OnMouseDown () 
{
	print(name + " picked");
	aniParent.animation.Play(aniClip.name);
	if (GetComponent(AudioSource))
	{ 
	audio.Play();
	}

}
