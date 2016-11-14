(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 320,
	height: 421,
	fps: 24,
	color: "#0066FF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ayudpublic = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cc = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.npreg = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.preguntquien = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.respa = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.respav = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.respb = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.respbv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.respc = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.respcv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.respd = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.respdv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.salir = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.saltar = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ssalir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.salir();
	this.instance.setTransform(-52,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.86,scaleY:0.83,x:-45,y:-37},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-44,100,84);


(lib.saltar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.saltar();
	this.instance.setTransform(-49.8,-25.5,2,1.724);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.6,scaleY:1.21,x:-40.5,y:-17.5},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:-40,y:-22.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.8,-25.5,100,50);


(lib.rrespd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respd();
	this.instance.setTransform(-210,-25);

	this.instance_1 = new lib.respdv();
	this.instance_1.setTransform(-211,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-25,418,52);


(lib.rrespc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respc();
	this.instance.setTransform(-210,-27);

	this.instance_1 = new lib.respcv();
	this.instance_1.setTransform(-210,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-27,418,52);


(lib.rrespb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respb();
	this.instance.setTransform(-209,-27);

	this.instance_1 = new lib.respbv();
	this.instance_1.setTransform(-209,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-27,418,52);


(lib.rrespa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.respa();
	this.instance.setTransform(-209,-26);

	this.instance_1 = new lib.respav();
	this.instance_1.setTransform(-209,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-26,418,52);


(lib._public = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ayudpublic();
	this.instance.setTransform(-29.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.75,scaleY:0.75,x:-22.5,y:-13.6},0).wait(1).to({scaleX:1,scaleY:1,x:-29.5,y:-18},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-18,57,36);


(lib.Interpolación20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBDIgjgwIgFgJIgFAKIgiAvIgWAAIA1hFIgvhBIAWAAIAYAjQAIALABAGIALgQIAbgkIAUAAIgwBAIA0BGg");
	this.shape.setTransform(23.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBDIAAiGIAyAAQAMABAIABQAKABAHAFQAGAFAFAJQADAHAAALQAAARgLAKQgLAMgcAAIghAAIAAA3gAgggCIAhAAQASAAAGgGQAIgHAAgLQAAgJgEgGQgFgHgHgBQgEgBgMgBIghAAg");
	this.shape_1.setTransform(10.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA3QgOgRAAgmQAAgWAFgPQAFgPAKgIQAKgIANAAQAKAAAJAFQAIAEAFAIQAGAIADAMQADAMAAATQAAAYgFAOQgFAPgKAIQgKAIgOAAQgSAAgLgOgAgRgsQgJAMAAAgQAAAhAIALQAIALAKAAQALAAAIgLQAIgLAAghQAAgggIgLQgIgLgLAAQgKAAgHAKg");
	this.shape_2.setTransform(-6.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA3QgOgRAAgmQAAgWAFgPQAFgPAKgIQAKgIANAAQAKAAAJAFQAIAEAFAIQAGAIADAMQADAMAAATQAAAYgFAOQgFAPgKAIQgKAIgOAAQgSAAgLgOgAgRgsQgJAMAAAgQAAAhAIALQAIALAKAAQALAAAIgLQAIgLAAghQAAgggIgLQgIgLgLAAQgKAAgHAKg");
	this.shape_3.setTransform(-17,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBEQgBgGACgGQAEgJAHgJQAIgJAOgMQAUgRAIgJQAIgLAAgJQAAgKgHgHQgHgHgMAAQgKAAgHAHQgHAHAAANIgRgBQABgUAMgKQALgKASAAQATAAAMALQALALAAAQQAAAIgDAIQgDAIgIAHQgIAIgSAQIgRARQgFAEgCAFIBAAAIAAAQg");
	this.shape_4.setTransform(-27.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-12.6,69.5,25.3);


(lib.Interpolación19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAoBDIgjgwIgFgJIgFAKIgiAvIgWAAIA1hFIgvhBIAWAAIAYAjQAIALABAGIALgQIAbgkIAUAAIgwBAIA0BGg");
	this.shape.setTransform(23.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBDIAAiGIAyAAQAMABAIABQAKABAHAFQAGAFAFAJQADAHAAALQAAARgLAKQgLAMgcAAIghAAIAAA3gAgggCIAhAAQASAAAGgGQAIgHAAgLQAAgJgEgGQgFgHgHgBQgEgBgMgBIghAAg");
	this.shape_1.setTransform(10.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA3QgOgRAAgmQAAgWAFgPQAFgPAKgIQAKgIANAAQAKAAAJAFQAIAEAFAIQAGAIADAMQADAMAAATQAAAYgFAOQgFAPgKAIQgKAIgOAAQgSAAgLgOgAgRgsQgJAMAAAgQAAAhAIALQAIALAKAAQALAAAIgLQAIgLAAghQAAgggIgLQgIgLgLAAQgKAAgHAKg");
	this.shape_2.setTransform(-6.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdA3QgOgRAAgmQAAgWAFgPQAFgPAKgIQAKgIANAAQAKAAAJAFQAIAEAFAIQAGAIADAMQADAMAAATQAAAYgFAOQgFAPgKAIQgKAIgOAAQgSAAgLgOgAgRgsQgJAMAAAgQAAAhAIALQAIALAKAAQALAAAIgLQAIgLAAghQAAgggIgLQgIgLgLAAQgKAAgHAKg");
	this.shape_3.setTransform(-17,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrBEQgBgGACgGQAEgJAHgJQAIgJAOgMQAUgRAIgJQAIgLAAgJQAAgKgHgHQgHgHgMAAQgKAAgHAHQgHAHAAANIgRgBQABgUAMgKQALgKASAAQATAAAMALQALALAAAQQAAAIgDAIQgDAIgIAHQgIAIgSAQIgRARQgFAEgCAFIBAAAIAAAQg");
	this.shape_4.setTransform(-27.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-12.6,69.5,25.3);


(lib.Interpolación17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAlIAsAAIgOgjIgIgcQgCANgFANg");
	this.shape.setTransform(99,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBDIAAh2IgtAAIAAgQIBqAAIAAAQIgtAAIAAB2g");
	this.shape_1.setTransform(87,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBDIhFhpIAABpIgRAAIAAiGIATAAIBFBpIAAhpIARAAIAACGg");
	this.shape_2.setTransform(74.2,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA+QgMgHgFgMQgFgNAAgVIAAhNIASAAIAABNQAAARADAJQADAIAIAFQAIAEAMAAQASAAAJgJQAIgJAAgZIAAhNIASAAIAABNQAAAUgFAMQgEAMgNAIQgMAIgTAAQgSAAgMgHg");
	this.shape_3.setTransform(60.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcA+QgRgKgIgPQgJgRAAgUQAAgRAJgSQAIgRAQgIQAQgJASAAQAOAAANAFQAMAEAGAJQAHAJADANIgQAFQgDgKgFgHQgEgFgJgEQgIgEgKABQgKAAgJADQgJAEgGAGQgGAGgDAIQgFANAAANQAAARAGAMQAHANALAFQAMAHAMAAQAMgBALgEQALgFAGgFIAAgZIgoAAIAAgOIA5AAIAAAwQgNALgOAFQgOAGgPAAQgSAAgQgIg");
	this.shape_4.setTransform(46.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBDIAAiGIBgAAIAAAQIhOAAIAAAqIBJAAIAAAOIhJAAIAAAvIBRAAIAAAPg");
	this.shape_5.setTransform(32.8,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlBDIgSgcQgIgMgGgHQgEgGgDgDIgHgDIgLgBIgVAAIAAA8IgSAAIAAiGIA7AAQASABAKADQAJAEAGAJQAFAKAAAKQAAAPgJAKQgJAIgUACQAHAEADADQAIAHAIALIAXAlgAgpgGIAnAAQAKgBAIgCQAGgCAEgGQADgGAAgHQABgJgIgGQgGgHgPABIgqAAg");
	this.shape_6.setTransform(20.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBDIAAiGIAyAAQAMABAIABQAJABAIAFQAGAFAEAJQAEAHABALQAAARgMAKQgKAMgdAAIgiAAIAAA3gAghgCIAiAAQASAAAHgGQAHgHAAgLQAAgJgFgGQgDgHgIgBQgEgBgMgBIgiAAg");
	this.shape_7.setTransform(6.6,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAlIAsAAIgOgjIgIgcQgCANgFANg");
	this.shape_8.setTransform(-11.7,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag3BDIAAiGIAvAAQAOAAAIACQAMADAIAHQALAKAGANQAFAPAAARQAAAOgEAMQgDAMgGAIQgGAIgGAEQgHAFgKACQgJACgLAAgAglA0IAdAAQAMAAAIgDQAHgDAFgEQAGgHAEgKQADgLAAgOQAAgVgHgMQgHgLgKgEQgHgDgOAAIgdAAg");
	this.shape_9.setTransform(-24.7,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiBDIhFhpIAABpIgRAAIAAiGIATAAIBFBpIAAhpIARAAIAACGg");
	this.shape_10.setTransform(-38.6,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeA+QgLgHgGgMQgFgNAAgVIAAhNIASAAIAABNQAAARADAJQAEAIAIAFQAHAEAMAAQASAAAJgJQAIgJAAgZIAAhNIASAAIAABNQAAAUgFAMQgFAMgMAIQgLAIgUAAQgSAAgMgHg");
	this.shape_11.setTransform(-52.3,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdA+QgPgKgJgPQgJgRAAgUQAAgRAJgSQAIgRAQgIQAQgJARAAQAPAAAMAFQAMAEAHAJQAHAJADANIgQAFQgDgKgEgHQgFgFgJgEQgIgEgKABQgLAAgIADQgKAEgFAGQgGAGgDAIQgFANAAANQAAARAGAMQAHANALAFQANAHALAAQAMgBALgEQALgFAGgFIAAgZIgoAAIAAgOIA5AAIAAAwQgNALgOAFQgOAGgPAAQgSAAgRgIg");
	this.shape_12.setTransform(-66.6,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgxBDIAAiGIBgAAIAAAQIhOAAIAAAqIBJAAIAAAOIhJAAIAAAvIBRAAIAAAPg");
	this.shape_13.setTransform(-80,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaBAQgMgFgHgLQgHgLgBgNIARgCQABAKAFAHQAEAGAKAEQAJAFAJAAQALAAAIgEQAIgDADgEQAEgGAAgHQAAgGgEgFQgDgEgJgEQgFgCgRgEQgTgFgHgCQgKgFgFgIQgFgHAAgKQAAgKAGgJQAGgJALgEQAMgFANAAQANAAAMAFQAMAFAGAJQAGAKAAAMIgRABQgBgNgIgHQgIgGgPAAQgPAAgIAGQgHAGAAAIQAAAIAFAEQAFAFAUAFQAWAFAIAEQAMADAGAJQAGAIAAALQAAALgHAJQgGAKgLAFQgMAGgPAAQgQAAgNgGg");
	this.shape_14.setTransform(-93,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAlIAsAAIgOgjIgIgcQgCANgFANg");
	this.shape_15.setTransform(-110.9,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpBDIAAiGIASAAIAAB3IBBAAIAAAPg");
	this.shape_16.setTransform(-122.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-12.6,259.6,25.3);


(lib.Interpolación14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaBAQgMgFgHgLQgHgLgBgNIARgCQABAKAFAHQAEAGAKAEQAJAFAJAAQALAAAIgEQAIgDADgEQAEgGAAgHQAAgGgEgFQgDgEgJgEQgFgCgRgEQgTgFgHgCQgKgFgFgIQgFgHAAgKQAAgKAGgJQAGgJALgEQAMgFANAAQANAAAMAFQAMAFAGAJQAGAKAAAMIgRABQgBgNgIgHQgIgGgPAAQgPAAgIAGQgHAGAAAIQAAAIAFAEQAFAFAUAFQAWAFAIAEQAMADAGAJQAGAIAAALQAAALgHAJQgGAKgLAFQgMAGgPAAQgQAAgNgGg");
	this.shape.setTransform(70.4,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxBDIAAiGIBgAAIAAAQIhOAAIAAAqIBJAAIAAAOIhJAAIAAAvIBRAAIAAAPg");
	this.shape_1.setTransform(58,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAjBDIhGhpIAABpIgRAAIAAiGIASAAIBGBpIAAhpIARAAIAACGg");
	this.shape_2.setTransform(44.6,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghA9QgPgKgIgQQgIgQAAgRQAAggATgUQASgTAbAAQASAAAQAJQAPAJAIAQQAIAQAAATQAAAUgJARQgIAQgQAJQgPAIgRAAQgSAAgPgJgAgfgpQgOAOAAAdQAAAYANAOQANAOATABQAUAAANgPQANgOAAgaQAAgPgGgMQgFgNgLgHQgLgGgNAAQgRAAgOAMg");
	this.shape_3.setTransform(30.4,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBDIAAiGIAQAAIAACGg");
	this.shape_4.setTransform(20.3,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeA9QgOgJgIgRQgGgRgBgSQABgVAHgPQAJgRAPgHQAOgJARAAQAUAAAOAKQAOALAGATIgSAEQgFgPgJgHQgJgGgNAAQgPgBgKAIQgLAIgEANQgEAMAAANQAAAPAFAOQAFAMALAHQALAGAKABQAPAAAKgJQALgJAEgRIASAFQgGAVgOAMQgQAMgUAAQgUAAgOgJg");
	this.shape_5.setTransform(10.9,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAlIAsAAIgOgjIgIgcQgCANgFANg");
	this.shape_6.setTransform(-2.4,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIBDIAAh2IgtAAIAAgQIBqAAIAAAQIgtAAIAAB2g");
	this.shape_7.setTransform(-14.4,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBDIAAiGIAQAAIAACGg");
	this.shape_8.setTransform(-22.9,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfA9QgNgJgHgRQgIgRABgSQgBgVAJgPQAHgRAPgHQAPgJAQAAQAVAAAOAKQAOALAFATIgSAEQgEgPgJgHQgJgGgOAAQgOgBgKAIQgKAIgFANQgEAMAAANQAAAPAFAOQAFAMALAHQALAGAKABQAPAAALgJQAKgJADgRIASAFQgFAVgPAMQgOAMgWAAQgUAAgOgJg");
	this.shape_9.setTransform(-32.3,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBDIAAiGIAQAAIAACGg");
	this.shape_10.setTransform(-41.9,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBDIAAiGIASAAIAAB3IBBAAIAAAPg");
	this.shape_11.setTransform(-49.5,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxBDIAAiGIBgAAIAAAQIhOAAIAAAqIBJAAIAAAOIhJAAIAAAvIBRAAIAAAPg");
	this.shape_12.setTransform(-61.2,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtBDIAAiGIBaAAIAAAQIhIAAIAAArIA+AAIAAANIg+AAIAAA+g");
	this.shape_13.setTransform(-73.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-12.6,162.8,25.3);


(lib.Interpolación13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.npreg();
	this.instance.setTransform(-24.5,-25.5,0.454,0.472);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-25.5,49,51);


(lib.Interpolación12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.preguntquien();
	this.instance.setTransform(-155,-61,0.358,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-61,310.1,122);


(lib.Interpolación11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.preguntquien();
	this.instance.setTransform(-155,-61,0.358,0.469);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-61,310.1,122);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBWQgVgNgLgXQgLgWAAgaQAAgvAagbQAagbAnAAQAaAAAWANQAVANAMAXQALAXAAAbQAAAdgMAXQgMAXgWANQgWALgYAAQgaAAgWgNgAgtg6QgTASgBArQAAAiAUAVQASATAbABQAcAAATgVQASgUAAglQABgWgJgRQgHgTgPgJQgQgKgTABQgZAAgUASg");
	this.shape.setTransform(69.1,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOBgIAAi/IBCAAQAVAAAMADQAQAEAMAKQAPANAIAUQAHAUAAAZQAAAVgFARQgFARgIALQgIALgJAGQgKAHgOADQgNADgQAAgAg1BJIApAAQASAAAKgDQALgEAHgGQAJgJAFgQQAFgPAAgUQAAgegKgQQgKgRgOgFQgKgEgVAAIgpAAg");
	this.shape_1.setTransform(49.1,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMBgIAAi/IAYAAIAAC/g");
	this.shape_2.setTransform(35.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBgIhjiWIAACWIgZAAIAAi/IAbAAIBjCWIAAiWIAZAAIAAC/g");
	this.shape_3.setTransform(21.7,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGBgIAAi/ICJAAIAAAXIhwAAIAAA7IBpAAIAAAVIhpAAIAABBIB1AAIAAAXg");
	this.shape_4.setTransform(3.4,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMBgIhLi/IAcAAIAyCKIAJAgQAEgQAFgQIA1iKIAaAAIhLC/g");
	this.shape_5.setTransform(-15,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBgIhjiWIAACWIgZAAIAAi/IAbAAIBjCWIAAiWIAZAAIAAC/g");
	this.shape_6.setTransform(-33.8,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhHBgIAAi/ICKAAIAAAXIhwAAIAAA7IBpAAIAAAVIhpAAIAABBIB0AAIAAAXg");
	this.shape_7.setTransform(-52.1,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLBgIAAi/IAYAAIAAC/g");
	this.shape_8.setTransform(-65.1,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhHBgIAAi/IBHAAQAVAAAOAGQANAGAIAMQAHAMAAANQAAANgHALQgGALgOAGQASAFAJALQAJAMAAARQAAAOgFAMQgGALgIAGQgJAHgNADQgMADgTAAgAguBJIAuAAIASAAQAIgCAGgEQAGgDAEgHQAEgIAAgJQAAgLgGgIQgFgIgKgDQgKgDgQAAIgtAAgAgugOIAqAAQAPAAAHgCQAKgDAFgHQAFgGAAgLQAAgJgFgHQgEgIgJgCQgIgDgTAAIgnAAg");
	this.shape_9.setTransform(-77.7,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.9,-17,178,34.2);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBbQgRgHgLgPQgKgPgBgUIAZgCQACAPAGAIQAGAKANAFQAOAHAOAAQAOgBALgEQAMgFAGgHQAFgHAAgKQAAgJgFgHQgGgGgMgFQgIgDgZgGQgagGgLgEQgNgHgHgLQgHgLAAgOQAAgOAIgNQAIgMARgHQAQgGATgBQAUAAAQAIQARAGAIANQAJAOABARIgZACQgCgTgLgIQgLgKgWAAQgWAAgKAJQgMAIABAMQAAALAHAGQAIAHAdAHQAfAHAMAFQARAGAHAMQAIAMAAAQQAAAPgJANQgIAOgQAIQgSAIgUgBQgYAAgSgIg");
	this.shape.setTransform(78.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBWQgVgNgLgXQgLgWAAgaQAAgvAagbQAagbAnAAQAaAAAWANQAVANAMAXQALAXAAAbQAAAdgMAXQgMAXgVANQgXALgYAAQgaAAgWgNgAgtg6QgTASgBArQAAAiAUAVQASATAbABQAcAAATgVQASgUAAglQABgWgJgRQgHgTgPgJQgQgKgTABQgZAAgUASg");
	this.shape_1.setTransform(59.2,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABDBgIAAigIg4CgIgVAAIg4iiIAACiIgZAAIAAi/IAnAAIAuCHIAHAcIAKgfIAuiEIAjAAIAAC/g");
	this.shape_2.setTransform(37.4,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhHBgIAAi/ICKAAIAAAXIhwAAIAAA7IBpAAIAAAVIhpAAIAABBIB0AAIAAAXg");
	this.shape_3.setTransform(17.5,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBXQgTgNgLgYQgKgYAAgaQAAgfAMgWQALgWAVgMQAWgMAXAAQAdAAAUAPQATAPAJAaIgaAGQgHgVgMgJQgNgKgUABQgUgBgPALQgPALgGASQgFARgBAUQABAWAGATQAIASAPAKQAPAJAPAAQAWAAAPgNQAPgMAFgZIAaAGQgIAggVARQgVAQgeAAQgdAAgUgMg");
	this.shape_4.setTransform(-1.4,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBgIAAi/ICJAAIAAAXIhwAAIAAA7IBpAAIAAAVIhpAAIAABBIB1AAIAAAXg");
	this.shape_5.setTransform(-20,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhIBgIAAi/IBIAAQASAAAKACQAOACAKAHQAJAHAGAMQAGAMAAAOQAAAZgQAPQgPARgpAAIgwAAIAABOgAgvgDIAwAAQAZAAAKgJQALgKAAgQQAAgMgGgJQgHgJgKgCQgGgCgRAAIgwAAg");
	this.shape_6.setTransform(-37.9,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABDBgIAAigIg4CgIgVAAIg4iiIAACiIgZAAIAAi/IAnAAIAuCHIAHAcIAKgfIAuiEIAjAAIAAC/g");
	this.shape_7.setTransform(-58.6,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBgIAAi/ICJAAIAAAXIhwAAIAAA7IBpAAIAAAVIhpAAIAABBIB1AAIAAAXg");
	this.shape_8.setTransform(-78.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.8,-17,179.7,34.2);


(lib.ccincuenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.cc();
	this.instance.setTransform(-26,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.72,scaleY:0.59,x:-19,y:-8.5},0).wait(1).to({scaleX:1,scaleY:1,x:-26,y:-15.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-14.5,50,29);


// stage content:



(lib.quienquiere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{preg1:37,"preg1":76});

	// timeline functions:
	this.frame_37 = function() {
		this.stop("preg1");
		
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(39);
		}
		
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(5);
		}
	}
	this.frame_76 = function() {
		this.stop("preg1");
		
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(5);
		}
		
		
		/* Hacer clic para ir al fotograma y reproducir
		Al hacer clic en la instancia del símbolo especificado, la cabeza lectora se mueve hasta el fotograma especificado en la línea de tiempo y prosigue la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		
		Instrucciones:
		1. Reemplace el número 5 del siguiente código por el número de fotograma hasta el que quiere que se mueva la cabeza lectora cuando se haga clic en la instancia del símbolo.
		2.Los números de fotograma en EaselJS empiezan con 0 en vez de 1
		*/
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(39).call(this.frame_76).wait(1));

	// publico
	this.publicc = new lib._public();
	this.publicc.setTransform(-68.6,334.2,1.228,1.389);
	this.publicc._off = true;
	new cjs.ButtonHelper(this.publicc, 0, 1, 2, false, new lib._public(), 3);

	this.timeline.addTween(cjs.Tween.get(this.publicc).wait(19).to({_off:false},0).to({x:61.4,y:380.2},18).to({_off:true},1).wait(20).to({_off:false,x:-68.6,y:334.2},0).to({x:61.4,y:380.2},18).wait(1));

	// cintuenta
	this.cinco = new lib.ccincuenta();
	this.cinco.setTransform(-68.5,434.1,1.4,1.724);
	this.cinco._off = true;
	new cjs.ButtonHelper(this.cinco, 0, 1, 2, false, new lib.ccincuenta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cinco).wait(19).to({_off:false},0).to({x:160.1,y:380.6},18).to({_off:true},1).wait(20).to({_off:false,x:-68.5,y:434.1},0).to({x:160.1,y:380.6},18).wait(1));

	// saltarr
	this.saltarr = new lib.saltar_1();
	this.saltarr.setTransform(-69.9,384.3,0.7,1,0,0,0,0.1,-0.5);
	this.saltarr._off = true;
	new cjs.ButtonHelper(this.saltarr, 0, 1, 2, false, new lib.saltar_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.saltarr).wait(19).to({_off:false},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:258.7,y:381},18).to({_off:true},1).wait(20).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:258.7,y:381},18).wait(1));

	// salir
	this.salirr = new lib.ssalir();
	this.salirr.setTransform(-52.5,-18.3,0.5,0.595);
	this.salirr._off = true;
	new cjs.ButtonHelper(this.salirr, 0, 1, 2, false, new lib.ssalir(), 3);

	this.timeline.addTween(cjs.Tween.get(this.salirr).wait(19).to({_off:false},0).to({x:31,y:27.2},6).to({_off:true},13).wait(20).to({_off:false,x:-52.5,y:-18.3},0).to({x:31,y:27.2},6).wait(13));

	// RespD
	this.respdd = new lib.rrespd();
	this.respdd.setTransform(496.6,332.9,0.694,0.673);
	this.respdd._off = true;
	new cjs.ButtonHelper(this.respdd, 0, 1, 2, false, new lib.rrespd(), 3);

	this.text = new cjs.Text("Conmutativa", "19px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 23;
	this.text.lineWidth = 109;
	this.text.setTransform(55,312.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.text,p:{text:"Conmutativa"}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},20).to({state:[{t:this.respdd},{t:this.text,p:{text:"Conjuncion"}}]},18).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.respdd).wait(19).to({_off:false},0).to({scaleY:0.77,x:160,y:324.2},18).to({_off:true},1).wait(20).to({_off:false,scaleY:0.67,x:496.6,y:332.9},0).to({scaleY:0.77,x:160,y:324.2},18).wait(1));

	// RespC
	this.respcc = new lib.rrespc();
	this.respcc.setTransform(496.6,292.4,0.694,0.673);
	this.respcc._off = true;
	new cjs.ButtonHelper(this.respcc, 0, 1, 2, false, new lib.rrespc(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjArQgJgIAAgMQAAgHADgGQAEgGAFgEQAFgCAHgBIAPgDQASgCAKgDIAAgFQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAEgDALIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgSAAQgCgFgBgHQgJAHgJAEQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDAEQgCADAAAFQAAAGAFAFQAFAEAKAAQAHAAAIgEQAHgFAEgGQADgHAAgKIAAgGQgJADgRADg");
	this.shape.setTransform(138.2,281.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGAxIgmhhIASAAIAVA5IAFAUIAFgTIAWg6IASAAIgmBhg");
	this.shape_1.setTransform(128.2,281.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_2.setTransform(121.4,279.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBAQgEgDgCgFQgDgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIAPgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAFABIAIgBIACAPIgMACQgJAAgEgDg");
	this.shape_3.setTransform(116.7,279.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjArQgJgIAAgMQAAgHADgGQAEgGAFgEQAFgCAHgBIAPgDQASgCAKgDIAAgFQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAEgDALIgQgCQACgLAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgSAAQgCgFgBgHQgJAHgJAEQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDAEQgCADAAAFQAAAGAFAFQAFAEAKAAQAHAAAIgEQAHgFAEgGQADgHAAgKIAAgGQgJADgRADg");
	this.shape_4.setTransform(108.6,281.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_5.setTransform(101.3,279.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgOAFgMQAFgMALgGQALgGALAAQAQAAAKAIQAKAJADAPIgQACQgDgKgFgFQgGgFgJAAQgKAAgIAJQgIAJAAASQAAAUAHAIQAIAJAKAAQAKAAAHgFQAGgHACgMIAQACQgCARgLAKQgLAJgRAAQgSAAgMgNg");
	this.shape_6.setTransform(94.7,281.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggAmQgMgNAAgZQAAgaAOgNQANgLARAAQAUAAAMAOQANANABAXQgBASgFAKQgGALgLAGQgKAGgNAAQgTAAgNgNgAgUgbQgHAKAAARQAAATAHAJQAJAJALAAQAMAAAIgJQAIgKAAgSQAAgRgIgKQgIgJgMAAQgLAAgJAJg");
	this.shape_7.setTransform(84.4,281.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbArQgKgIgCgQIAQgCQACAKAGAFQAGAGAKgBQALABAGgFQAFgFAAgGQAAgGgFgDQgDgDgOgDQgQgEgHgDQgHgCgEgGQgEgGAAgHQAAgHADgGQADgFAGgEQAEgDAGgBQAHgDAIAAQAJAAAJAEQAJADAEAGQAEAFACAKIgRACQgBgHgFgFQgFgEgJAAQgLAAgFAEQgEADAAAFQAAAEACACQACADAEACIANAFQARAEAHADQAHABAEAGQAEAGAAAIQAAAJgEAHQgFAHgKAEQgJAEgLAAQgRAAgLgIg");
	this.shape_8.setTransform(74.3,281.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAmIAsAAIgOgkIgIgcQgCANgFANg");
	this.shape_9.setTransform(63.3,279.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgDgGgBQgJAAgIAIQgIAGAAATIAAA0IgRAAIAAhgIAQAAIAAANQAKgQATAAQAJAAAHAEQAIADADAFQAEAFACAHIABARIAAA6g");
	this.shape_10.setTransform(144.5,281.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggAmQgNgNAAgZQABgaAPgNQAMgLARAAQAUAAANAOQAMANAAAXQABASgGAKQgGALgLAGQgLAGgMAAQgTAAgNgNgAgUgbQgIAKAAARQAAATAIAJQAJAJALAAQAMAAAIgJQAJgKAAgSQAAgRgJgKQgIgJgMAAQgLAAgJAJg");
	this.shape_11.setTransform(134,281.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgDgHgBQgJAAgHAIQgIAGAAATIAAA0IgRAAIAAhgIAPAAIAAANQAMgQASAAQAJAAAHAEQAIADAEAFQADAFABAHIABARIAAA6g");
	this.shape_12.setTransform(109.7,281.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAvQgHgEgEgFQgEgFgBgHIgBgQIAAg7IARAAIAAA1IABARQABAHAFAEQAFAEAIAAQAFAAAHgEQAGgEADgHQADgGAAgNIAAgzIARAAIAABhIgPAAIAAgPQgMARgSAAQgIAAgIgDg");
	this.shape_13.setTransform(99.1,281.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjBDIgCgQIAKACQAFAAAEgCIAFgGIAFgMIACgEIgmhhIASAAIAVA5IAFAVIAHgUIAVg6IARAAIgmBiQgGARgBAGQgFAIgFAEQgGAEgIAAQgFAAgGgCg");
	this.shape_14.setTransform(89.2,283.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag3BDIAAiGIAvAAQAOAAAIACQAMADAIAHQALAJAGAPQAFAOAAARQAAAOgEAMQgDAMgGAIQgGAIgGAEQgHAFgKACQgJADgLgBgAglAzIAdAAQAMAAAIgCQAHgDAFgEQAGgHAEgLQADgKAAgOQAAgVgHgLQgHgMgKgEQgHgCgOAAIgdAAg");
	this.shape_15.setTransform(64.1,279.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.shape_9},{t:this.shape_8,p:{x:74.3}},{t:this.shape_7},{t:this.shape_6,p:{x:94.7}},{t:this.shape_5,p:{x:101.3}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:121.4}},{t:this.shape_1},{t:this.shape}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},20).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.shape_15},{t:this.shape_5,p:{x:72.8}},{t:this.shape_8,p:{x:79.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_6,p:{x:120}},{t:this.shape_2,p:{x:126.6}},{t:this.shape_11},{t:this.shape_10}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.respcc).wait(19).to({_off:false},0).to({scaleY:0.77,x:160,y:282.4},14).wait(4).to({_off:true},1).wait(20).to({_off:false,scaleY:0.67,x:496.6,y:292.4},0).to({scaleY:0.77,x:160,y:282.4},14).wait(5));

	// RespB
	this.respbb = new lib.rrespb();
	this.respbb.setTransform(495.9,248.9,0.694,0.673);
	this.respbb._off = true;
	new cjs.ButtonHelper(this.respbb, 0, 1, 2, false, new lib.rrespb(), 3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAEgDALIgQgDQACgKAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAHgJAEQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgFAAgMIAAgFQgJAEgRACg");
	this.shape_16.setTransform(157.2,240.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGAxIgmhhIASAAIAVA5IAFAUIAFgTIAWg6IASAAIgmBhg");
	this.shape_17.setTransform(147.2,240.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHBEIAAhhIAPAAIAABhgAgHgvIAAgTIAPAAIAAATg");
	this.shape_18.setTransform(140.4,238.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCBAQgEgDgCgFQgCgFgBgPIAAg2IgMAAIAAgNIAMAAIAAgZIAPgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAFABIAIgBIACAPIgMACQgJAAgEgDg");
	this.shape_19.setTransform(135.7,238.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAsQgJgJAAgMQAAgHADgGQAEgGAFgEQAFgCAHgCIAPgCQASgCAKgEIAAgEQAAgKgFgFQgGgFgMAAQgLAAgFAEQgGAEgDALIgQgDQACgKAFgGQAFgHAKgDQAKgEAKAAQANAAAIADQAIADAEAEQADAFACAHIABAPIAAAVQAAAXABAGQABAGADAGIgSAAQgCgFgBgHQgJAHgJAEQgGADgKAAQgQAAgJgHgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAFQAFAEAKAAQAHAAAIgEQAHgEAEgIQADgFAAgMIAAgFQgJAEgRACg");
	this.shape_20.setTransform(127.6,240.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcA+QgLgIAAgQIAQACQABAIAGAEQAFAEALAAQAKAAAGgEQAHgFACgJQABgEAAgRQgLANgPAAQgUAAgLgOQgLgPAAgTQAAgOAFgMQAFgMAKgGQAJgHANAAQAQAAAMAPIAAgNIAPAAIAABUQAAAWgFAKQgEAKgLAFQgJAGgOAAQgRAAgLgIgAgRguQgHAJAAASQAAATAHAIQAIAIAKAAQALAAAHgIQAJgIAAgSQAAgTgJgIQgIgKgLAAQgJAAgIAJg");
	this.shape_21.setTransform(116.8,242);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggAmQgMgNAAgZQgBgZAPgOQANgLARAAQAUAAANAOQANANAAAXQgBARgFAMQgGAKgKAGQgLAGgNAAQgTAAgNgNgAgTgaQgIAJAAARQAAATAIAJQAIAJALAAQAMAAAIgJQAIgJAAgTQAAgRgIgJQgIgKgMAAQgLAAgIAKg");
	this.shape_22.setTransform(106.6,240.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgZAyIAAhhIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAGIgGAPQgGgDgGgBQgFABgDADQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_23.setTransform(98.9,240);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAyIAAhhIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAJAGIgGAPQgGgDgGgBQgFABgDADQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_24.setTransform(92.6,240);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AggAmQgMgNAAgYQAAgYANgNQAMgOATAAQAUAAAMAOQANANAAAXIAAAEIhIAAQABAQAJAJQAHAIALAAQAJABAHgGQAGgEAEgKIARABQgEAPgLAJQgLAIgRAAQgTAAgOgNgAgRgdQgIAJgBANIA1AAQgBgNgFgGQgIgKgNAAQgJAAgIAHg");
	this.shape_25.setTransform(83.4,240.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgBBAQgGgDgBgFQgCgFAAgPIAAg2IgNAAIAAgNIANAAIAAgZIAOgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIADAPIgNACQgKAAgCgDg");
	this.shape_26.setTransform(75.6,238.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgGABQgJAAgIAGQgIAHAAATIAAA0IgRAAIAAhhIAQAAIAAAPQAKgRATAAQAJAAAHADQAIADADAGQAEAFACAHIAAARIAAA6g");
	this.shape_27.setTransform(67.6,240);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBEIAAiGIAQAAIAACGg");
	this.shape_28.setTransform(59.7,238.3);

	this.instance = new lib.Interpolación19("synched",0);
	this.instance.setTransform(155.3,323.5);
	this.instance._off = true;

	this.instance_1 = new lib.Interpolación20("synched",0);
	this.instance_1.setTransform(155.3,323.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHABQgIAAgIAGQgIAHAAATIAAA0IgQAAIAAhhIAOAAIAAAPQAMgRASAAQAJAAAIADQAHADAEAGQADAFABAHIABARIAAA6g");
	this.shape_29.setTransform(131.9,240);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AggAmQgMgNAAgZQAAgZAOgOQANgLARAAQAUAAAMAOQANANABAXQgBARgFAMQgGAKgLAGQgKAGgNAAQgTAAgNgNgAgUgaQgHAJAAARQAAATAHAJQAJAJALAAQAMAAAIgJQAIgJAAgTQAAgRgIgJQgIgKgMAAQgLAAgJAKg");
	this.shape_30.setTransform(121.3,240.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgOAFgMQAFgMALgFQALgHALAAQAQAAAKAJQAKAHADAQIgQACQgDgKgFgFQgGgFgJAAQgKAAgIAJQgIAJAAASQAAATAHAKQAIAJAKgBQAKABAHgHQAGgFACgNIAQACQgCARgLAJQgLAKgRAAQgSAAgMgNg");
	this.shape_31.setTransform(107.4,240.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAmQgMgNAAgYQAAgYANgNQANgOASAAQAUAAANAOQAMANAAAXIAAAEIhIAAQABAQAJAJQAHAIALAAQAJABAHgGQAGgEAEgKIARABQgEAPgLAJQgLAIgRAAQgUAAgNgNgAgRgdQgIAJgBANIA1AAQgBgNgFgGQgIgKgNAAQgJAAgIAHg");
	this.shape_32.setTransform(76,240.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAjBEIhGhpIAABpIgRAAIAAiGIASAAIBGBpIAAhpIARAAIAACGg");
	this.shape_33.setTransform(63.8,238.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:116.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:140.4}},{t:this.shape_17},{t:this.shape_16,p:{x:157.2}}]},7).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},14).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.respbb}]},1).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.shape_33},{t:this.shape_32},{t:this.shape_21,p:{x:86.2}},{t:this.shape_16,p:{x:97}},{t:this.shape_31},{t:this.shape_18,p:{x:114}},{t:this.shape_30},{t:this.shape_29}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.respbb).wait(19).to({_off:false},0).to({scaleY:0.77,x:160,y:238.9},11).wait(7).to({_off:true},1).wait(20).to({_off:false,scaleY:0.67,x:495.9,y:248.9},0).to({scaleY:0.77,x:160,y:238.9},11).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({scaleX:2.87,scaleY:4.36},14).to({_off:true,scaleX:1,scaleY:1},5).wait(20));

	// RespA
	this.instance_2 = new lib.Interpolación1("synched",0);
	this.instance_2.setTransform(155.1,224.6);

	this.respaa = new lib.rrespa();
	this.respaa.setTransform(494.5,196.3,0.694,0.673);
	this.respaa._off = true;
	new cjs.ButtonHelper(this.respaa, 0, 1, 2, false, new lib.rrespa(), 3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgjArQgJgIAAgMQAAgHADgGQAEgGAFgEQAFgBAHgCIAPgDQASgCAKgDIAAgFQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAFgDAKIgQgDQACgKAFgHQAFgGAKgDQAKgEAKAAQANAAAIADQAIADAEAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAHAAAIgEQAHgFAEgHQADgFAAgMIAAgFQgJADgRADg");
	this.shape_34.setTransform(136.1,198.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGAxIgmhhIASAAIAVA5IAFAUIAFgTIAWg6IASAAIgmBhg");
	this.shape_35.setTransform(126.1,198.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_36.setTransform(119.3,197);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCBAQgEgDgDgFQgCgFABgPIAAg2IgMAAIAAgNIAMAAIAAgZIAOgKIAAAjIARAAIAAANIgRAAIAAA3IABAKIADADIAGABIAHgBIADAPIgNACQgKAAgDgDg");
	this.shape_37.setTransform(114.6,197.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgjArQgJgIAAgMQAAgHADgGQAEgGAFgEQAFgBAHgCIAPgDQASgCAKgDIAAgFQAAgKgFgEQgGgGgMAAQgLAAgFAEQgGAFgDAKIgQgDQACgKAFgHQAFgGAKgDQAKgEAKAAQANAAAIADQAIADAEAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgSAAQgCgFgBgHQgJAIgJADQgGADgKAAQgQAAgJgIgAgDAGIgOADQgEACgDADQgCAEAAAEQAAAHAFAEQAFAFAKAAQAHAAAIgEQAHgFAEgHQADgFAAgMIAAgFQgJADgRADg");
	this.shape_38.setTransform(106.5,198.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAyAyIAAg8QAAgKgCgFQgCgEgEgCQgEgEgGAAQgKABgHAGQgHAIAAAPIAAA3IgPAAIAAg+QAAgLgEgGQgEgFgJgBQgHAAgGAFQgGADgDAHQgDAIAAAMIAAAyIgQAAIAAhhIAPAAIAAAPQAEgIAIgFQAIgEAKAAQALAAAHAFQAFAEACAJQAMgSATAAQAPAAAHAJQAIAHAAARIAABCg");
	this.shape_39.setTransform(93.4,198.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZAyIAAhhIAPAAIAAAQQAFgLAFgEQADgDAGAAQAIAAAJAFIgGAQQgGgEgGABQgFgBgDAEQgEADgCAGQgDAJAAAKIAAAyg");
	this.shape_40.setTransform(83.1,198.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgHBDIAAhgIAPAAIAABggAgHgwIAAgTIAPAAIAAATg");
	this.shape_41.setTransform(77.1,197);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNBFIAAhUIgOAAIAAgNIAOAAIAAgKQAAgKACgFQACgHAHgDQAEgFALAAQAHAAAIACIgCAPIgKgBQgIAAgDADQgDADAAAJIAAAJIATAAIAAANIgTAAIAABUg");
	this.shape_42.setTransform(72.7,196.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AArBDIgQgoIg3AAIgPAoIgTAAIA0iGIASAAIA3CGgAgIgaIgPAlIAsAAIgOgjIgIgcQgCANgFANg");
	this.shape_43.setTransform(63.3,197);

	this.instance_3 = new lib.Interpolación17("synched",0);
	this.instance_3.setTransform(171.5,187.2);
	this.instance_3._off = true;

	this.text_1 = new cjs.Text("LA SEGUNDA PREGUNTA", "19px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 256;
	this.text_1.setTransform(41.8,174.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgHBDIAAiGIAPAAIAACGg");
	this.shape_44.setTransform(154,197);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHAAQgJABgHAGQgIAIAAASIAAA0IgRAAIAAhhIAQAAIAAAPQAKgRATAAQAJAAAHADQAIADADAGQAEAFABAHIABAQIAAA7g");
	this.shape_45.setTransform(136.1,198.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AggAmQgNgOAAgYQAAgaAQgNQAMgLARAAQAUAAAMANQAOAOAAAXQAAASgGALQgGAKgLAGQgLAGgMAAQgTAAgNgNgAgUgbQgHAKgBARQABASAHAKQAJAKALAAQAMAAAIgKQAJgKAAgSQAAgRgJgKQgIgJgMAAQgLAAgJAJg");
	this.shape_46.setTransform(125.5,198.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgOAFgMQAFgMALgGQALgGALAAQAQAAAKAJQAKAHADAPIgQADQgDgKgFgFQgGgFgJAAQgKAAgIAJQgIAJAAASQAAAUAHAJQAIAIAKABQAKgBAHgFQAGgGACgNIAQACQgCARgLAJQgLAKgRAAQgSAAgMgNg");
	this.shape_47.setTransform(111.6,198.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUA+QgKgGgGgMQgFgLAAgQQAAgOAFgLQAFgLAJgHQAKgGAMgBQAHAAAHAFQAHADAFAHIAAgyIAQAAIAACGIgPAAIAAgMQgKAPgRAAQgLAAgJgHgAgRgJQgHAJAAARQAAATAIAJQAIAKAJAAQALAAAHgJQAIgJAAgTQAAgSgIgJQgIgJgLAAQgJgBgIAKg");
	this.shape_48.setTransform(96.7,197.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAXAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgHAAQgIABgIAGQgIAIAAASIAAA0IgQAAIAAhhIAOAAIAAAPQAMgRASAAQAJAAAIADQAHADAEAGQADAFABAHIACAQIAAA7g");
	this.shape_49.setTransform(86.5,198.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AggAmQgMgOAAgYQgBgaAPgNQANgLARAAQAUAAANANQANAOgBAXQAAASgFALQgGAKgKAGQgLAGgNAAQgTAAgNgNgAgTgbQgIAKAAARQAAASAIAKQAIAKALAAQAMAAAIgKQAIgKAAgSQAAgRgIgKQgIgJgMAAQgLAAgIAJg");
	this.shape_50.setTransform(76,198.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfA9QgNgJgHgRQgIgRABgSQgBgVAJgPQAHgRAPgHQAPgJAQAAQAVAAAOAKQAOALAFATIgSAEQgEgPgJgGQgJgIgOABQgOAAgKAHQgKAIgFANQgEAMAAANQAAAPAFANQAFANALAHQALAGAKABQAPAAALgKQAKgIADgRIASAFQgFAVgPAMQgOAMgWAAQgUAAgOgJg");
	this.shape_51.setTransform(64,197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},12).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.respaa}]},1).to({state:[{t:this.respaa}]},6).to({state:[{t:this.respaa},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:77.1}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:119.3}},{t:this.shape_35},{t:this.shape_34,p:{x:136.1}}]},12).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.text_1}]},10).to({state:[{t:this.respaa}]},1).to({state:[{t:this.respaa}]},6).to({state:[{t:this.respaa},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_41,p:{x:104.5}},{t:this.shape_47},{t:this.shape_36,p:{x:118.2}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_34,p:{x:146.6}},{t:this.shape_44}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.31,scaleY:2.41},12).to({scaleX:1.26,scaleY:1.57},6).to({_off:true,scaleX:0.69,scaleY:0.67,x:494.5,y:196.3,mode:"independent"},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.respaa).wait(18).to({_off:false},1).to({scaleX:0.69,scaleY:0.77,x:160},6).wait(12).to({_off:true},1).wait(20).to({_off:false,scaleX:0.69,scaleY:0.67,x:494.5},0).to({scaleX:0.69,scaleY:0.77,x:160},6).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({_off:false},0).to({scaleX:1.27,scaleY:4.56},9).to({_off:true,scaleX:1,scaleY:1,x:41.8,y:174.6,text:"LA SEGUNDA PREGUNTA",font:NaN,color:NaN,textAlign:0,lineHeight:23.3,lineWidth:256},10).wait(20));

	// Pregunta
	this.instance_4 = new lib.Interpolación3("synched",0);
	this.instance_4.setTransform(156,104.6);

	this.instance_5 = new lib.Interpolación11("synched",0);
	this.instance_5.setTransform(505.9,105.1,1,0.984);
	this.instance_5._off = true;

	this.instance_6 = new lib.Interpolación12("synched",0);
	this.instance_6.setTransform(160.1,112,1,1.066);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgZArQgJgHgDgQIAQgDQABAKAGAFQAGAFAJABQAKgBAGgEQAFgFAAgGQAAgGgFgDQgDgCgNgDQgPgGgHgCQgGgCgEgGQgDgGAAgIQAAgGADgFQACgGAFgEQAEgDAGgCQAHgCAHAAQAJAAAIADQAIAEAEAFQAEAHABAJIgPACQgBgIgFgEQgFgEgIAAQgKAAgEAEQgFAEAAAEQAAAEACADQACACAEACIAMAFQAQAEAHADQAGABAEAGQAEAFAAAJQAAAIgFAIQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_52.setTransform(82.6,137.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgYQAAgYAMgNQAMgOARAAQASAAANAOQALANAAAXIAAAEIhDAAQABAQAIAJQAIAIAJABQAJAAAFgGQAHgEADgKIAQACQgEAOgJAJQgLAIgQAAQgTAAgLgNgAgQgdQgHAJgBANIAxAAQgBgNgEgGQgIgKgMAAQgIAAgIAHg");
	this.shape_53.setTransform(73.3,137.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGBEIAAiGIANAAIAACGg");
	this.shape_54.setTransform(66.4,135.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgnBFIAAiHIAPAAIAAAOQAFgIAGgEQAGgEAHAAQAMAAAJAHQAJAGAFAMQAFAMAAAOQAAAPgGALQgFAMgJAGQgKAGgKAAQgGAAgHgEQgGgDgEgFIAAAwgAgRgsQgHAJAAAUQAAAQAHAJQAHAKAKAAQAJAAAHgKQAIgJAAgSQAAgTgIgJQgHgJgJAAQgJAAgIAKg");
	this.shape_55.setTransform(59.8,139.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAuAyIAAg8QABgKgCgEQgBgFgFgDQgEgCgFAAQgKAAgGAGQgGAIAAAPIAAA3IgOAAIAAg+QAAgLgEgGQgDgFgKAAQgGAAgFADQgGAEgCAHQgDAIAAAMIAAAyIgQAAIAAhhIAOAAIAAAPQAEgIAIgEQAHgFAJAAQALAAAGAFQAEAEADAIQALgRASAAQAOAAAHAIQAHAJAAARIAABBg");
	this.shape_56.setTransform(47.2,137.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGBEIAAhhIANAAIAABhgAgGgvIAAgTIANAAIAAATg");
	this.shape_57.setTransform(37.8,135.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgZArQgJgHgDgQIAQgDQABAKAGAFQAGAFAJABQAKgBAGgEQAFgFAAgGQAAgGgFgDQgDgCgNgDQgPgGgHgCQgGgCgEgGQgDgGAAgIQAAgGADgFQACgGAFgEQAEgDAGgCQAHgCAHAAQAJAAAIADQAIAEAEAFQAEAHABAJIgPACQgBgIgFgEQgFgEgIAAQgKAAgEAEQgFAEAAAEQAAAEACADQACACAEACIAMAFQAQAEAHADQAGABAEAGQAEAFAAAJQAAAIgFAIQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_58.setTransform(31.3,137.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQATAAALANQAMAOAAAXIAAAEIhDAAQABAQAIAJQAHAJAKAAQAJgBAFgFQAHgEAEgLIAPADQgDAOgKAJQgLAIgQAAQgSAAgMgNgAgQgdQgHAJgBAMIAyAAQgCgMgEgHQgIgJgMAAQgJAAgHAHg");
	this.shape_59.setTransform(249,114.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QAAgKgDgFQgBgFgEgDQgGgEgFAAQgIABgIAGQgHAIAAASIAAA0IgQAAIAAhhIAPAAIAAAPQAJgRASAAQAIAAAHADQAHADAEAGQADAFABAHIABAQIAAA7g");
	this.shape_60.setTransform(239.2,114.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgeAmQgMgOAAgYQAAgaAOgNQAMgLAQAAQASAAAMANQANAOAAAXQAAASgGALQgFAKgKAGQgLAGgLAAQgSAAgMgNgAgSgbQgIAKAAARQAAASAIAKQAIAKAKAAQALAAAIgKQAHgKAAgSQAAgRgHgKQgIgJgLAAQgKAAgIAJg");
	this.shape_61.setTransform(229.3,114.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGBDIAAhgIANAAIAABggAgGgwIAAgTIANAAIAAATg");
	this.shape_62.setTransform(222.4,112.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgbAmQgMgNAAgZQABgOAFgMQAEgMALgGQAJgGAKAAQAQAAAJAJQAKAHACAPIgPADQgCgKgFgFQgGgFgIAAQgJAAgIAJQgHAJgBASQAAAUAIAJQAHAIAJABQAJgBAHgGQAFgFADgNIAOACQgCARgKAJQgKAKgQAAQgQAAgMgNg");
	this.shape_63.setTransform(216.3,114.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGBDIAAhgIANAAIAABggAgGgwIAAgTIANAAIAAATg");
	this.shape_64.setTransform(209.6,112.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgZArQgJgIgDgPIAQgDQABAKAGAFQAGAGAJAAQAKAAAGgFQAFgFAAgGQAAgGgFgDQgDgCgNgEQgPgEgHgDQgGgCgEgGQgDgGAAgHQAAgHADgFQACgGAFgEQAEgDAGgCQAHgCAHAAQAJAAAIADQAIAEAEAFQAEAHABAJIgPACQgBgHgFgFQgFgEgIAAQgKAAgEAEQgFADAAAGQAAADACACQACADAEACIAMAEQAQAFAHADQAGABAEAGQAEAGAAAIQAAAIgFAIQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_65.setTransform(203.1,114.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgeAmQgMgOAAgYQAAgaAOgNQAMgLAQAAQASAAAMANQANAOAAAXQAAASgGALQgFAKgKAGQgLAGgLAAQgSAAgMgNgAgSgbQgIAKAAARQAAASAIAKQAIAKAKAAQALAAAIgKQAHgKAAgSQAAgRgHgKQgIgJgLAAQgKAAgIAJg");
	this.shape_66.setTransform(193.8,114.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgnBFIAAiHIAPAAIAAANQAFgHAGgEQAGgEAHAAQAMAAAJAGQAJAHAFAMQAFAMAAAOQAAAPgGAKQgFANgJAGQgKAGgKAAQgGAAgHgDQgGgEgEgFIAAAwgAgRgtQgHAKAAAUQAAAQAHAKQAHAIAKABQAJAAAHgKQAIgKAAgRQAAgTgIgKQgHgIgJgBQgJABgIAJg");
	this.shape_67.setTransform(184.2,116.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgeAmQgMgOAAgYQAAgaAOgNQAMgLAQAAQASAAAMANQANAOAAAXQAAASgGALQgFAKgKAGQgLAGgLAAQgSAAgMgNgAgSgbQgIAKAAARQAAASAIAKQAIAKAKAAQALAAAIgKQAHgKAAgSQAAgRgHgKQgIgJgLAAQgKAAgIAJg");
	this.shape_68.setTransform(174,114.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgXAyIAAhhIANAAIAAAQQAGgLAEgEQADgDAFAAQAJAAAHAFIgEAQQgHgEgFABQgGgBgCAEQgEADgBAGQgDAJAAAKIAAAyg");
	this.shape_69.setTransform(166.9,114.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgnBFIAAiHIAPAAIAAANQAFgHAGgEQAGgEAHAAQAMAAAJAGQAJAHAFAMQAFAMAAAOQAAAPgGAKQgFANgJAGQgKAGgKAAQgGAAgHgDQgGgEgEgFIAAAwgAgRgtQgHAKAAAUQAAAQAHAKQAHAIAKABQAJAAAHgKQAIgKAAgRQAAgTgIgKQgHgIgJgBQgJABgIAJg");
	this.shape_70.setTransform(158.5,116.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgZArQgJgIgDgPIAQgDQABAKAGAFQAGAGAJAAQAKAAAGgFQAFgFAAgGQAAgGgFgDQgDgCgNgEQgPgEgHgDQgGgCgEgGQgDgGAAgHQAAgHADgFQACgGAFgEQAEgDAGgCQAHgCAHAAQAJAAAIADQAIAEAEAFQAEAHABAJIgPACQgBgHgFgFQgFgEgIAAQgKAAgEAEQgFADAAAGQAAADACACQACADAEACIAMAEQAQAFAHADQAGABAEAGQAEAGAAAIQAAAIgFAIQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_71.setTransform(143.9,114.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAHgCIANgDQARgCAJgEIAAgEQAAgKgEgEQgHgGgKAAQgKAAgGAEQgEAFgDAKIgPgDQACgKAEgHQAFgGAKgDQAJgEAJAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgQAAQgDgFAAgHQgKAIgHADQgHADgIAAQgQAAgIgIgAgCAGIgOADQgEACgCADQgCAEgBAEQAAAHAGAEQAEAFAJAAQAHAAAHgEQAIgFACgHQADgFAAgMIAAgFQgJADgOADg");
	this.shape_72.setTransform(134.6,114.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgGBDIAAiGIANAAIAACGg");
	this.shape_73.setTransform(127.6,112.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAGgCIAOgDQARgCAJgEIAAgEQAAgKgEgEQgHgGgKAAQgKAAgFAEQgFAFgDAKIgQgDQADgKAFgHQAEgGAKgDQAIgEAKAAQAMAAAIADQAHADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgQAAQgDgFgBgHQgIAIgJADQgFADgKAAQgPAAgIgIgAgDAGIgNADQgEACgCADQgDAEABAEQAAAHAEAEQAFAFAJAAQAHAAAHgEQAIgFADgHQACgFAAgMIAAgFQgJADgPADg");
	this.shape_74.setTransform(115.8,114.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQATAAALANQAMAOAAAXIAAAEIhDAAQABAQAIAJQAHAJAKAAQAJgBAFgFQAHgEAEgLIAPADQgDAOgKAJQgLAIgQAAQgSAAgMgNgAgQgdQgHAJgBAMIAyAAQgCgMgEgHQgIgJgMAAQgJAAgHAHg");
	this.shape_75.setTransform(101,114.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgbAmQgMgNAAgZQAAgOAGgMQAFgMAJgGQALgGAKAAQAOAAAKAJQAKAHADAPIgQADQgCgKgGgFQgFgFgIAAQgKAAgHAJQgHAJAAASQgBAUAIAJQAGAIAKABQAKgBAFgGQAHgFABgNIAPACQgCARgKAJQgLAKgOAAQgSAAgLgNg");
	this.shape_76.setTransform(91.9,114.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQASAAANANQALAOAAAXIAAAEIhDAAQABAQAIAJQAHAJAKAAQAJgBAFgFQAHgEADgLIARADQgEAOgLAJQgKAIgQAAQgTAAgLgNgAgQgdQgHAJgBAMIAxAAQgBgMgEgHQgIgJgMAAQgJAAgHAHg");
	this.shape_77.setTransform(82.2,114.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QAAgKgCgFQgCgFgEgDQgFgEgGAAQgIABgIAGQgHAIAAASIAAA0IgQAAIAAhhIAPAAIAAAPQAKgRARAAQAIAAAHADQAHADAEAGQADAFABAHIABAQIAAA7g");
	this.shape_78.setTransform(72.3,114.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQASAAAMANQAMAOAAAXIAAAEIhDAAQABAQAIAJQAIAJAJAAQAIgBAHgFQAGgEAEgLIAQADQgFAOgKAJQgKAIgQAAQgTAAgLgNgAgQgdQgHAJgBAMIAyAAQgCgMgFgHQgHgJgMAAQgIAAgIAHg");
	this.shape_79.setTransform(62.5,114.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIANgKIAAAjIAQAAIAAANIgQAAIAAA3IABAKIADADIAFABIAHgBIACAPIgLACQgJAAgDgDg");
	this.shape_80.setTransform(55.2,112.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgXAyIAAhhIANAAIAAAQQAGgLAEgEQADgDAFAAQAJAAAHAFIgEAQQgHgEgFABQgGgBgCAEQgEADgBAGQgDAJAAAKIAAAyg");
	this.shape_81.setTransform(50.4,114.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQASAAANANQALAOAAAXIAAAEIhDAAQABAQAIAJQAHAJAKAAQAJgBAFgFQAHgEADgLIAQADQgDAOgLAJQgKAIgQAAQgTAAgLgNgAgQgdQgHAJgBAMIAxAAQgBgMgEgHQgIgJgMAAQgJAAgHAHg");
	this.shape_82.setTransform(41.7,114.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgnBFIAAiHIAPAAIAAANQAFgHAGgEQAGgEAHAAQAMAAAJAGQAJAHAFAMQAFAMAAAOQAAAPgGAKQgFANgJAGQgKAGgKAAQgGAAgHgDQgGgEgEgFIAAAwgAgRgtQgHAKAAAUQAAAQAHAKQAHAIAKABQAJAAAHgKQAIgKAAgRQAAgTgIgKQgHgIgJgBQgJABgIAJg");
	this.shape_83.setTransform(32.1,116.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgZArQgJgHgDgRIAQgCQABAKAGAFQAGAGAJgBQAKABAGgFQAFgFAAgGQAAgGgFgDQgDgDgNgDQgPgEgHgDQgGgCgEgGQgDgGAAgHQAAgHADgGQACgFAFgEQAEgDAGgBQAHgDAHAAQAJAAAIAEQAIADAEAGQAEAFABAKIgPACQgBgHgFgFQgFgEgIAAQgKAAgEAEQgFADAAAFQAAAEACACQACADAEACIAMAEQAQAFAHADQAGABAEAGQAEAGAAAIQAAAJgFAHQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_84.setTransform(279.2,91);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgeAmQgMgNAAgZQAAgaAOgNQAMgLAQAAQASAAAMAOQANANAAAXQAAASgGAKQgFALgKAGQgLAGgLAAQgSAAgMgNgAgSgbQgIAKAAARQAAATAIAJQAIAJAKAAQALAAAIgJQAHgKAAgSQAAgRgHgKQgIgJgLAAQgKAAgIAJg");
	this.shape_85.setTransform(269.9,91);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgFgBgPIAAg2IgLAAIAAgNIALAAIAAgZIAOgKIAAAjIAQAAIAAANIgQAAIAAA3IABAKIADADIAFABIAHgBIACAPIgLACQgJAAgDgDg");
	this.shape_86.setTransform(262.5,89.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QAAgKgCgFQgCgFgEgDQgGgDgFgBQgIAAgIAIQgHAGAAATIAAA0IgQAAIAAhgIAPAAIAAANQAKgQARAAQAIAAAHAEQAHADAEAFQADAFABAHIABARIAAA6g");
	this.shape_87.setTransform(255,90.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQATAAALAOQAMANAAAXIAAAEIhDAAQABAQAIAJQAIAJAJgBQAIAAAHgEQAGgFAEgLIAQACQgFAPgKAJQgKAIgQAAQgTAAgLgNgAgQgcQgHAHgBANIAyAAQgCgMgFgHQgHgJgMAAQgIAAgIAIg");
	this.shape_88.setTransform(245.2,91);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAvAyIAAg8QgBgKgBgFQgCgEgEgDQgDgDgGAAQgKAAgGAIQgHAGABAQIAAA3IgOAAIAAg+QAAgLgEgFQgDgHgKAAQgGAAgFAEQgGAEgCAIQgDAGAAANIAAAyIgQAAIAAhgIAOAAIAAANQAEgHAIgEQAHgFAJAAQAKAAAHAFQAFAFACAHQALgRARAAQAPAAAHAIQAHAJAAAQIAABCg");
	this.shape_89.setTransform(232.8,90.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQASAAANAOQALANAAAXIAAAEIhDAAQABAQAIAJQAIAJAJgBQAJAAAFgEQAHgFADgLIAQACQgEAPgJAJQgLAIgQAAQgTAAgLgNgAgQgcQgHAHgBANIAxAAQgBgMgEgHQgIgJgMAAQgIAAgIAIg");
	this.shape_90.setTransform(220.5,91);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgGBDIAAiGIANAAIAACGg");
	this.shape_91.setTransform(213.5,89.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQATAAAMAOQALANAAAXIAAAEIhDAAQABAQAIAJQAHAJAKgBQAIAAAHgEQAGgFADgLIARACQgFAPgKAJQgKAIgQAAQgTAAgLgNgAgQgcQgHAHgBANIAxAAQAAgMgGgHQgHgJgMAAQgJAAgHAIg");
	this.shape_92.setTransform(206.7,91);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgZArQgJgHgDgRIAQgCQABAKAGAFQAGAGAJgBQAKABAGgFQAFgFAAgGQAAgGgFgDQgDgDgNgDQgPgEgHgDQgGgCgEgGQgDgGAAgHQAAgHADgGQACgFAFgEQAEgDAGgBQAHgDAHAAQAJAAAIAEQAIADAEAGQAEAFABAKIgPACQgBgHgFgFQgFgEgIAAQgKAAgEAEQgFADAAAFQAAAEACACQACADAEACIAMAEQAQAFAHADQAGABAEAGQAEAGAAAIQAAAJgFAHQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_93.setTransform(192.3,91);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQASAAANAOQALANAAAXIAAAEIhDAAQABAQAIAJQAHAJAKgBQAJAAAFgEQAHgFADgLIARACQgEAPgLAJQgKAIgQAAQgTAAgLgNgAgQgcQgHAHgBANIAxAAQAAgMgGgHQgHgJgMAAQgJAAgHAIg");
	this.shape_94.setTransform(182.9,91);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgBBAQgFgDgCgFQgBgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIANgKIAAAjIAQAAIAAANIgQAAIAAA3IABAKIACADIAGABIAHgBIACAPIgMACQgIAAgDgDg");
	this.shape_95.setTransform(175.6,89.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAVAyIAAg6QAAgKgCgFQgBgFgFgDQgEgDgHgBQgIAAgHAIQgHAGAAATIAAA0IgQAAIAAhgIAOAAIAAANQALgQAQAAQAJAAAHAEQAHADADAFQAEAFACAHIAAARIAAA6g");
	this.shape_96.setTransform(168.1,90.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQATAAALAOQAMANAAAXIAAAEIhDAAQABAQAIAJQAIAJAJgBQAIAAAHgEQAGgFAEgLIAPACQgDAPgKAJQgLAIgQAAQgSAAgMgNgAgQgcQgHAHgBANIAyAAQgCgMgFgHQgHgJgMAAQgIAAgIAIg");
	this.shape_97.setTransform(158.2,91);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGBDIAAhgIANAAIAABggAgGgwIAAgTIANAAIAAATg");
	this.shape_98.setTransform(151.4,89.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgUAvQgHgEgDgFQgEgFgBgHIgBgQIAAg7IAQAAIAAA1IABARQABAHAFAEQAFAEAHAAQAFAAAGgEQAGgEADgHQACgGAAgNIAAgzIAQAAIAABhIgOAAIAAgPQgLARgQAAQgJAAgHgDg");
	this.shape_99.setTransform(144.4,91.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgaA+QgKgIAAgQIAPADQABAHAFADQAFAFAKAAQAJAAAGgFQAGgEACgIQABgGAAgQQgKANgOAAQgSAAgLgPQgKgPAAgSQAAgOAFgMQAFgMAJgHQAJgGALAAQAPAAALAOIAAgLIAOAAIAABSQAAAYgEAKQgFAJgJAFQgKAGgMAAQgQAAgKgIgAgQguQgHAJAAASQAAATAHAHQAHAJAJAAQALAAAHgJQAIgHAAgSQAAgSgIgKQgHgJgLAAQgIAAgIAJg");
	this.shape_100.setTransform(134.3,92.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGBDIAAhgIANAAIAABggAgGgwIAAgTIANAAIAAATg");
	this.shape_101.setTransform(127.7,89.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgZArQgJgHgDgRIAQgCQABAKAGAFQAGAGAJgBQAKABAGgFQAFgFAAgGQAAgGgFgDQgDgDgNgDQgPgEgHgDQgGgCgEgGQgDgGAAgHQAAgHADgGQACgFAFgEQAEgDAGgBQAHgDAHAAQAJAAAIAEQAIADAEAGQAEAFABAKIgPACQgBgHgFgFQgFgEgIAAQgKAAgEAEQgFADAAAFQAAAEACACQACADAEACIAMAEQAQAFAHADQAGABAEAGQAEAGAAAIQAAAJgFAHQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_102.setTransform(121.2,91);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgZArQgJgHgDgRIAQgCQABAKAGAFQAGAGAJgBQAKABAGgFQAFgFAAgGQAAgGgFgDQgDgDgNgDQgPgEgHgDQgGgCgEgGQgDgGAAgHQAAgHADgGQACgFAFgEQAEgDAGgBQAHgDAHAAQAJAAAIAEQAIADAEAGQAEAFABAKIgPACQgBgHgFgFQgFgEgIAAQgKAAgEAEQgFADAAAFQAAAEACACQACADAEACIAMAEQAQAFAHADQAGABAEAGQAEAGAAAIQAAAJgFAHQgEAHgJAEQgJAEgKAAQgQAAgKgIg");
	this.shape_103.setTransform(107.3,91);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgeAmQgMgNAAgZQAAgaAOgNQAMgLAQAAQASAAAMAOQANANAAAXQAAASgGAKQgFALgKAGQgLAGgLAAQgSAAgMgNgAgSgbQgIAKAAARQAAATAIAJQAIAJAKAAQALAAAIgJQAHgKAAgSQAAgRgHgKQgIgJgLAAQgKAAgIAJg");
	this.shape_104.setTransform(98,91);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgGBDIAAiGIANAAIAACGg");
	this.shape_105.setTransform(91.1,89.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQASAAAMAOQAMANAAAXIAAAEIhDAAQABAQAIAJQAIAJAJgBQAJAAAFgEQAHgFADgLIAQACQgEAPgJAJQgLAIgQAAQgSAAgMgNgAgQgcQgHAHgBANIAxAAQgBgMgEgHQgIgJgMAAQgIAAgIAIg");
	this.shape_106.setTransform(79.3,91);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgTA+QgJgGgGgMQgEgMAAgOQgBgPAFgKQAFgMAJgHQAJgGALAAQAHAAAHADQAGAFAEAFIAAgxIAQAAIAACGIgPAAIAAgMQgJAOgQAAQgKABgJgHgAgQgKQgGAKAAASQgBASAIAKQAIAJAHAAQALAAAHgJQAHgJAAgSQAAgTgHgJQgHgKgLAAQgIABgIAIg");
	this.shape_107.setTransform(69.1,89.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgGBDIAAiGIANAAIAACGg");
	this.shape_108.setTransform(57.5,89.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AghAsQgIgJAAgMQAAgHADgGQADgGAFgEQAFgCAGgBIAOgDQARgCAJgDIAAgFQAAgKgFgEQgFgGgLAAQgKAAgGAEQgFAEgCALIgPgCQABgLAGgGQAEgHAJgDQAKgEAJAAQAMAAAIADQAHADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgRAAQgCgFAAgHQgKAHgHAEQgGADgKAAQgPAAgIgHgAgCAGIgOADQgEACgCAEQgDADAAAFQABAGAFAFQAEAEAJAAQAHAAAHgEQAHgFADgGQADgHAAgKIAAgGQgJADgOADg");
	this.shape_109.setTransform(50.6,91);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgUAvQgHgEgDgFQgEgFgBgHIgBgQIAAg7IAQAAIAAA1IABARQABAHAFAEQAFAEAHAAQAFAAAGgEQAGgEADgHQACgGAAgNIAAgzIAQAAIAABhIgOAAIAAgPQgLARgQAAQgJAAgHgDg");
	this.shape_110.setTransform(40.7,91.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgbAmQgMgNAAgZQAAgOAGgMQAFgMAJgGQAKgGALAAQAOAAAKAIQAKAJACAPIgPACQgCgKgGgFQgFgFgIAAQgJAAgIAJQgHAJAAASQgBAUAIAIQAGAJAKAAQAJAAAHgFQAFgHACgMIAPACQgCARgKAKQgLAJgOAAQgSAAgLgNg");
	this.shape_111.setTransform(31.7,91);

	this.instance_7 = new lib.Interpolación14("synched",0);
	this.instance_7.setTransform(163.2,58.4);
	this.instance_7._off = true;

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgeAmQgMgNAAgZQAAgZAOgOQAMgLAQAAQASAAAMAOQANANAAAXQAAARgGALQgFALgKAGQgLAGgLAAQgSAAgMgNgAgSgaQgIAJAAARQAAATAIAJQAIAKAKAAQALAAAIgKQAHgJAAgTQAAgRgHgJQgIgKgLAAQgKAAgIAKg");
	this.shape_112.setTransform(89.1,137.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIANgKIAAAjIAQAAIAAANIgQAAIAAA3IABAKIADADIAFABIAHgBIACAPIgMACQgIAAgDgDg");
	this.shape_113.setTransform(81.8,135.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QgBgKgBgFQgCgFgFgDQgFgEgFABQgJAAgHAGQgHAHAAATIAAA0IgQAAIAAhhIAPAAIAAAPQAKgRAQAAQAJAAAHADQAHADADAGQAEAFACAHIAAARIAAA6g");
	this.shape_114.setTransform(74.3,137.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgQBWIADgPIAHACQAFAAABgEQABgDAAgOIAAhlIAQAAIAABmQAAASgEAHQgGAJgLAAQgHAAgFgBgAABhDIAAgTIAQAAIAAATg");
	this.shape_115.setTransform(56.6,137.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QAAgKgDgFQgBgFgEgDQgGgEgFABQgIAAgIAGQgHAHAAATIAAA0IgQAAIAAhhIAPAAIAAAPQAJgRASAAQAIAAAHADQAHADAEAGQADAFABAHIABARIAAA6g");
	this.shape_116.setTransform(50.6,137.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgeAmQgMgNAAgZQAAgZAOgOQAMgLAQAAQASAAAMAOQANANAAAXQAAARgGALQgFALgKAGQgLAGgLAAQgSAAgMgNgAgSgaQgIAJAAARQAAATAIAJQAIAKAKAAQALAAAIgKQAHgJAAgTQAAgRgHgJQgIgKgLAAQgKAAgIAKg");
	this.shape_117.setTransform(40.8,137.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgbAmQgMgNAAgZQAAgOAGgMQAFgMAJgFQAKgHALAAQAOAAAKAIQAKAIACAQIgPACQgCgKgGgFQgFgFgIAAQgJAAgIAJQgHAJAAASQgBATAIAJQAGAKAKAAQAJAAAHgHQAFgFACgNIAPACQgCARgKAJQgLAKgOAAQgSAAgLgNg");
	this.shape_118.setTransform(31.7,137.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgTA+QgKgGgFgMQgEgLgBgQQAAgOAFgLQAFgLAJgHQAJgGALgBQAHAAAGAFQAHADAEAHIAAgyIAPAAIAACGIgOAAIAAgMQgIAPgRAAQgKAAgJgHgAgPgJQgIAJAAARQAAATAIAJQAHAKAIAAQALAAAHgJQAIgJAAgTQAAgSgIgJQgHgJgLAAQgIgBgHAKg");
	this.shape_119.setTransform(215,112.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAGgCIAOgDQARgCAJgEIAAgEQAAgKgFgEQgFgGgLAAQgKAAgGAEQgFAFgCAKIgPgDQABgKAGgHQAEgGAJgDQAKgEAJAAQAMAAAIADQAHADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgRAAQgCgFAAgHQgKAIgHADQgGADgKAAQgPAAgIgIgAgCAGIgOADQgEACgCADQgDAEAAAEQABAHAFAEQAEAFAJAAQAHAAAHgEQAHgFADgHQADgFAAgMIAAgFQgJADgOADg");
	this.shape_120.setTransform(200.5,114.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQATAAALANQAMAOAAAXIAAAEIhDAAQABAQAIAJQAIAJAJAAQAIgBAHgFQAGgEAEgLIAQADQgFAOgKAJQgKAIgQAAQgTAAgLgNgAgQgdQgHAJgBAMIAyAAQgCgMgFgHQgHgJgMAAQgIAAgIAHg");
	this.shape_121.setTransform(170.9,114.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIANgKIAAAjIAQAAIAAANIgQAAIAAA3IABAKIADADIAFABIAHgBIACAPIgMACQgIAAgDgDg");
	this.shape_122.setTransform(163.6,112.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAHgCIANgDQARgCAJgEIAAgEQAAgKgEgEQgHgGgKAAQgKAAgGAEQgEAFgDAKIgQgDQADgKAEgHQAFgGAKgDQAIgEAKAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgQAAQgDgFgBgHQgIAIgIADQgHADgIAAQgQAAgIgIgAgDAGIgNADQgEACgCADQgCAEAAAEQgBAHAGAEQAEAFAJAAQAHAAAHgEQAIgFADgHQACgFAAgMIAAgFQgIADgQADg");
	this.shape_123.setTransform(151.1,114.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QAAgKgCgFQgCgFgFgDQgFgEgFAAQgJABgHAGQgHAIAAASIAAA0IgQAAIAAhhIAPAAIAAAPQAKgRAQAAQAJAAAHADQAHADADAGQAEAFACAHIAAAQIAAA7g");
	this.shape_124.setTransform(132.4,114.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgdAmQgMgOAAgXQAAgXAMgOQAMgOARAAQASAAANANQALAOAAAXIAAAEIhDAAQABAQAIAJQAIAJAJAAQAJgBAFgFQAHgEADgLIAQADQgEAOgJAJQgLAIgQAAQgSAAgMgNgAgQgdQgHAJgBAMIAxAAQgBgMgEgHQgIgJgMAAQgIAAgIAHg");
	this.shape_125.setTransform(122.5,114.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAJAYIgEgYIAAgXIASAAIAAAXIgFAYgAgSAYIgEgYIAAgXIASAAIAAAXIgEAYg");
	this.shape_126.setTransform(109.5,108);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AghBDIgBgQIAIACQAGAAADgCQADgCACgEIAFgMIABgEIgjhhIARAAIATA5IAFAVIAGgUIAUg6IAQAAIgjBiIgHAXQgEAIgGAEQgFAEgIAAQgEAAgGgCg");
	this.shape_127.setTransform(101.9,116.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAJAYIgEgYIAAgXIASAAIAAAXIgFAYgAgSAYIgEgYIAAgXIASAAIAAAXIgEAYg");
	this.shape_128.setTransform(94.3,108);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAGgCIAOgDQARgCAJgEIAAgEQAAgKgEgEQgHgGgKAAQgKAAgFAEQgFAFgDAKIgQgDQADgKAEgHQAFgGAKgDQAIgEAKAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgQAAQgDgFgBgHQgIAIgJADQgFADgKAAQgPAAgIgIgAgDAGIgNADQgEACgCADQgDAEABAEQAAAHAEAEQAFAFAJAAQAHAAAHgEQAIgFADgHQACgFAAgMIAAgFQgJADgPADg");
	this.shape_129.setTransform(81.2,114.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgYAyIAAhhIAPAAIAAAQQAFgLAEgEQADgDAFAAQAIAAAJAFIgGAQQgGgEgFABQgGgBgCAEQgDADgCAGQgDAJAAAKIAAAyg");
	this.shape_130.setTransform(74,114.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgYA2IAAAMIgPAAIAAiGIARAAIAAAxQAJgOAOAAQAIAAAHAFQAIADAFAHQAFAHADAJQACAHABALQAAAZgMAOQgMAOgQAAQgOAAgKgPgAgRgJQgHAJAAARQAAARAEAIQAIANAMAAQAIAAAIgKQAHgJAAgTQABgRgIgJQgGgKgKABQgJAAgIAJg");
	this.shape_131.setTransform(65.7,112.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAGgCIAOgDQARgCAJgEIAAgEQAAgKgEgEQgHgGgKAAQgKAAgFAEQgFAFgDAKIgQgDQADgKAFgHQAEgGAKgDQAIgEAKAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAHADAFIgQAAQgDgFgBgHQgIAIgJADQgFADgKAAQgPAAgIgIgAgDAGIgNADQgEACgCADQgDAEABAEQAAAHAEAEQAFAFAJAAQAHAAAHgEQAIgFADgHQACgFAAgMIAAgFQgJADgPADg");
	this.shape_132.setTransform(55.5,114.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AghArQgIgIAAgMQAAgHADgGQADgGAFgEQAFgBAGgCIAOgDQARgCAJgEIAAgEQAAgKgFgEQgFgGgLAAQgKAAgGAEQgFAFgCAKIgPgDQABgKAGgHQAEgGAJgDQAKgEAJAAQAMAAAIADQAHADADAFQAEAEABAHIABAQIAAATQAAAYABAGQABAHADAFIgRAAQgCgFAAgHQgJAIgJADQgGADgJAAQgPAAgIgIgAgCAGIgOADQgEACgCADQgDAEAAAEQABAHAEAEQAFAFAJAAQAHAAAHgEQAHgFADgHQADgFAAgMIAAgFQgIADgPADg");
	this.shape_133.setTransform(41.7,114.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AghAsQgIgJAAgMQAAgHADgGQADgGAFgEQAFgCAHgBIANgDQARgCAJgDIAAgFQAAgKgEgEQgHgGgKAAQgKAAgFAEQgGAEgCALIgQgCQACgLAFgGQAFgHAKgDQAJgEAJAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgQAAQgDgFgBgHQgIAHgJAEQgGADgIAAQgQAAgIgHgAgDAGIgNADQgEACgCAEQgDADABAFQAAAGAEAFQAFAEAJAAQAHAAAHgEQAIgFADgGQACgHAAgKIAAgGQgIADgQADg");
	this.shape_134.setTransform(289.6,91);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AghAsQgIgJAAgMQAAgHADgGQADgGAFgEQAFgCAHgBIANgDQARgCAJgDIAAgFQAAgKgEgEQgHgGgKAAQgKAAgFAEQgFAEgDALIgQgCQADgLAEgGQAFgHAKgDQAIgEAKAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgQAAQgDgFgBgHQgIAHgIAEQgHADgIAAQgQAAgIgHgAgDAGIgNADQgEACgCAEQgCADgBAFQAAAGAGAFQAEAEAJAAQAHAAAHgEQAIgFACgGQADgHAAgKIAAgGQgIADgQADg");
	this.shape_135.setTransform(270.8,91);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgTA+QgJgGgGgMQgEgMAAgOQgBgPAFgKQAFgMAJgHQAJgGALAAQAHAAAHADQAGAFAEAFIAAgxIAQAAIAACGIgPAAIAAgMQgIAOgRAAQgKABgJgHgAgQgKQgGAKgBASQAAASAIAKQAHAJAIAAQALAAAHgJQAHgJAAgSQAAgTgHgJQgIgKgKAAQgIABgIAIg");
	this.shape_136.setTransform(245.8,89.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AghAsQgIgJAAgMQAAgHADgGQADgGAFgEQAFgCAHgBIANgDQARgCAJgDIAAgFQAAgKgEgEQgHgGgKAAQgKAAgGAEQgEAEgDALIgPgCQACgLAEgGQAFgHAKgDQAJgEAJAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgQAAQgDgFAAgHQgKAHgHAEQgHADgIAAQgQAAgIgHgAgCAGIgOADQgEACgCAEQgCADgBAFQAAAGAGAFQAEAEAJAAQAHAAAHgEQAIgFACgGQADgHAAgKIAAgGQgJADgOADg");
	this.shape_137.setTransform(236.3,91);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAVAyIAAg6QAAgKgCgFQgBgFgEgDQgFgDgHgBQgHAAgIAIQgHAGAAATIAAA0IgQAAIAAhgIAOAAIAAANQAKgQASAAQAIAAAHAEQAHADAEAFQADAFABAHIABARIAAA6g");
	this.shape_138.setTransform(226.4,90.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgbAmQgLgNAAgZQAAgOAEgMQAGgMAKgGQAJgGAKAAQAPAAAKAIQAJAJADAPIgPACQgCgKgFgFQgGgFgIAAQgKAAgHAJQgIAJAAASQABAUAGAIQAIAJAJAAQAJAAAGgFQAGgHADgMIAPACQgDARgKAKQgLAJgPAAQgQAAgMgNg");
	this.shape_139.setTransform(203.5,91);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AghAsQgIgJAAgMQAAgHADgGQADgGAFgEQAFgCAGgBIAOgDQARgCAJgDIAAgFQAAgKgFgEQgFgGgLAAQgKAAgGAEQgFAEgCALIgPgCQABgLAGgGQAEgHAJgDQAKgEAJAAQAMAAAIADQAHADADAFQAEAEABAHIABAQIAAATQAAAYABAGQABAGADAGIgRAAQgCgFAAgHQgJAHgJAEQgGADgJAAQgPAAgIgHgAgCAGIgOADQgEACgCAEQgDADAAAFQABAGAEAFQAFAEAJAAQAHAAAHgEQAHgFADgGQADgHAAgKIAAgGQgIADgPADg");
	this.shape_140.setTransform(193.8,91);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQATAAALAOQAMANAAAXIAAAEIhDAAQABAQAIAJQAHAJAKgBQAIAAAHgEQAGgFAEgLIAQACQgFAPgKAJQgKAIgQAAQgTAAgLgNgAgQgcQgHAHgBANIAyAAQgBgMgGgHQgHgJgMAAQgJAAgHAIg");
	this.shape_141.setTransform(180,91);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgXAyIAAhgIANAAIAAAOQAGgKAEgDQADgEAGAAQAIAAAHAGIgEAPQgHgEgFAAQgFAAgDAEQgEADgBAGQgDAJAAAKIAAAyg");
	this.shape_142.setTransform(172.9,90.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AghAsQgIgJAAgMQAAgHADgGQADgGAFgEQAFgCAHgBIANgDQARgCAJgDIAAgFQAAgKgEgEQgHgGgKAAQgKAAgGAEQgEAEgDALIgPgCQACgLAEgGQAFgHAKgDQAJgEAJAAQAMAAAHADQAIADADAFQADAEACAHIABAQIAAATQAAAYABAGQABAGADAGIgQAAQgDgFAAgHQgKAHgHAEQgHADgIAAQgQAAgIgHgAgCAGIgOADQgEACgCAEQgCADgBAFQAAAGAGAFQAEAEAJAAQAHAAAHgEQAIgFACgGQADgHAAgKIAAgGQgJADgOADg");
	this.shape_143.setTransform(159.3,91);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgBBAQgEgDgCgFQgCgFAAgPIAAg2IgMAAIAAgNIAMAAIAAgZIANgKIAAAjIAQAAIAAANIgQAAIAAA3IABAKIADADIAFABIAHgBIACAPIgMACQgIAAgDgDg");
	this.shape_144.setTransform(152,89.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgdAmQgMgNAAgZQAAgXAMgNQAMgOARAAQATAAALAOQAMANAAAXIAAAEIhDAAQABAQAIAJQAHAJAKgBQAJAAAFgEQAHgFAEgLIAPACQgDAPgKAJQgLAIgQAAQgSAAgMgNgAgQgcQgHAHgBANIAyAAQgCgMgEgHQgIgJgMAAQgJAAgHAIg");
	this.shape_145.setTransform(120.8,91);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgYAyIAAhgIAPAAIAAAOQAFgKAEgDQADgEAFAAQAIAAAIAGIgFAPQgGgEgFAAQgGAAgCAEQgDADgCAGQgDAJAAAKIAAAyg");
	this.shape_146.setTransform(113.6,90.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgYA2IAAAMIgPAAIAAiGIAQAAIAAAxQAKgNANAAQAJAAAIADQAHAEAFAHQAFAHADAIQACAIAAALQAAAZgLAOQgMANgQAAQgPAAgJgOgAgQgJQgIAJAAARQAAARAFAIQAHANAMAAQAJAAAHgJQAIgKAAgTQgBgRgGgKQgIgIgJgBQgJAAgHAKg");
	this.shape_147.setTransform(105.2,89.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAvAyIAAg8QAAgKgCgFQgCgEgDgDQgEgDgGAAQgJAAgHAIQgHAGAAAQIAAA3IgNAAIAAg+QAAgLgEgFQgEgHgIAAQgHAAgGAEQgFAEgCAIQgDAGAAANIAAAyIgQAAIAAhgIAOAAIAAANQAFgHAGgEQAIgFAJAAQAKAAAHAFQAEAFADAHQALgRARAAQAPAAAHAIQAHAJAAAQIAABCg");
	this.shape_148.setTransform(92.7,90.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgeAmQgMgNAAgZQAAgaAOgNQAMgLAQAAQASAAAMAOQANANAAAXQAAASgGAKQgFALgKAGQgLAGgLAAQgSAAgMgNgAgSgbQgIAKAAARQAAATAIAJQAIAJAKAAQALAAAIgJQAHgKAAgSQAAgRgHgKQgIgJgLAAQgKAAgIAJg");
	this.shape_149.setTransform(80.3,91);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAWAyIAAg6QAAgKgDgFQgBgFgEgDQgGgDgFgBQgIAAgIAIQgHAGAAATIAAA0IgQAAIAAhgIAPAAIAAANQAJgQASAAQAIAAAHAEQAHADAEAFQADAFABAHIABARIAAA6g");
	this.shape_150.setTransform(70.4,90.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAdA5QgOAJgPAAQgRAAgOgJQgOgJgIgQQgIgRAAgRQAAgVAIgQQAIgRAOgIQAOgJARAAQAQAAAOAJQAOAJAIAQQAHAQAAAVQAAAOgFAOQgEANgKAKQAMAJAKAEIgFAMQgOgFgOgMgAgfgsQgMAOAAAcQAAAYAMAOQAMAPATAAQAHAAAIgEQgHgGgIgCIADgNQAOAFAKAIQAPgOAAgbQAAgRgFgNQgGgMgKgHQgKgGgLgBQgSAAgNAOg");
	this.shape_151.setTransform(33.9,89.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6},{t:this.shape_111},{t:this.shape_110,p:{x:40.7}},{t:this.shape_109},{t:this.shape_108,p:{x:57.5}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:91.1}},{t:this.shape_104,p:{x:98}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{x:144.4,y:91.1}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{x:182.9}},{t:this.shape_93},{t:this.shape_92,p:{x:206.7}},{t:this.shape_91,p:{x:213.5,y:89.2}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:269.9}},{t:this.shape_84,p:{x:279.2}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:127.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:166.9}},{t:this.shape_68},{t:this.shape_67,p:{x:184.2}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{y:112.4}},{t:this.shape_63},{t:this.shape_62,p:{x:222.4}},{t:this.shape_61,p:{x:229.3}},{t:this.shape_60},{t:this.shape_59,p:{x:249}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:82.6}}]},14).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},5).to({state:[{t:this.instance_7}]},14).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6},{t:this.shape_151},{t:this.shape_110,p:{x:45.7}},{t:this.shape_94,p:{x:55.6}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_92,p:{x:135.6}},{t:this.shape_84,p:{x:144.9}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_108,p:{x:186.9}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_64,p:{y:89.2}},{t:this.shape_104,p:{x:216.5}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_85,p:{x:256}},{t:this.shape_135},{t:this.shape_105,p:{x:282.7}},{t:this.shape_134},{t:this.shape_67,p:{x:32.1}},{t:this.shape_133},{t:this.shape_91,p:{x:48.6,y:112.4}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_73,p:{x:144.2}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_61,p:{x:180.8}},{t:this.shape_69,p:{x:189.4}},{t:this.shape_62,p:{x:193.6}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_59,p:{x:225.2}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_99,p:{x:64.4,y:137.6}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_52,p:{x:98.5}}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.59,scaleY:3.64},6).to({scaleX:1.17,scaleY:1.9},12).to({_off:true,scaleX:1,scaleY:0.98,x:505.9,y:105.1},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},1).to({_off:true,scaleY:1.07,x:160.1,y:112},4).wait(35).to({_off:false,scaleY:0.98,x:505.9,y:105.1},0).to({_off:true,scaleY:1.07,x:160.1,y:112},4).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({_off:false},0).to({scaleX:1.61,scaleY:3.87},5).to({scaleX:0.92,scaleY:1.7},14).to({_off:true},1).wait(19));

	// NPreg
	this.instance_8 = new lib.Interpolación13("synched",0);
	this.instance_8.setTransform(-53.5,39.3,1.02,0.98);
	this.instance_8._off = true;

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAPB9IAAjCQgLALgQAKQgSALgPAFIAAgdQAagNATgRQASgRAIgQIAUAAIAAD5g");
	this.shape_152.setTransform(282.5,23.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AhRB9QAAgLADgKQAHgRAOgQQAOgRAagVQAnghAOgSQAOgUAAgRQAAgTgMgMQgOgNgVAAQgUAAgNANQgOAOAAAXIgfgDQADgjAVgTQAVgSAiAAQAkAAAVAUQAVAUAAAdQAAAPgGAPQgGAOgOAOQgPAQghAcQgaAYgHAIQgIAIgFAJIB4AAIAAAdg");
	this.shape_153.setTransform(283.4,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_8},{t:this.shape_152}]},11).to({state:[]},1).to({state:[{t:this.instance_8}]},20).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_8},{t:this.shape_153}]},11).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:284.1,y:25.5},7).wait(11).to({startPosition:0},0).to({_off:true},1).wait(20).to({_off:false,scaleX:1.02,scaleY:0.98,x:-53.5,y:39.3},0).to({scaleX:1,scaleY:1,x:284.1,y:25.5},7).wait(11).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(225.3,298.1,179.7,154.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;