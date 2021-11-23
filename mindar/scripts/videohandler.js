document.addEventListener("DOMContentLoaded", function() {
    AFRAME.registerComponent('videohandler', {
        init: function () {
            //console.log ("Video registered!");
            var marker = this.el;
            this.vid = document.querySelector("#stellVid");
            
            marker.addEventListener('targetFound', function () {
              //console.log("Target found");
              this.vid.currentTime = 0;
              this.vid.play();
            }.bind(this));

            marker.addEventListener('targetLost', function() {
              this.vid.pause();
              //console.log("Target Lost");
            }.bind(this));
        }
    });
});