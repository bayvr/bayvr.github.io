/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
var toggle = -1;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

/*Handle toggle*/
function toggleCheck(){
    toggle*=-1;
    var x = document.getElementById("myswitch");
    if(toggle==1) {openFullscreen();x.style.display="none";}
    else closeFullscreen();
}
