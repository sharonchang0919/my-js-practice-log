const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  console.log(this.value);
  console.log(this.dataset);
  const suffix = this.dataset.sizing || '';  /* sizing=px; '' =notghing, for color */
  console.log(this.name);
  document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
/* element.addEventListener(event, function, useCapture) */


/*image filter: https://www.w3schools.com/CSSref/css3_pr_filter.asp */




/*===arrow function====

var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// These two assignments are equivalent:

// Old-school:
var a2 = a.map(function(s){ return s.length });

// ECMAscript 6 using arrow functions
var a3 = a.map( s => s.length );

// both a2 and a3 will be equal to [31, 30, 31, 31]
*/