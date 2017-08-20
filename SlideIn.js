function debounce(func, wait = 20, immediate = true) {
    var timeout;
      
    return function() {
    var context = this, args = arguments;
        
    var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
    
    }

const sliderImages = document.querySelectorAll('.slide-in');
//console.log(sliderImages); //5 data, bcz totally 5 images have ".slide-in" in html 

function checkSlide() {
  //console.count(e);

  sliderImages.forEach(sliderImage => {  //below data: is all 5 (bcz 5 images on the website) in a row displayed 

  //console.count(sliderImage.offsetTop); //5 constant values in a row no matter how far I have scrolled away
  
  const valueY = window.scrollY + window.innerHeight;

  if ( (valueY > sliderImage.offsetTop + sliderImage.height / 2) &&  ( valueY < sliderImage.offsetTop + sliderImage.height + window.innerHeight)) 
    sliderImage.classList.add('active'); //slide in happens as [ 50% image height ~ 100% rightly leave from the window/screen]
  else 
    sliderImage.classList.remove('active');

  }


  );
}

//window.addEventListener('scroll', checkSlide); // check too frequency
window.addEventListener('scroll', debounce(checkSlide)); //so add deboucne 