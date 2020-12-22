(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.mice = function() {
	this.initialize(img.mice);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.microDNA_1 = function() {
	this.initialize(img.microDNA_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.microDNA_2 = function() {
	this.initialize(img.microDNA_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.microDNA_3 = function() {
	this.initialize(img.microDNA_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.mouse_background = function() {
	this.initialize(img.mouse_background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.mouse_foot = function() {
	this.initialize(img.mouse_foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.mouse_foot2 = function() {
	this.initialize(img.mouse_foot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.mouseHighlight = function() {
	this.initialize(img.mouseHighlight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.trna_2_1 = function() {
	this.initialize(img.trna_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.trna_2_2 = function() {
	this.initialize(img.trna_2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.trna_2_3 = function() {
	this.initialize(img.trna_2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);


(lib.trna_2_4 = function() {
	this.initialize(img.trna_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,450);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363435").s().p("AgtAAIgphGICtBGIitBHg");
	this.shape.setTransform(-38,78.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#363435").ss(5).p("AjDAAIGHAA");
	this.shape_1.setTransform(-61.2,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_2.setTransform(76.3,-73);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAwIAAg4QAAgKgCgEQgCgFgEgDQgFgDgGAAQgJAAgIAGQgHAHAAASIAAAyIgQAAIAAhdIAOAAIAAAOQALgQASAAQAIAAAIADQAHADADAFQAEAFABAHIABAPIAAA5g");
	this.shape_3.setTransform(68.7,-71.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQANgNARAAQAUAAAMANQALANAAAWIAAAEIhFAAQABAQAIAIQAIAIAKAAQAKAAAFgFQAGgEAEgKIARACQgEAOgLAIQgKAIgRAAQgTAAgMgNgAgRgbQgHAHgBAMIAzAAQAAgMgGgGQgHgJgMAAQgKAAgIAIg");
	this.shape_4.setTransform(58.7,-71.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvAwIAAg6QAAgKgBgEQgCgEgEgCQgEgDgFAAQgKAAgHAHQgGAGAAAPIAAA1IgPAAIAAg8QAAgKgEgGQgEgFgIAAQgHAAgGAEQgFADgDAHQgDAHAAAMIAAAwIgPAAIAAhdIAOAAIAAAOQAEgHAHgEQAIgFAJAAQAKAAAHAFQAGAEACAIQAMgRARAAQAOAAAIAIQAHAIAAAQIAAA/g");
	this.shape_5.setTransform(46.2,-71.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_6.setTransform(36.3,-73);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiApQgIgHAAgMQAAgHADgFQADgGAFgDQAGgDAGgCIANgCQATgCAJgDIAAgFQAAgJgEgEQgHgGgLAAQgKAAgGAEQgFAEgDAKIgQgCQADgKAEgGQAFgGAKgDQAJgEALAAQAMAAAHADQAIADADAEQAEAEABAHIABAPIAAAUQAAAWABAGQABAFADAGIgQAAQgDgFgBgHQgIAIgIADQgIADgJAAQgPAAgJgIgAgDAGQgKABgDACQgEACgDADQgCAEAAAEQAAAGAEAEQAFAEAJAAQAJAAAHgDQAHgFAEgGQACgGAAgKIAAgGQgJADgQADg");
	this.shape_7.setTransform(28.7,-71.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAkQgMgMAAgXQAAgXAMgNQAMgNATAAQASAAAMANQAMANAAAWIAAAEIhEAAQABAQAHAIQAIAIALAAQAJAAAGgFQAFgEAFgKIAPACQgDAOgKAIQgLAIgQAAQgUAAgMgNgAgQgbQgIAHAAAMIAzAAQgCgMgFgGQgHgJgMAAQgKAAgHAIg");
	this.shape_8.setTransform(18.7,-71.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAwIAAhdIAPAAIAAAPQAFgKAFgEQADgDAGAAQAIAAAIAFIgFAPQgGgDgGAAQgFAAgDADQgEADgCAFQgCAJgBAKIAAAwg");
	this.shape_9.setTransform(11.4,-71.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_10.setTransform(5.3,-73);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBA9QgFgCgCgFQgCgFAAgOIAAg0IgMAAIAAgNIAMAAIAAgXIAPgJIAAAgIAQAAIAAANIgQAAIAAA1QAAAHABACQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAIAGABIAHgBIACAPIgMABQgJgBgDgCg");
	this.shape_11.setTransform(-4.7,-73);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZApQgKgHgDgPIAQgDQABAKAGAFQAGAFAKAAQALAAAFgFQAGgEAAgGQAAgFgFgDQgDgDgNgDQgRgEgGgDQgHgDgEgFQgDgGAAgHQAAgGADgFQADgGAFgDQADgDAHgCQAGgCAHAAQAKAAAJADQAIAEAEAFQAEAFABAJIgPADQgBgIgFgEQgFgEgJAAQgKAAgFAEQgFAEAAAEQAAADACADQACACAEACIANAEIAYAIQAGABAEAGQAEAFAAAIQAAAIgFAHQgEAHgJAEQgJAEgLAAQgRAAgJgIg");
	this.shape_12.setTransform(-11.9,-71.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAkQgMgMAAgYQAAgZAPgMQAMgLAQAAQATAAAMANQANANAAAWQAAARgGAKQgFAKgKAGQgLAGgMAAQgTAAgMgNgAgTgaQgIAJAAARQAAASAIAJQAIAJALAAQAMAAAIgJQAHgJAAgSQAAgRgHgJQgIgJgMAAQgLAAgIAJg");
	this.shape_13.setTransform(-21.3,-71.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgwBBIAAiBIAwAAQAMAAAHACQAJABAHAFQAHAEADAJQAEAHAAAKQAAAQgKALQgKALgcAAIggAAIAAA1gAgfgCIAgAAQARAAAHgGQAGgHAAgKQAAgIgEgHQgDgFgHgCIgQgBIggAAg");
	this.shape_14.setTransform(-32,-73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,-85.1,164.1,170.3);


(lib.redHighlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouseHighlight();
	this.instance.parent = this;
	this.instance.setTransform(-160,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.redHighlight, new cjs.Rectangle(-160,-225,320,450), null);


(lib.mouseFootRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse_foot();
	this.instance.parent = this;
	this.instance.setTransform(-160,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouseFootRight, new cjs.Rectangle(-160,-225,320,450), null);


(lib.mouseFootLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mouse_foot2();
	this.instance.parent = this;
	this.instance.setTransform(-160,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mouseFootLeft, new cjs.Rectangle(-160,-225,320,450), null);


(lib.button3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgY/AjKMAAAhGTMAx/AAAMAAABGTg");
	this.shape.setTransform(160,225);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.button2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgY/AjKMAAAhGTMAx/AAAMAAABGTg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("EgY/AjKMAAAhGTMAx/AAAMAAABGTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.button1, new cjs.Rectangle(-160,-225,320,450), null);


(lib.button1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.movieClip_1 = new lib.button1();
	this.movieClip_1.parent = this;
	this.movieClip_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.websiteAnimateComp_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		stop();
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.adobe.com", "_blank");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.racheldavidowitz.com", "_blank");
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_3.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.adobe.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(129));

	// button3
	this.button_3 = new lib.button3();
	this.button_3.parent = this;
	this.button_3.setTransform(800,225,1,1,0,0,0,160,225);
	new cjs.ButtonHelper(this.button_3, 0, 1, 2, false, new lib.button3(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_3).wait(129));

	// button2
	this.button_2 = new lib.button2();
	this.button_2.parent = this;
	this.button_2.setTransform(480,225);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.button2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(129));

	// button1
	this.button_1 = new lib.button1b();
	this.button_1.parent = this;
	this.button_1.setTransform(160,225);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button1b(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(129));

	// microDNA3
	this.instance = new lib.microDNA_3();
	this.instance.parent = this;
	this.instance.setTransform(320,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).wait(55));

	// microDNA2
	this.instance_1 = new lib.microDNA_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(320,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).to({_off:true},14).wait(55));

	// microDNA1
	this.instance_2 = new lib.microDNA_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(320,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},60).wait(69));

	// tRNA4
	this.instance_3 = new lib.trna_2_4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(640,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).wait(15));

	// tRNA3
	this.instance_4 = new lib.trna_2_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({_off:true},15).wait(15));

	// tRNA2
	this.instance_5 = new lib.trna_2_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(84).to({_off:false},0).to({_off:true},15).wait(30));

	// tRNA1
	this.instance_6 = new lib.trna_2_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(640,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},84).wait(45));

	// text
	this.instance_7 = new lib.text("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(211.1,149.9,1,1,0,0,0,-1.3,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({startPosition:0},0).to({alpha:1},11).wait(102));

	// redHighlight
	this.instance_8 = new lib.redHighlight();
	this.instance_8.parent = this;
	this.instance_8.setTransform(11,225);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({alpha:1},14).wait(113));

	// mice
	this.instance_9 = new lib.mice();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(129));

	// mouseFootLeft
	this.instance_10 = new lib.mouseFootLeft();
	this.instance_10.parent = this;
	this.instance_10.setTransform(252.2,305.6,1,1,-3,0,0,-51,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(28).to({regX:-50.9,regY:77.2,rotation:-18,x:252,y:307.1},5).to({regX:-50.8,rotation:5,x:255,y:306},12).to({regX:-51,regY:77,rotation:-3,x:252.2,y:305.6},6).wait(78));

	// mouseFootLeft
	this.instance_11 = new lib.mouseFootRight();
	this.instance_11.parent = this;
	this.instance_11.setTransform(53,298,1,1,0,0,0,43,78);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:43.1,rotation:17,x:52.4,y:301.2},5).to({regY:78.1,scaleX:1,scaleY:1,rotation:-11,x:49,y:298.3},12).to({scaleX:1,scaleY:1,rotation:0,x:53.1,y:298.1},6).wait(106));

	// mouseBackground
	this.instance_12 = new lib.mouse_background();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(330,218,1110,466);
// library properties:
lib.properties = {
	width: 960,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/mice.png", id:"mice"},
		{src:"images/microDNA_1.jpg", id:"microDNA_1"},
		{src:"images/microDNA_2.jpg", id:"microDNA_2"},
		{src:"images/microDNA_3.jpg", id:"microDNA_3"},
		{src:"images/mouse_background.jpg", id:"mouse_background"},
		{src:"images/mouse_foot.png", id:"mouse_foot"},
		{src:"images/mouse_foot2.png", id:"mouse_foot2"},
		{src:"images/mouseHighlight.png", id:"mouseHighlight"},
		{src:"images/trna_2_1.jpg", id:"trna_2_1"},
		{src:"images/trna_2_2.jpg", id:"trna_2_2"},
		{src:"images/trna_2_3.jpg", id:"trna_2_3"},
		{src:"images/trna_2_4.jpg", id:"trna_2_4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;