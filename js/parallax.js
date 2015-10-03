(function(){
  var parallax = document.querySelectorAll(".parallax");
  var speed = 0.25;
  window.addEventListener('scroll', function(ev){
    for (var i = 0; i < parallax.length; i++) {
      var elBackgroundPos = "50% " + ((parallax[i].getBoundingClientRect().top * speed) * -1) + "px";

      parallax[i].style.backgroundPosition = elBackgroundPos;
    }//end for
    ev.preventDefault();
    ev.stopPropagation();
  });//end addEventListerner
})();
