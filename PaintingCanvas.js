/*const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');*/
var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

ctx.strokeStyle = '#CD5C5C'; 
ctx.lineWidth = 30;
ctx.lineJoin = 'round';  //or 'miter' or 'bevel'
ctx.lineCap = 'round';   //or 'miter' or 'bevel'

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
  if (!isDrawing)
      return;
  //console.log(e);

  //ctx.strokeStyle = `hsl( ${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

 /* hue+=1;
  if (hue >= 360) 
    hue = 0;*/
  
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => 
  { 
    [lastX, lastY] = [e.offsetX, e.offsetY];
    isDrawing = true 
  });
canvas.addEventListener('mouseup', () => isDrawing = false);
//canvas.addEventListener('mouseout', () => isDrawing = false);


//######  change pen color #### 
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //console.log(this);
  /*console.log(this.value);
  console.log(this.dataset);
  console.log(this.name);
  const suffix = this.dataset.sizing || '';  /* sizing=px; '' =notghing, for color 
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);*/
  ctx.strokeStyle = this.value;
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

//##### claer ###
function clearCanvas() {
 ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
}

//#### thickness ###
function ChangeLineWidth(clicked_id){ 
    console.log(clicked_id);
    //var currentID = clicked_id;
    if(clicked_id === "thin")
      ctx.lineWidth = 10;
  
    if(clicked_id === "middle")
      ctx.lineWidth = 20;
  
    if(clicked_id === "thick")
      ctx.lineWidth = 30;   
}

