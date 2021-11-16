var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('registerslider', {
	init:function () {
		const marker = this.el;

		console.log("Registering slider!");

		var x = document.getElementById("slider");		
		x.style.display = "none";

		marker.addEventListener("markerFound", ()=> {
			var markerId = marker.id;
			x.style.display = "block";
			console.log('Marker Found: ', markerId);
		});

		marker.addEventListener("markerLost",() =>{
			var markerId = marker.id;
			//x.style.display = "none";
			console.log('Marker Lost: ', markerId);
		});
	},
});