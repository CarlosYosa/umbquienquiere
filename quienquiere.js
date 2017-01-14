(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 360,
	height: 457,
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



(lib.publica = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.publicb = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.publicc = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.publicd = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.reinicio = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.reiniciov = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.respa = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.respav = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.respb = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.respbv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.respc = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.respcv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.respd = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.respdv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.salir = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.saltar = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.seguir = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.seguirv = function() {
	this.spriteSheet = ss["quienquiere_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.ssalir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.salir();
	this.instance.setTransform(-52,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.86,scaleY:0.83,x:-45,y:-37},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-44,100,84);


(lib.seguir_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.seguir();
	this.instance.setTransform(-209,-27);

	this.instance_1 = new lib.seguirv();
	this.instance_1.setTransform(-208,-27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-27,418,52);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

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


(lib.reinicio_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.reinicio();
	this.instance.setTransform(-210,-26);

	this.instance_1 = new lib.reiniciov();
	this.instance_1.setTransform(-209,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210,-26,418,52);


(lib.publico = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.ayudpublic();
	this.instance.setTransform(-29.5,-18);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:0.75,scaleY:0.75,x:-22.5,y:-13.6},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-18,57,36);


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
	this.initialize(mode,startPosition,loop,{inicio:0,preg1sp:39,preg1:59,publico1:60,preg2s:61,preg2sp:82,preg2:100,publico2:101,preg3s:102,preg3sp:120,preg3:138,publico3:139,preg4s:140,preg4sp:158,preg4:176,publico4:177,preg5s:178,preg5sp:196,preg5:214,publico5:215,preg6s:216,preg6sp:237,preg6:255,publico6:256,preg7s:257,preg7sp:278,preg7:296,publico7:297,preg8s:298,preg8sp:316,preg8:334,publico8:335,preg9s:336,preg9sp:354,preg9:372,publico9:373,preg10s:374,preg10sp:392,preg10:410,publico10:411,preg11s:412,preg11sp:433,preg11:451,publico11:452,preg12s:453,preg12sp:474,preg12:492,publico12:493,preg13s:494,preg13sp:512,preg13:530,publico13:531,preg14s:532,preg14sp:550,preg14:568,publico14:569,preg15s:570,preg15sp:588,preg15:606,publico15:607,preg16s:608,preg16sp:629,preg16:647,publico16:648,"final":649,salir:689,reinicio:690});

	// timeline functions:
	this.frame_59 = function() {
		this.stop("preg1");
			
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndPlay("preg2s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg2s");
			this.saltarr.visible = false;
			this.preg1b.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico1");
		}
	}
	this.frame_60 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg1sp");
			this.publico.visible = false;
		}
	}
	this.frame_100 = function() {
		this.stop("preg2");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndPlay("preg3s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg3s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico2");
		}
	}
	this.frame_101 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg2sp");
			this.publico.visible = false;
		}
	}
	this.frame_138 = function() {
		this.stop("preg3");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndPlay("preg4s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg4s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico3");
		}
	}
	this.frame_139 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg3sp");
			this.publico.visible = false;
		}
	}
	this.frame_176 = function() {
		this.stop("preg4");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndPlay("preg5s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = false;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg5s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1c.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico4");
		}
	}
	this.frame_177 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg4sp");
			this.publico.visible = false;
		}
	}
	this.frame_214 = function() {
		this.stop("preg5");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndPlay("preg6s");	
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = false;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg6s");
			this.saltarr.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico5");
		}
	}
	this.frame_215 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg5sp");
			this.publico.visible = false;
		}
	}
	this.frame_255 = function() {
		this.stop("preg6");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndPlay("preg7s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = false;
			this.preg1c.visible = false;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg7s");
			this.saltarr.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico6");
		}
	}
	this.frame_256 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg6sp");
			this.publico.visible = false;
		}
	}
	this.frame_296 = function() {
		this.stop("preg7");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndPlay("preg8s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg8s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico7");
		}
	}
	this.frame_297 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg7sp");
			this.publico.visible = false;
		}
	}
	this.frame_334 = function() {
		this.stop("preg8");
		
		this.preg1a.visible = true;
		this.preg1b.visible = true;
		this.preg1c.visible = true;
		this.preg1d.visible = true;
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndPlay("preg9s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = false;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg9s");
			this.saltarr.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico8");
		}
	}
	this.frame_335 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg8sp");
			this.publico.visible = false;
		}
	}
	this.frame_372 = function() {
		this.stop("preg9");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndPlay("preg10s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = false;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg10s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1c.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico9");
		}
	}
	this.frame_373 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg9sp");
			this.publico.visible = false;
		}
	}
	this.frame_410 = function() {
		this.stop("preg10");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndPlay("preg11s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg11s");
			this.saltarr.visible = false;
			this.preg1b.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico10");
		}
	}
	this.frame_411 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg10sp");
			this.publico.visible = false;
		}
	}
	this.frame_451 = function() {
		this.stop("preg11");
		
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndPlay("preg12s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg12s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico11");
		}
	}
	this.frame_452 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg11sp");
			this.publico.visible = false;
		}
	}
	this.frame_492 = function() {
		this.stop("preg12");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndPlay("preg13s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = false;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg13s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1c.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico12");
		}
	}
	this.frame_493 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg12sp");
			this.publico.visible = false;
		}
	}
	this.frame_530 = function() {
		this.stop("preg13");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndPlay("preg14s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reicicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = false;
			this.preg1c.visible = false;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg14s");
			this.saltarr.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico13");
		}
	}
	this.frame_531 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg13sp");
			this.publico.visible = false;
		}
	}
	this.frame_568 = function() {
		this.stop("preg14");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndPlay("preg15s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = false;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg15s");
			this.saltarr.visible = false;
			this.preg1b.visible = true;
			this.preg1d.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico14");
		}
	}
	this.frame_569 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg14sp");
			this.publico.visible = false;
		}
	}
	this.frame_606 = function() {
		this.stop("preg15");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndPlay("preg16s");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = false;
			this.preg1c.visible = true;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("preg16s");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1b.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico15");
		}
	}
	this.frame_607 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg15sp");
			this.publico.visible = false;
		}
	}
	this.frame_647 = function() {
		this.stop("preg16");
		
		this.respaa.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_1.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_1()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respbb.addEventListener("click", fl_ClickToGoToAndStopAtFrame_2.bind(this));
		function fl_ClickToGoToAndStopAtFrame_2()
		{
			this.gotoAndPlay("final");
			this.preg1a.visible = true;
			this.preg1b.visible = true;
			this.preg1c.visible = true;
			this.preg1d.visible = true;	
		}
		
		this.respcc.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.respdd.addEventListener("click", fl_ClickToGoToAndStopAtFrame_4.bind(this));
		function fl_ClickToGoToAndStopAtFrame_4()
		{
			this.gotoAndStop("reinicio");
		}
		
		this.salirr.addEventListener("click", fl_ClickToGoToAndStopAtFrame_5.bind(this));
		function fl_ClickToGoToAndStopAtFrame_5()
		{
			this.gotoAndStop("salir");
		}
		
		this.cinco.addEventListener("click", fl_ClickToHide.bind(this));
		function fl_ClickToHide()
		{
			this.cinco.visible = false;
			this.preg1a.visible = false;
			this.preg1b.visible = true;
			this.preg1c.visible = false;
			this.preg1d.visible = true;
		}
		
		this.saltarr.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay("final");
			this.saltarr.visible = false;
			this.preg1a.visible = true;
			this.preg1c.visible = true;
		}
		
		this.publico.addEventListener("click", fl_ClickToGoToAndStopAtFrame_7.bind(this));
		function fl_ClickToGoToAndStopAtFrame_7()
		{
			this.gotoAndStop("publico16");
		}
	}
	this.frame_648 = function() {
		this.publicp1.addEventListener("click", fl_ClickToGoToAndStopAtFrame_8.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_8()
		{
			this.gotoAndPlay("preg16sp");
			this.publico.visible = false;
		}
	}
	this.frame_689 = function() {
		this.stop("salir");
	}
	this.frame_690 = function() {
		this.reinicioo.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay("inicio");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1).call(this.frame_60).wait(40).call(this.frame_100).wait(1).call(this.frame_101).wait(37).call(this.frame_138).wait(1).call(this.frame_139).wait(37).call(this.frame_176).wait(1).call(this.frame_177).wait(37).call(this.frame_214).wait(1).call(this.frame_215).wait(40).call(this.frame_255).wait(1).call(this.frame_256).wait(40).call(this.frame_296).wait(1).call(this.frame_297).wait(37).call(this.frame_334).wait(1).call(this.frame_335).wait(37).call(this.frame_372).wait(1).call(this.frame_373).wait(37).call(this.frame_410).wait(1).call(this.frame_411).wait(40).call(this.frame_451).wait(1).call(this.frame_452).wait(40).call(this.frame_492).wait(1).call(this.frame_493).wait(37).call(this.frame_530).wait(1).call(this.frame_531).wait(37).call(this.frame_568).wait(1).call(this.frame_569).wait(37).call(this.frame_606).wait(1).call(this.frame_607).wait(40).call(this.frame_647).wait(1).call(this.frame_648).wait(41).call(this.frame_689).wait(1).call(this.frame_690).wait(1));

	// publico
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(179.4,238.4,1.002,1.171);
	this.instance._off = true;

	this.publico = new lib.publico();
	this.publico.setTransform(-68.6,334.2,1.228,1.389);
	this.publico._off = true;
	new cjs.ButtonHelper(this.publico, 0, 1, 2, false, new lib.publico(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBHIgTgeIgOgTQgFgIgCgCQgFgDgEgBIgLgBIgWAAIAABAIgTAAIAAiNIA+AAQATAAAKAEQAKADAGAKQAGAKAAAMQAAAPgKAKQgKAJgUADQAHAEAEADQAIAHAIAMIAZAngAgrgHIApAAQALAAAHgCQAIgDAEgGQADgGAAgHQAAgKgHgHQgHgGgQAAIgsAAg");
	this.shape.setTransform(209.1,403);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_1.setTransform(198.5,403);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBBQgNgHgGgNQgFgNAAgXIAAhQIATAAIAABQQAAATADAJQAEAJAIAEQAJAFAMAAQATAAAJgJQAJgKAAgbIAAhQIATAAIAABQQAAAWgFANQgFAMgMAIQgNAIgVAAQgSAAgNgHg");
	this.shape_2.setTransform(188.5,403.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBAQgRgIgJgRQgJgSAAgVQAAgTAJgSQAJgSAQgJQARgIATgBQAQAAAMAGQANAEAHAJQAHAKAEAOIgRAEQgEgKgEgHQgFgGgJgEQgJgDgLAAQgLAAgJADQgKAEgGAHQgFAGgEAIQgFAOAAAOQAAASAHANQAGANANAGQAMAHAMAAQANgBALgFQAMgEAGgFIAAgbIgqAAIAAgPIA9AAIAAAzQgOALgPAGQgPAGgPgBQgUAAgRgJg");
	this.shape_3.setTransform(173.4,403);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIBmAAIAAAQIhTAAIAAAtIBNAAIAAAPIhNAAIAAAwIBWAAIAAARg");
	this.shape_4.setTransform(159.3,403);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBEQgNgGgIgLQgHgLgBgPIASgBQACAKAEAHQAFAHAKAEQAJAEAKABQALAAAJgEQAIgDAEgGQAEgFAAgHQAAgGgDgFQgFgGgJgDQgGgCgRgFQgUgFgIgCQgKgFgFgJQgFgHAAgKQAAgLAGgKQAHgJALgEQAMgGAOAAQAPAAAMAGQAMAEAGAKQAHAKAAANIgSACQgBgOgJgHQgJgHgPAAQgQAAgIAHQgIAGAAAIQAAAIAGAGQAGAEAVAGQAXAEAIAFQANAEAFAIQAHAJgBAMQAAALgGAKQgHAKgMAGQgMAGgQgBQgRABgNgGg");
	this.shape_5.setTransform(145.6,403);

	this.publicp1 = new lib.seguir_1();
	this.publicp1.setTransform(178,404,0.526,0.673);
	new cjs.ButtonHelper(this.publicp1, 0, 1, 2, false, new lib.seguir_1(), 3);

	this.instance_1 = new lib.publica();
	this.instance_1.setTransform(12,12,0.473,0.824);

	this.instance_2 = new lib.Interpolación14("synched",0);
	this.instance_2.setTransform(175,220,1.307,2.16);
	this.instance_2._off = true;

	this.instance_3 = new lib.publicc();
	this.instance_3.setTransform(12,12,0.472,0.822);

	this.instance_4 = new lib.publicb();
	this.instance_4.setTransform(12,12,0.472,0.822);

	this.instance_5 = new lib.publicd();
	this.instance_5.setTransform(12,12,0.472,0.818);

	this.text = new cjs.Text("FELICITACIONES", "20px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 24;
	this.text.lineWidth = 173;
	this.text.setTransform(90,125);
	this.text._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBEQgNgGgHgLQgIgMgBgOIASgCQABALAGAHQAEAHAJAFQALADAKAAQALAAAIgDQAIgDAEgFQAEgGAAgHQAAgHgEgFQgDgEgJgEQgHgDgRgEQgUgFgIgCQgKgGgFgHQgFgJAAgJQAAgLAGgJQAGgKAMgFQAMgEAOAAQAPAAALAEQANAFAGALQAGAKABAMIgSABQgCgNgIgHQgJgHgPAAQgQAAgIAGQgIAHAAAJQAAAHAGAFQAFAGAWAEQAWAGAJADQAMAEAGAKQAHAIAAALQgBAMgGAKQgHAKgMAGQgMAFgPAAQgSAAgNgFg");
	this.shape_6.setTransform(249.7,138);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIBmAAIAAARIhTAAIAAAsIBNAAIAAAOIhNAAIAAAxIBWAAIAAARg");
	this.shape_7.setTransform(236.7,138);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlBHIhKhvIAABvIgSAAIAAiNIAUAAIBJBuIAAhuIASAAIAACNg");
	this.shape_8.setTransform(222.5,138);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjBAQgPgKgJgRQgIgRAAgTQAAgiAUgTQASgVAdABQAUgBAPAKQARAJAIARQAIARAAAUQAAAVgIARQgKASgPAIQgQAKgTgBQgSABgRgKgAghgqQgOANAAAeQAAAaANAQQAPAOATAAQAVAAAOgPQAOgPAAgbQgBgQgFgNQgHgNgLgHQgLgIgOAAQgTAAgOAPg");
	this.shape_9.setTransform(207.6,138);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBAQgPgJgHgSQgIgSAAgTQAAgWAJgRQAIgQAQgJQAQgJARABQAVAAAPALQAPAKAFAUIgSAFQgFgQgKgIQgJgGgPgBQgOABgLAHQgLAJgFANQgEANAAAOQAAAQAFAOQAFAOAMAGQALAHALAAQAQAAALgJQALgJAEgSIATAFQgGAXgQAMQgPAMgXAAQgVAAgOgJg");
	this.shape_10.setTransform(187.1,138);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAtBHIgRgrIg6AAIgPArIgVAAIA3iNIATAAIA6CNgAgIgcIgQAoIAuAAIgOglIgIgeQgEANgEAOg");
	this.shape_11.setTransform(173.1,138);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIBHIAAh8IgvAAIAAgRIBvAAIAAARIgvAAIAAB8g");
	this.shape_12.setTransform(160.3,138);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_13.setTransform(151.5,138);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AggBAQgPgJgHgSQgIgSAAgTQAAgWAJgRQAIgQAQgJQAQgJARABQAVAAAPALQAPAKAFAUIgSAFQgFgQgKgIQgJgGgPgBQgOABgLAHQgLAJgFANQgEANAAAOQAAAQAFAOQAFAOAMAGQALAHALAAQAQAAALgJQALgJAEgSIATAFQgGAXgQAMQgPAMgXAAQgVAAgOgJg");
	this.shape_14.setTransform(141.5,138);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIBHIAAiNIARAAIAACNg");
	this.shape_15.setTransform(131.5,138);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrBHIAAiNIATAAIAAB8IBEAAIAAARg");
	this.shape_16.setTransform(123.5,138);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIBmAAIAAARIhTAAIAAAsIBNAAIAAAOIhNAAIAAAxIBWAAIAAARg");
	this.shape_17.setTransform(111.1,138);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgvBHIAAiNIBfAAIAAARIhMAAIAAAsIBBAAIAAAPIhBAAIAABBg");
	this.shape_18.setTransform(98.5,138);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsCQQgSgPgIgdQgHgdAAgyIAAizIAaAAIAACzQAAApAFATQAFAUAMAKQAMALARAAQAbAAAMgVQANgVAAg7IAAizIAaAAIAACzQAAAwgHAbQgGAcgSASQgSARgdAAQgaAAgSgPg");
	this.shape_19.setTransform(312.9,121.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAzCcIhnj0IAAD0IgZAAIAAk3IAbAAIBnD0IAAj0IAZAAIAAE3g");
	this.shape_20.setTransform(292.6,121.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhJCcIAAk3ICPAAIAAAlIh1AAIAABgIBtAAIAAAiIhtAAIAABrIB5AAIAAAlg");
	this.shape_21.setTransform(273.7,121.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABFCcIAAkEIg6EEIgWAAIg5kIIAAEIIgaAAIAAk3IAnAAIAwDcIAHAuIAMgyIAvjYIAkAAIAAE3g");
	this.shape_22.setTransform(252.3,121.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAzCcIhnj0IAAD0IgZAAIAAk3IAbAAIBnD0IAAj0IAZAAIAAE3g");
	this.shape_23.setTransform(222.7,121.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhJCcIAAk3ICPAAIAAAlIh1AAIAABgIBtAAIAAAiIhtAAIAABrIB5AAIAAAlg");
	this.shape_24.setTransform(203.7,121.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA/CcIgXheIhSAAIgWBeIgcAAIBNk3IAaAAIBSE3gAgMg+IgWBZIBCAAIgVhVIgNhBQgDAfgHAeg");
	this.shape_25.setTransform(177,121.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAzCcIhnj0IAAD0IgZAAIAAk3IAbAAIBnD0IAAj0IAZAAIAAE3g");
	this.shape_26.setTransform(157.5,121.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgxCNQgWgWgMglQgLglAAgqQAAhLAbgsQAagtApAAQAbAAAXAVQAWAUAMAmQALAlAAAtQAAAvgMAnQgMAlgXAUQgWATgaAAQgbAAgWgVgAgvhfQgUAeAABGQAAA4AUAhQATAgAcAAQAdABAUgiQATghAAg8QAAglgIgcQgJgcgPgQQgQgQgUAAQgaAAgVAeg");
	this.shape_27.setTransform(136.6,121.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMCcIAAk3IAZAAIAAE3g");
	this.shape_28.setTransform(121.9,121.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgmCVQgTgMgKgZQgLgZAAggIAZgDQACAYAGAPQAHAPANAJQAOAJAPAAQAPAAAMgHQALgHAGgMQAGgMAAgPQAAgPgGgLQgFgLgNgHQgIgFgZgKQgcgLgLgHQgOgMgHgRQgIgSAAgVQAAgYAJgVQAJgVAQgKQARgLAUAAQAUAAARALQARAMAJAVQAKAWAAAcIgZADQgCgegMgPQgMgPgWAAQgXAAgLAOQgLANAAAUQAAARAIALQAHALAfALQAgALAMAJQASALAIATQAIATAAAaQAAAZgJAWQgJAWgRAMQgRANgWAAQgZAAgSgNg");
	this.shape_29.setTransform(108.5,121.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhJCcIAAk3ICPAAIAAAlIh1AAIAABgIBtAAIAAAiIhtAAIAABrIB5AAIAAAlg");
	this.shape_30.setTransform(90.4,121.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA2CcIgahBQgMgcgHgPQgIgPgEgGQgGgGgGgDQgEgBgLAAIgeAAIAACLIgbAAIAAk3IBXAAQAbgBAOAJQAOAJAIAVQAIAWAAAZQAAAigNAWQgOAVgdAHQAKAIAGAHQAMARAKAZIAjBVgAg8gRIA5AAQAQAAAKgGQAKgFAGgOQAFgNAAgPQAAgWgKgPQgLgOgWAAIg9AAg");
	this.shape_31.setTransform(71.5,121.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhLCcIAAk3IBLAAQASAAALADQAPADAKAMQAKAKAGAUQAGATAAAYQAAAogQAZQgRAcgqAAIgyAAIAAB/gAgxgGIAyAAQAaAAALgPQAKgPAAgbQAAgUgFgOQgHgOgKgFQgHgCgSAAIgyAAg");
	this.shape_32.setTransform(51.7,121.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#00FF00").ss(6,1,1).p("A2ZiFIKnAAArojBIAKt6AICwxIgKNcAroxFITgAAA1nhdIVjSjAI0iZINcgUAWaiZI2WTL");
	this.shape_33.setTransform(189.5,268.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAnBHIgTgeIgOgUQgFgGgCgDQgFgDgEgBIgLAAIgWAAIAAA/IgTAAIAAiNIA+AAQATAAAKADQAKAFAGAKQAGAJAAAMQAAAPgKAKQgKAJgUADQAHADAEAEQAIAHAIAMIAZAngAgrgHIApAAQALAAAHgCQAIgEAEgFQADgGAAgHQAAgLgHgGQgHgHgQABIgsAAg");
	this.shape_34.setTransform(214.3,319.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAtBHIgQgsIg7AAIgPAsIgUAAIA2iNIATAAIA7CNgAgJgcIgPAoIAvAAIgQglIgIgeQgCANgGAOg");
	this.shape_35.setTransform(199.8,319.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggBAQgPgKgHgRQgIgSAAgTQAAgWAJgRQAIgQAQgJQAQgJARABQAVAAAPALQAPAKAFAUIgSAFQgFgQgKgIQgJgGgPgBQgOABgLAHQgLAIgFAOQgEANAAAOQAAARAFANQAFAOAMAHQALAGALAAQAQAAALgJQALgJAEgSIATAFQgGAXgQAMQgPAMgXAAQgVAAgOgJg");
	this.shape_36.setTransform(180.4,319.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAlBHIhKhvIAABvIgSAAIAAiNIATAAIBKBuIAAhuIASAAIAACNg");
	this.shape_37.setTransform(160.3,319.4);

	this.reinicioo = new lib.reinicio_1();
	this.reinicioo.setTransform(186.7,319.7,0.284,0.663);
	new cjs.ButtonHelper(this.reinicioo, 0, 1, 2, false, new lib.reinicio_1(), 3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_38.setTransform(271.1,285.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgIA4IgrhvIAUAAIAZBBIAGAYIAGgWIAahDIAUAAIgsBvg");
	this.shape_39.setTransform(259.5,285.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAPAPQAOAQAAAbIAAAFIhTAAQABASAKAKQAJAKANAAQAKAAAIgGQAHgFAFgMIATACQgEARgNALQgNAJgTAAQgXAAgPgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgQAAQgLAAgJAJg");
	this.shape_40.setTransform(247.8,285.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_41.setTransform(235.5,285.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAoBOIhRh5IAAB5IgUAAIAAibIAWAAIBRB5IAAh5IATAAIAACbg");
	this.shape_42.setTransform(221.5,283.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKANAAQAKAAAIgGQAHgFAEgMIAUACQgEARgNALQgNAJgTAAQgYAAgOgPgAgUgiQgJAKgBAPIA+AAQgBgPgHgHQgIgMgPAAQgMAAgJAJg");
	this.shape_43.setTransform(201.3,285.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYBIQgMgIgFgNQgHgOAAgRQAAgRAGgMQAFgOAMgHQALgHAOAAQAIAAAJADQAIAFAEAHIAAg5IAUAAIAACcIgSAAIAAgPQgLARgUAAQgNAAgLgHgAgUgLQgIAKAAAVQAAAWAJALQAKAKAKAAQANAAAIgKQAKgKgBgVQABgWgKgKQgIgLgOAAQgLAAgJAKg");
	this.shape_44.setTransform(188.7,283.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgdQAAgeASgPQAOgNAUAAQAXAAAPAPQAPAPAAAcQAAAUgHANQgGAMgNAHQgNAHgOAAQgWAAgPgPgAgXggQgJALAAAVQAAAWAJALQAKAKANAAQAOAAAKgLQAJgLAAgVQAAgUgJgLQgKgLgOAAQgNAAgKAKg");
	this.shape_45.setTransform(170.7,285.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgIBOIAAibIARAAIAACbg");
	this.shape_46.setTransform(162.1,283.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgpAyQgKgKAAgOQAAgIAEgHQADgHAHgEQAGgCAHgDIASgCQAWgDAKgEIAAgFQAAgMgFgEQgIgHgNAAQgMAAgHAFQgHAFgDAMIgSgDQACgMAGgIQAGgHALgEQALgEAMAAQAPAAAJAEQAKADAEAFQAEAFACAIIABASIAAAXQAAAcABAHQABAHAEAGIgUAAQgDgGgBgHQgLAIgKAEQgIAEgLAAQgTAAgKgJgAgDAHQgMACgFABQgFACgCAFQgDAEAAAFQAAAHAFAGQAHAFAKAAQAKAAAIgFQAJgFAEgIQADgHAAgMIAAgHQgKAEgTADg");
	this.shape_47.setTransform(153.6,285.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_48.setTransform(144.6,283.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_49.setTransform(135.2,285.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgkAsQgPgQAAgcQAAgbAPgQQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgGQAIgFAFgMIAUACQgFARgNALQgMAJgVAAQgWAAgPgPgAgUgiQgJAKgBAPIA+AAQgCgPgFgHQgKgMgPAAQgLAAgJAJg");
	this.shape_50.setTransform(123,285.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_51.setTransform(114,283.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgLgDgGQgCgGgGgEQgFgDgIAAQgKAAgJAIQgJAIAAAVIAAA9IgUAAIAAhwIASAAIAAAQQAMgTAWAAQAKAAAJAEQAJAEAEAGQAEAGACAIIABATIAABEg");
	this.shape_52.setTransform(104.6,285.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJBOIAAibIATAAIAACbg");
	this.shape_53.setTransform(95.6,283.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAsBOIgOgkIg9AAIgNAkIghAAIA9ibIAfAAIA/CbgAgVAQIApAAIgUg4g");
	this.shape_54.setTransform(254.1,151.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhABOIAAibIA5AAQASAAAKADQAOAEAKAKQAKALAGAPQAEAPAAAUQAAATgEAPQgHARgKAKQgJAIgOAFQgKADgQAAgAghA0IAYAAQALAAAGgCQAIgCAFgEQAFgFADgKQAEgLAAgSQAAgRgEgJQgDgKgGgGQgGgFgIgCQgGgCgSAAIgPAAg");
	this.shape_55.setTransform(238.5,151.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAsBOIgOgkIg9AAIgNAkIgiAAIA+ibIAgAAIA/CbgAgVAQIApAAIgUg4g");
	this.shape_56.setTransform(222.3,151.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgvA8QgUgWAAglQAAglAUgWQAUgWAgAAQAdAAARARQAMAKAFATIggAIQgCgNgKgHQgJgHgMAAQgQAAgKANQgMAMAAAcQAAAcAMANQAKANAQAAQAMAAAJgIQAJgIAFgSIAeAKQgHAagRAMQgQANgZAAQgeAAgUgVg");
	this.shape_57.setTransform(206.4,151.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag2A8QgVgWAAgmQAAgWAHgQQAGgMAJgKQAJgJALgFQAPgGASAAQAiAAAVAWQAVAVAAAlQAAAmgVAVQgVAWgiAAQghAAgVgVgAgegnQgMANAAAaQAAAaAMAOQANAOARAAQATAAAMgOQAMgOAAgaQAAgagMgNQgMgOgTAAQgSAAgMAOg");
	this.shape_58.setTransform(190,151.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQBOIg4ibIAjAAIAlByIAnhyIAiAAIg5Cbg");
	this.shape_59.setTransform(174.1,151.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOBOIAAibIAdAAIAACbg");
	this.shape_60.setTransform(163.8,151.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgfBKQgMgEgGgJQgHgJgCgIQgDgOAAgbIAAhRIAfAAIAABTQAAAUACAGQACAKAHAFQAIAGALABQAOAAAHgGQAHgGABgHQABgJAAgSIAAhVIAgAAIAABQQAAAdgCAMQgDALgHAIQgHAIgLAFQgMAFgTAAQgUgBgMgFg");
	this.shape_61.setTransform(152.6,151.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AA1BRIgVgOQgPAHgRAAQglAAgUgVQgVgVAAglQAAgnAVgVQAVgWAjAAQAhAAAUAWQAVAVAAAnQAAASgGAPQgEANgJALQALAIAOAFIgMAXIgOgHgAghguQgMAOAAAbQAAAaAMANQAMAOATAAQAFAAAGgCQgJgHgJgDIAJgSQAOAFAOALQAGgIADgKQADgKAAgLQAAgbgMgOQgMgOgRAAQgUAAgMAOg");
	this.shape_62.setTransform(136.5,152.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Ag7BOIAAibIBzAAIAAAaIhSAAIAAAjIBNAAIAAAZIhNAAIAAArIBWAAIAAAag");
	this.shape_63.setTransform(120.6,151.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgpAyQgKgJAAgPQAAgIAEgHQAEgHAGgEQAGgCAHgCIASgDQAVgDAMgEIAAgFQgBgMgFgFQgIgGgNAAQgMAAgHAEQgGAFgEANIgTgDQADgMAGgIQAFgHAMgEQALgEAMAAQAPAAAKADQAIADAFAGQAEAFACAIIABASIAAAXQAAAbABAIQACAHADAHIgUAAQgDgHgBgIQgLAJgJAFQgIADgMAAQgTAAgKgJgAgDAGQgMACgFADQgFABgCAFQgEAEAAAFQABAHAFAGQAGAFAMAAQAIAAAJgFQAJgFAEgJQADgGABgNIAAgGQgLADgTADg");
	this.shape_64.setTransform(228.1,125.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgCBKQgFgDgDgGQgCgFAAgSIAAg/IgOAAIAAgPIAOAAIAAgdIARgLIAAAoIATAAIAAAPIgTAAIAABAQAAAJABACIADAEQADABAEAAIAIgBIADASIgOABQgLAAgEgDg");
	this.shape_65.setTransform(219.1,123.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgSIATgDQACALAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgHgGgDQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgGQADgHAGgEQAFgDAIgDQAHgCAJAAQAMAAAKADQAKAEAFAHQAFAHABALIgSADQgCgKgGgFQgGgEgKgBQgNAAgFAFQgGAFAAAFQAAAEACADQADAEAFABIAPAFQAUAGAIADQAJACAEAGQAFAHAAAKQAAAKgGAIQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_66.setTransform(210.3,125.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgcQAAgaAPgRQAOgPAXAAQAWAAAPAPQAOAQAAAbIAAAFIhTAAQABASAJAKQAKAKAMAAQALAAAHgFQAIgGAEgMIAVACQgFASgNAKQgNAJgUAAQgXAAgOgQgAgUgiQgJAKgBAOIA+AAQgBgOgGgHQgKgMgOAAQgMABgJAIg");
	this.shape_67.setTransform(198.7,125.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYA2QgJgEgEgGQgFgGgBgIQgCgGAAgMIAAhFIAUAAIAAA9QAAAQABAFQACAHAGAFQAFAEAJAAQAHAAAIgEQAHgFADgHQADgIAAgPIAAg7IAUAAIAABwIgRAAIAAgRQgOAUgVAAQgKAAgIgEg");
	this.shape_68.setTransform(186.4,125.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgwBPIAAibIASAAIAAAOQAGgIAHgEQAJgFAJAAQAPAAAKAIQAMAHAFAOQAGAOAAAQQAAASgGALQgHAPgMAHQgMAIgMgBQgIAAgIgEQgIgDgFgHIAAA3gAgVg0QgJAMAAAWQgBAUAKAKQAJALAMAAQALAAAJgLQAKgLAAgVQgBgWgIgLQgKgLgLABQgLAAgKALg");
	this.shape_69.setTransform(174.6,127.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgfAyQgMgJgDgSIATgDQACALAHAGQAHAGAMAAQANAAAGgFQAHgGAAgHQAAgHgGgDQgEgDgQgEQgTgFgIgDQgIgDgEgHQgFgHAAgJQAAgHAEgGQADgHAGgEQAFgDAIgDQAHgCAJAAQAMAAAKADQAKAEAFAHQAFAHABALIgSADQgCgKgGgFQgGgEgKgBQgNAAgFAFQgGAFAAAFQAAAEACADQADAEAFABIAPAFQAUAGAIADQAJACAEAGQAFAHAAAKQAAAKgGAIQgGAJgKAEQgLAFgNAAQgUAAgMgJg");
	this.shape_70.setTransform(162.6,125.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgkArQgPgPAAgcQAAgaAPgRQAPgPAVAAQAXAAAOAPQAPAQAAAbIAAAFIhTAAQABASAKAKQAJAKAMAAQALAAAHgFQAIgGAFgMIATACQgEASgNAKQgMAJgVAAQgWAAgPgQgAgUgiQgJAKgBAOIA+AAQgCgOgGgHQgJgMgPAAQgLABgJAIg");
	this.shape_71.setTransform(151,125.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AArBOIgVghIgPgVQgGgIgDgDQgFgDgEgBIgMgBIgYAAIAABGIgVAAIAAibIBEAAQAVAAALAEQALAEAGALQAHALAAANQAAAQgLAMQgLAJgWAEIAMAHQAJAJAIAMIAcArgAgvgIIAtAAQAMAAAIgDQAIgDAEgGQAEgHAAgHQAAgLgIgIQgIgHgRAAIgwAAg");
	this.shape_72.setTransform(137.7,123.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},10).to({state:[{t:this.instance}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},20).to({state:[{t:this.instance_1},{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_4}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.instance_4},{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_4}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_5}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_5}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.instance_4},{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},8).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.publico}]},1).to({state:[{t:this.publico}]},18).to({state:[{t:this.instance_4},{t:this.publicp1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:198.5,y:403}},{t:this.shape}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},9).to({state:[{t:this.text}]},9).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:131.5,y:138}},{t:this.shape_14},{t:this.shape_13,p:{x:151.5,y:138}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1,p:{x:197,y:138}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},21).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.reinicioo},{t:this.shape_15,p:{x:150.4,y:319.4}},{t:this.shape_37},{t:this.shape_13,p:{x:170.4,y:319.4}},{t:this.shape_36},{t:this.shape_1,p:{x:190.4,y:319.4}},{t:this.shape_35},{t:this.shape_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1.89,scaleY:5.86,x:180.1,y:224.6},10).to({scaleX:1,scaleY:1,x:179.4,y:238.4},9).to({_off:true},1).wait(652));
	this.timeline.addTween(cjs.Tween.get(this.publico).wait(39).to({_off:false},0).to({x:65.8,y:430},20).to({_off:true},1).wait(22).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.6,y:334.2},0).to({x:65.8,y:430},18).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(61).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},11).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false,scaleX:1.31,scaleY:2.16},0).to({scaleX:2.09,scaleY:7.92},11).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false,scaleX:1.31,scaleY:2.16},0).to({scaleX:2.09,scaleY:7.92},11).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false,scaleX:1.31,scaleY:2.16},0).to({scaleX:2.09,scaleY:7.92},11).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false,scaleX:1.31,scaleY:2.16},0).to({scaleX:2.09,scaleY:7.92},11).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false},0).to({scaleX:2.09,scaleY:7.92},8).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(20).to({_off:false,scaleX:1.31,scaleY:2.16},0).to({scaleX:2.09,scaleY:7.92},11).to({scaleX:1.23,scaleY:1.58},9).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(649).to({_off:false},0).to({scaleX:1.9,scaleY:5.39,x:16.8,y:68.5},9).to({scaleX:1,scaleY:1,x:90,y:125},9).to({_off:true},21).wait(3));

	// cintuenta
	this.instance_6 = new lib.Interpolación3("synched",0);
	this.instance_6.setTransform(178.5,108.4,1.012,1.171);

	this.cinco = new lib.ccincuenta();
	this.cinco.setTransform(-68.5,434.1,1.4,1.724);
	this.cinco._off = true;
	new cjs.ButtonHelper(this.cinco, 0, 1, 2, false, new lib.ccincuenta(), 3);

	this.text_1 = new cjs.Text("TERMINASTE", "20px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 133;
	this.text_1.setTransform(106,241);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.91,scaleY:5.86,x:181,y:105.9},9).to({scaleX:1.01,scaleY:1.17,x:178.5,y:108.4},10).to({_off:true},20).wait(652));
	this.timeline.addTween(cjs.Tween.get(this.cinco).wait(39).to({_off:false},0).to({x:178.4,y:430},20).to({_off:true},1).wait(22).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(19).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(22).to({_off:false,x:-68.5,y:434.1},0).to({x:178.4,y:430},18).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(667).to({_off:false},0).to({scaleX:2.39,scaleY:4.1,x:18.3,y:174.9},11).to({scaleX:1,scaleY:1,x:106,y:241},10).to({_off:true},1).wait(2));

	// saltarr
	this.saltarr = new lib.saltar_1();
	this.saltarr.setTransform(-69.9,384.3,0.7,1,0,0,0,0.1,-0.5);
	this.saltarr._off = true;
	new cjs.ButtonHelper(this.saltarr, 0, 1, 2, false, new lib.saltar_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.saltarr).wait(39).to({_off:false},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},20).to({_off:true},1).wait(22).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(22).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(22).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(22).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(22).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(19).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(22).to({_off:false,regX:0.1,regY:-0.5,scaleX:0.7,scaleY:1,x:-69.9,y:384.3},0).to({regX:0,regY:0,scaleX:0.73,scaleY:1.01,x:287.7,y:430.4},18).to({_off:true},1).wait(43));

	// salir
	this.salirr = new lib.ssalir();
	this.salirr.setTransform(-117.5,34.3,0.5,0.595);
	this.salirr._off = true;
	new cjs.ButtonHelper(this.salirr, 0, 1, 2, false, new lib.ssalir(), 3);

	this.timeline.addTween(cjs.Tween.get(this.salirr).wait(39).to({_off:false},0).to({x:55.5,y:30.8},9).wait(11).to({_off:true},1).wait(22).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(22).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(22).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(22).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(22).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(19).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(22).to({_off:false,x:-117.5,y:34.3},0).to({x:55.5,y:30.8},6).wait(12).to({_off:true},1).wait(43));

	// RespD
	this.respdd = new lib.rrespd();
	this.respdd.setTransform(530.8,378.7,0.766,0.962);
	this.respdd._off = true;
	new cjs.ButtonHelper(this.respdd, 0, 1, 2, false, new lib.rrespd(), 3);

	this.preg1d = new cjs.Text("Conmutativa", "20px 'Arial'", "#FFFFFF");
	this.preg1d.name = "preg1d";
	this.preg1d.lineHeight = 24;
	this.preg1d.lineWidth = 269;
	this.preg1d.setTransform(59.3,368.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respdd}]},39).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"Conmutativa",lineWidth:269}}]},20).to({state:[]},1).to({state:[{t:this.respdd}]},22).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"A∩B",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"entonces",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"⌐ p ʌ q",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"Ser enteros",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},22).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"El cuadrado del divisor",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},22).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"(A∆B)∩B",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"Es falsa si p es verdadera",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"Braulio es fisioterapeuta. ",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"Disyunción",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},22).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"34",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},22).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"Leonardo no se quiere casar.",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"15/14",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"  1 ↄ A v 1 ↄ B ʌ A",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},19).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"  7/9",lineWidth:267}}]},18).to({state:[]},1).to({state:[{t:this.respdd}]},22).to({state:[{t:this.respdd},{t:this.preg1d,p:{text:"  Eliana",lineWidth:267}}]},18).to({state:[]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.respdd).wait(39).to({_off:false},0).to({x:180.8,y:378.1},20).to({_off:true},1).wait(22).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(22).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(22).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(22).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(22).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(19).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(22).to({_off:false,x:530.8,y:378.7},0).to({x:180.8,y:378.1},18).to({_off:true},1).wait(43));

	// RespC
	this.respcc = new lib.rrespc();
	this.respcc.setTransform(530,330.6,0.766,0.962);
	this.respcc._off = true;
	new cjs.ButtonHelper(this.respcc, 0, 1, 2, false, new lib.rrespc(), 3);

	this.preg1c = new cjs.Text("Negativa", "20px 'Arial'", "#FFFFFF");
	this.preg1c.name = "preg1c";
	this.preg1c.lineHeight = 24;
	this.preg1c.lineWidth = 270;
	this.preg1c.setTransform(56.3,319.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respcc}]},39).to({state:[{t:this.respcc}]},17).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"Negativa",lineWidth:270}}]},3).to({state:[]},1).to({state:[{t:this.respcc}]},22).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"A-B",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"y",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"p ↔ q",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"El mismo multiplo",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},22).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"Un factor primo",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},22).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"(A∩B)-(AUB)",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"No es posible concluir",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"Camilo es fisioterapeuta.",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"Contingencia",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},22).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"24",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},22).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"No es posible concluirlo",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"236/35",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"  a ϵ B ʌ 1 ϵ A",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},19).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"  22.2%",lineWidth:269}}]},4).to({state:[]},1).to({state:[{t:this.respcc}]},22).to({state:[{t:this.respcc}]},14).to({state:[{t:this.respcc},{t:this.preg1c,p:{text:"  Fernanda",lineWidth:269}}]},4).to({state:[]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.respcc).wait(39).to({_off:false},0).to({x:180},17).wait(3).to({y:330},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:330.6},0).to({x:180},14).wait(4).to({y:330},0).to({_off:true},1).wait(43));

	// RespB
	this.respbb = new lib.rrespb();
	this.respbb.setTransform(530,280.6,0.766,0.962);
	this.respbb._off = true;
	new cjs.ButtonHelper(this.respbb, 0, 1, 2, false, new lib.rrespb(), 3);

	this.preg1b = new cjs.Text("Interrogativa", "20px 'Arial'", "#FFFFFF");
	this.preg1b.name = "preg1b";
	this.preg1b.lineHeight = 23;
	this.preg1b.lineWidth = 272;
	this.preg1b.setTransform(55,270.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respbb}]},39).to({state:[{t:this.respbb}]},14).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:55,y:270.1,text:"Interrogativa",lineHeight:23.35,lineWidth:272}}]},6).to({state:[]},1).to({state:[{t:this.respbb}]},22).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"A∆B",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"o",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"p → q",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"Ser primos",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},22).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"Otro número Entero ",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},22).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"(AUB)-(A∩B)",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"Es falsa si p es falsa",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"Braulio es productor de cine",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"Contradicción",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},22).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"48",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},22).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"Ella se quiere casar",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"23/14",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"  Ɐa ϵ A → a ϵ B",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},19).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"  1/9",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).to({state:[{t:this.respbb}]},22).to({state:[{t:this.respbb}]},11).to({state:[{t:this.respbb},{t:this.preg1b,p:{x:56.3,y:268.5,text:"  María",lineHeight:24.35,lineWidth:266}}]},7).to({state:[]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.respbb).wait(39).to({_off:false},0).to({x:180},14).wait(6).to({y:281},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:280.6},0).to({x:180},11).wait(7).to({y:280},0).to({_off:true},1).wait(43));

	// RespA
	this.respaa = new lib.rrespa();
	this.respaa.setTransform(530,229.6,0.766,0.962);
	this.respaa._off = true;
	new cjs.ButtonHelper(this.respaa, 0, 1, 2, false, new lib.rrespa(), 3);

	this.preg1a = new cjs.Text("Afirmativa", "20px 'Arial'", "#FFFFFF");
	this.preg1a.name = "preg1a";
	this.preg1a.lineHeight = 24;
	this.preg1a.lineWidth = 271;
	this.preg1a.setTransform(57.5,218.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.respaa}]},39).to({state:[{t:this.respaa}]},10).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Afirmativa"}}]},10).to({state:[]},1).to({state:[{t:this.respaa}]},22).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"AUB"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"si y solo si"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"p v q"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Un divisor común"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},22).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Múltiplo del divisor"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},22).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"(AUB)∩A"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Es verdadera si p es falsa"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Andrés es enfermero."}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Tautología"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},22).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"28"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},22).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"Ella no se quiere casar."}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"209/70"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"  a v 4 ϵ A ↔ A ↄ B"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},19).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"  200800"}}]},11).to({state:[]},1).to({state:[{t:this.respaa}]},22).to({state:[{t:this.respaa}]},7).to({state:[{t:this.respaa},{t:this.preg1a,p:{text:"  Laura"}}]},11).to({state:[]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.respaa).wait(39).to({_off:false},0).to({x:180},10).wait(10).to({y:230},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(19).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(22).to({_off:false,x:530,y:229.6},0).to({x:180},7).wait(11).to({y:230},0).to({_off:true},1).wait(43));

	// Pregunta
	this.instance_7 = new lib.Interpolación11("synched",0);
	this.instance_7.setTransform(544.3,133.1,1.129,1.23);
	this.instance_7._off = true;

	this.instance_8 = new lib.Interpolación12("synched",0);
	this.instance_8.setTransform(178.8,129.6,1.129,1.229);
	this.instance_8._off = true;

	this.pregunt1 = new cjs.Text("Una de las caracteristicas de las proposiciones simples es:", "22px 'Arial'", "#FFFFFF");
	this.pregunt1.name = "pregunt1";
	this.pregunt1.lineHeight = 26;
	this.pregunt1.lineWidth = 343;
	this.pregunt1.setTransform(17,66,0.936,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},39).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:17,y:66,text:"Una de las caracteristicas de las proposiciones simples es:",lineWidth:343,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},13).to({state:[]},1).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"Los elementos que pertenecen al conjunto A y no pertenecen a B se representan con :",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"CONJUNCION hace referencia al conector logico:",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"La frase \"si, gasto las onces hoy, usted gasta mañana\" se puede representar como:",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"Para simplificar un numero racional, el numerador y el denominador deben tener:",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"La división de Enteros necesita que el numerador sea:",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"La diferencia simetría entre dos conjuntos A y B está definida con la operación",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"Si r y s son proposiciones verdaderas es fácil concluir que la proposición r→(s→p)",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:22,y:62,text:"Un grupo es formado por Andrés, Braulio y Camilo. Se sabe que uno de ellos es fisioterapeuta, otro es enfermero y otro es productor de cine. Andrés es más alto que el fisioterapeuta y es suegro de Braulio; si se sabe que el enfermero es el más bajo de todos, y además es soltero, se puede concluir que:",lineWidth:335,scaleX:0.971,font:"15px 'Arial'",lineHeight:18.2}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:20.4,y:62.5,text:"Cuando en una proposición compuesta no se conoce los valores de verdad de las proposiciones, pero es verdadera, en cualquier caso, la denominamos:",lineWidth:326,scaleX:0.984,font:"20px 'Arial'",lineHeight:23.35}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"Al simplificar la expresión 2(3-4+6[{18/9 +1(4)}/2]) se obtiene el entero",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:18.9,y:62.9,text:"Leonardo acaba de proponer matrimonio a su novia, a lo que ella responde: No te mentiría si te dijera que no puedo no decirte que sea imposible negarte que sí creo que es cierto que no deja de ser falso que no vayamos a casarnos. Por lo tanto",lineWidth:326,scaleX:0.98,font:"16px 'Arial'",lineHeight:18.9}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:16.7,y:72.8,text:"Al simplificar la expresión  3/2+4(4/7)-4/5 se obtiene el numero racional",lineWidth:326,scaleX:0.987,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:26.3,y:80.5,text:"Dados los conjuntos A={1,2,3,4} y B = {a, b, c, d} es correcto afirmar",lineWidth:326,scaleX:0.936,font:"22px 'Arial'",lineHeight:25.55}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:23,y:61.8,text:"Un padre reparte entre sus hijos 800 000 pesos. Al mayor le da 4/9 de esa cantidad, al mediano 1/3 y al menor el resto. El porcentaje de dinero que recibió el menor es:",lineWidth:326,scaleX:0.936,font:"20px 'Arial'",lineHeight:23.35}}]},14).to({state:[]},1).to({state:[{t:this.instance_7}]},22).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_8},{t:this.pregunt1,p:{x:19.3,y:67.3,text:"Cuatro amigos, Álvaro, Bernardo, Camilo y Diego, junto con sus respectivas esposas, Laura, Fernanda, Eliana y María, organizan una cena. En el momento de la cena se ubican en una mesa redonda de tal manera que: ninguno está junto a su esposa y no hay dos mujeres juntas, además junto a Fernanda se encuentra Camilo. Sabiendo que Bernardo y Diego quedaron justo en frente, se concluye que entre Braulio y Danilo se encuentra:",lineWidth:326,scaleX:0.971,font:"12px 'Arial'",lineHeight:14.35}}]},14).to({state:[]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(39).to({_off:false},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},7).wait(36).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(37).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(37).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(37).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(37).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(34).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(37).to({_off:false,scaleY:1.23,x:544.3,y:133.1},0).to({_off:true,scaleY:1.23,x:178.8,y:129.6},4).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({_off:false},7).wait(13).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false},4).wait(14).to({startPosition:0},0).to({_off:true},1).wait(43));

	// NPreg
	this.instance_9 = new lib.Interpolación13("synched",0);
	this.instance_9.setTransform(-52.2,33.1,1.02,0.98);
	this.instance_9._off = true;

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAPB9IAAjCQgLALgQAKQgSALgPAFIAAgdQAagNATgRQASgRAIgQIAUAAIAAD5g");
	this.shape_73.setTransform(297.5,28.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhRB9QAAgLADgKQAHgRAOgQQAOgRAagVQAnghAOgSQAOgUAAgRQAAgTgMgMQgOgNgVAAQgUAAgNANQgOAOAAAXIgfgDQADgjAVgTQAVgSAiAAQAkAAAVAUQAVAUAAAdQAAAPgGAPQgGAOgOAOQgPAQghAcQgaAYgHAIQgIAIgFAJIB4AAIAAAdg");
	this.shape_74.setTransform(298.4,28.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag4BsQgVgUgEgfIAfgEQAGAaAMALQANAMASAAQAUAAAPgPQAPgPAAgWQAAgWgOgNQgOgOgVAAQgHAAgNAEIAEgZIAEAAQASAAAQgKQAQgLAAgVQAAgRgMgLQgLgLgQAAQgSAAgMALQgMAMgEAWIgegGQAFgfAUgRQAUgQAegBQASAAASAJQARAJAJAQQAJAPAAAQQAAARgJANQgIANgRAIQAWAFAMAOQANARAAAYQAAAhgYAWQgYAYgjAAQghgBgWgTg");
	this.shape_75.setTransform(298.7,29.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAVB9IAAg8IhqAAIAAgcIBxihIAZAAIAAChIAhAAIAAAcIghAAIAAA8gAg3AlIBMAAIAAhvg");
	this.shape_76.setTransform(298.2,28.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag4BqQgXgTgCggIAggDQADAYANAMQAOAMASAAQAUAAAQgRQAPgRAAgbQAAgbgPgNQgPgPgVAAQgPAAgMAHQgMAGgHAJIgdgEIAYh+IB7AAIAAAdIhiAAIgOBDQAXgPAXAAQAhAAAWAWQAXAVgBAkQAAAigTAZQgZAegnAAQgiAAgVgTg");
	this.shape_77.setTransform(298.8,29.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("Ag5BjQgYgdAAhAQAAhHAbghQAXgcAmgBQAdAAATARQATAQAEAeIgfACQgEgSgHgIQgNgNgSAAQgNAAgLAIQgOAKgJAVQgIAUAAAmQALgRAQgIQAQgJAPAAQAfAAAWAXQAVAVAAAjQAAAYgKAVQgKAUgSAKQgSAMgWAAQglAAgYgdgAgfADQgPAPAAAYQAAAQAHAOQAHAPAMAIQAMAHALAAQAUAAAOgQQAOgPAAgcQAAgagOgOQgOgNgVgBQgTABgOANg");
	this.shape_78.setTransform(298.6,29.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgtB7QABgdALgqQALgqAVglQATgnAXgaIh5AAIAAgeIChAAIAAAYQgYAZgYArQgXAogLAsQgJAggDAlg");
	this.shape_79.setTransform(298.8,29.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag6BpQgXgWAAggQAAgZAMgRQANgOAXgGQgUgHgJgNQgJgNAAgSQAAgbAUgTQATgTAgAAQAgABAUASQAUAUAAAbQAAARgJAOQgKAMgSAHQAXAHAMAQQAMAQAAAXQAAAggXAWQgWAXglAAQgkAAgWgXgAgjAPQgOAOAAAWQAAANAGAMQAGAMAMAIQANAGAMAAQAWAAAOgOQAPgOAAgXQAAgWgPgOQgPgPgVAAQgVAAgOAPgAgchaQgMAMAAAPQAAASAMALQALAMARAAQARAAAMgMQALgLAAgRQAAgQgLgMQgMgMgRABQgQAAgMALg");
	this.shape_80.setTransform(298.7,29.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Ag2BvQgTgRgDgdIAdgDQAEAVALAKQAKAJARAAQAMAAAKgGQALgHAHgLQAHgKAFgTQAEgSAAgUIAAgGQgJAPgQAJQgQAJgRAAQgfAAgVgXQgWgUAAglQAAgmAXgXQAWgYAiAAQAWABAVANQAUANAKAYQALAYAAAvQAAAtgLAdQgKAdgUAPQgWAPgZAAQgegBgSgQgAgihUQgPAQAAAbQAAAYAOAPQAPANAUAAQAUAAAOgNQAOgPAAgbQgBgagOgPQgNgQgUAAQgTAAgPARg");
	this.shape_81.setTransform(298.8,29.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag3BmQgZggAAhGQAAgrAJgbQAJgbASgPQASgPAaAAQAUAAAPAJQAPAIAKAPQAKAPAGAXQAFAVAAAkQAAAsgJAaQgJAcgSAPQgSAPgbAAQgjAAgUgagAghhTQgQAXAAA8QAAA9APAUQAOAVAUAAQAVAAAOgVQAPgUAAg9QAAg8gPgVQgOgUgVAAQgUAAgNASg");
	this.shape_82.setTransform(308.5,29.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAPB9IAAjCQgLALgQAKQgSALgPAFIAAgdQAagNATgRQASgRAIgQIAUAAIAAD5g");
	this.shape_83.setTransform(286.7,28.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAVB9IAAg8IhqAAIAAgcIBxihIAYAAIAAChIAiAAIAAAcIgiAAIAAA8gAg3AlIBMAAIAAhvg");
	this.shape_84.setTransform(309.2,28.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ag4BqQgXgTgDggIAhgDQAEAYANAMQAMAMATAAQAUAAAPgRQAQgRAAgbQAAgbgPgNQgPgPgWAAQgOAAgNAHQgMAGgGAJIgdgEIAZh+IB6AAIAAAdIhiAAIgNBDQAWgPAWAAQAhAAAXAWQAWAVABAkQgBAigTAZQgZAegnAAQgiAAgVgTg");
	this.shape_85.setTransform(308.7,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},39).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:297.5}}]},11).to({state:[]},1).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_74,p:{x:298.4}}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_75,p:{x:298.7}}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_76}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_77}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_78,p:{x:298.6}}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_79}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_80}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_81}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:287.9}},{t:this.shape_82}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_83},{t:this.shape_73,p:{x:306.1}}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:287.9}},{t:this.shape_74,p:{x:308.2}}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:289.1}},{t:this.shape_75,p:{x:309.8}}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:289.1}},{t:this.shape_84}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:287.9}},{t:this.shape_85}]},12).to({state:[]},1).to({state:[{t:this.instance_9}]},22).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_9},{t:this.shape_73,p:{x:289.1}},{t:this.shape_78,p:{x:309.7}}]},12).to({state:[]},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({x:299.5,y:30.1},9).wait(11).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(22).to({_off:false,x:-52.2,y:33.1},0).to({x:299.5,y:30.1},6).wait(12).to({startPosition:0},0).to({_off:true},1).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.5,316.9,180,40);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;