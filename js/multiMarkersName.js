var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		var markerEl = document.createElement('a-marker');
		markerEl.setAttribute('type','pattern');
		markerEl.setAttribute('url','resources/markers/pattern-csonk.patt');
		markerEl.setAttribute('id','marker_001');

		markerEl.setAttribute('registerevents','');
		
		sceneEl.appendChild(markerEl);

		var obj = document.createElement('a-obj-model');
			obj.setAttribute('src', 'models/csonk.obj');
			obj.setAttribute('mtl', 'models/csonk.mtl');
			obj.setAttribute('scale', '0.1 0.1 0.1');
			obj.setAttribute('position', '0 0 0.5');
			obj.setAttribute('rotation', '-90 0 0');
		markerEl.appendChild(obj);

		var markerEl = document.createElement('a-marker');
		markerEl.setAttribute('type','pattern');
		markerEl.setAttribute('url','resources/markers/pattern-statue.patt');
		markerEl.setAttribute('id','marker_002');

		markerEl.setAttribute('registerevents','');
		
		sceneEl.appendChild(markerEl);

		var obj = document.createElement('a-obj-model');
			obj.setAttribute('src', 'models/szobor.obj');
			obj.setAttribute('mtl', 'models/szobor.mtl');
			obj.setAttribute('scale', '0.1 0.1 0.1');
			obj.setAttribute('position', '0.8 0 0.7');
			obj.setAttribute('rotation', '-90 0 0');
		markerEl.appendChild(obj);

		var markerEl = document.createElement('a-marker');
		markerEl.setAttribute('type','pattern');
		markerEl.setAttribute('url','resources/markers/pattern-car.patt');
		markerEl.setAttribute('id','marker_003');

		markerEl.setAttribute('registerevents','');
		
		sceneEl.appendChild(markerEl);

		var obj = document.createElement('a-obj-model');
			obj.setAttribute('src', 'models/car.obj');
			obj.setAttribute('mtl', 'models/car.mtl');
			obj.setAttribute('scale', '0.1 0.1 0.1');
			obj.setAttribute('position', '0 0 0.5');
			obj.setAttribute('rotation', '-90 0 0');
		markerEl.appendChild(obj);
	}
});

AFRAME.registerComponent('videohandler', {
	init: function () {
		var marker = this.el;

		this.vid = document.querySelector("#vid");
		
		marker.addEventListener('markerFound', function () {
			this.vid.play();
		}.bind(this));

marker.addEventListener('markerLost', function() {
	this.vid.pause();
	this.vid.currentTime = 0;
}.bind(this));
	}
});

AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
