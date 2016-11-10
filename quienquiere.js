(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 480,
	height: 722,
	fps: 24,
	color: "#0066FF",
	manifest: [
		{src:"images/npreg.png?1478785948195", id:"npreg"},
		{src:"images/preguntquien.png?1478785948195", id:"preguntquien"},
		{src:"images/respa.png?1478785948195", id:"respa"},
		{src:"images/respb.png?1478785948195", id:"respb"},
		{src:"images/respc.png?1478785948195", id:"respc"},
		{src:"images/respd.png?1478785948195", id:"respd"}
	]
};



// symbols:



(lib.npreg = function() {
	this.initialize(img.npreg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);


(lib.preguntquien = function() {
	this.initialize(img.preguntquien);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,866,260);


(lib.respa = function() {
	this.initialize(img.respa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,52);


(lib.respb = function() {
	this.initialize(img.respb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,52);


(lib.respc = function() {
	this.initialize(img.respc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,52);


(lib.respd = function() {
	this.initialize(img.respd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,52);


(lib.respdd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respd();
	this.instance.setTransform(-210,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-26,418,52);


(lib.respcc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respc();
	this.instance.setTransform(-209,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-27,418,52);


(lib.respbb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respb();
	this.instance.setTransform(-209,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-26,418,52);


(lib.respaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respa();
	this.instance.setTransform(-210,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-26,418,52);


(lib.Interpolación9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.preguntquien();
	this.instance.setTransform(-227.6,-130,0.526,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.6,-130,455.2,260);


(lib.Interpolación8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.preguntquien();
	this.instance.setTransform(-227.6,-130,0.526,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.6,-130,455.2,260);


(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.npreg();
	this.instance.setTransform(-54,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,108,108);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.npreg();
	this.instance.setTransform(-54,-54);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,108,108);


(lib.npreg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación7("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-54,108,108);


// stage content:
(lib.Quienquiere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.movieClip_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndPlay(4);
		}
		
		
		this.movieClip_6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(4);
		}
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1).call(this.frame_35).wait(1));

	// RespD
	this.instance = new lib.respdd();
	this.instance.setTransform(-264.2,616,1,1,0,0,0,-1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:239.2,y:588},30).wait(2));

	// RespC
	this.instance_1 = new lib.respcc();
	this.instance_1.setTransform(-264.2,551,1,1,0,0,0,0,-1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:239.2,y:531.3},25).wait(7));

	// RespB
	this.instance_2 = new lib.respbb();
	this.instance_2.setTransform(-264.2,483.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:239.2,y:475.3},20).wait(12));

	// RespA
	this.instance_3 = new lib.respaa();
	this.instance_3.setTransform(-264.2,412.8,1,1,0,0,0,0,-2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({x:239.2,y:419.3},15).wait(17));

	// Pregunta
	this.instance_4 = new lib.Interpolación8("synched",0);
	this.instance_4.setTransform(756.2,275.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpolación9("synched",0);
	this.instance_5.setTransform(237.2,261.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true,x:237.2,y:261.5},10).wait(22));

	// NPreg
	this.instance_6 = new lib.Interpolación6("synched",0);
	this.instance_6.setTransform(582.6,79.4);
	this.instance_6._off = true;

	this.movieClip_5 = new lib.npreg_1();
	this.movieClip_5.setTransform(363,71.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.movieClip_5}]},5).to({state:[{t:this.movieClip_5}]},25).to({state:[{t:this.movieClip_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({_off:true,x:363,y:71.6,mode:"independent"},5).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;