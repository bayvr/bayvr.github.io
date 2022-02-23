document.addEventListener("DOMContentLoaded", function() {
    AFRAME.registerComponent('videohandler', {
        init: function () {
            //console.log ("Video registered!");
            var marker = this.el;
            var aVideoNode = marker.children.item(0);
            var attrs = aVideoNode.attributes;

            this.vid = null;

            for (i = 0; i < attrs.length; i++) {
              if (attrs[i].name == "src") {
                  //console.log("src: " + attrs[i].value);
                  this.vid = document.querySelector(attrs[i].value);
              }
            }

            marker.addEventListener('targetFound', event => {
              console.log("Target found");
              if (this.vid != null) {
                this.vid.currentTime = 0;
                this.vid.play();
              }
            });

            marker.addEventListener('targetLost', event => {
              console.log("Target Lost");
              if (this.vid != null) {
                  this.vid.pause();
              }
            });
        }
    });
});