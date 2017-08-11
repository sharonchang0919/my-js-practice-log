 
 //======white key interactions===============
window.addEventListener('keydown', function(i){
  //consoel.log(i);
  //console.log(i.keyCode);
  const audio = document.querySelector(`audio[data-key="${i.keyCode}"]`);
  //console.log(audio); //skip
  if(!audio) return;
  audio.currentTime = 0; //stop the audio
  audio.play();

  const w_key = document.querySelector(`.white_key[data-key="${i.keyCode}"]`);
  //console.log(key);
  //.key.style.transform = `rotate(90deg)`;
  w_key.classList.add('playing');

});

 function removeTransition(i){
   if(i.propertyName !== 'transform') return; //skip
   console.log(this);
   this.classList.remove('playing');
 }

 const w_keys = document.querySelectorAll('.white_key');

 w_keys.forEach(w_key => w_key.addEventListener('transitionend', removeTransition));
 
 
 //======black key interactions===============
window.addEventListener('keydown', function(i){
  //consoel.log(i);
  //console.log(i.keyCode);
  const audio = document.querySelector(`audio[data-key="${i.keyCode}"]`);
  //console.log(audio); //skip
  if(!audio) return;
  audio.currentTime = 0; //stop the audio
  audio.play();

  const b_key = document.querySelector(`.black_key[data-key="${i.keyCode}"]`);
  //console.log(key);
  //.key.style.transform = `rotate(90deg)`;
  b_key.classList.add('playing');
 
});

 function removeTransition(i){
   if(i.propertyName !== 'transform') return; //skip
   console.log(this);
   this.classList.remove('playing');
 }

 const b_keys = document.querySelectorAll('.black_key');

 b_keys.forEach(b_key => b_key.addEventListener('transitionend', removeTransition));
