var pic = document.getElementById("vimage");

var clicked = function(e){
    if (e.toElement == this){
        var d0t = drawDot(e.offsetX, e.offsetY, 50, "pink" );
	//d0t.display();
	e.stopPropagation();
    }
}

var left = true;
var down = true;

var drawDot = function(xc,yc,rad,color){

    id = requestAnimationFrame(drawDot);
    
    var dot = {
	cl : document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "circle"),
	
	xcor: function(xc){
	    this.cl.setAttribute("cx", xc);
	},
	ycor: function(yc){
	    this.cl.setAttribute("cy", yc);
	},
	rad: function(rad){
	    this.cl.setAttribute("r", rad);
	},
	color: function(color){
	    this.cl.setAttribute("fill",color)
	},

	
	display: function(){
	    pic.appendChild(this.cl);
	},

	
	xsee: function(){
	    return this.cl.getAttribute("cx");
	},
	ysee: function(){
	    return this.cl.getAttribute("cy");
	},
	radsee: function(){
	    return this.cl.getAttribute("r");
	},
	colorsee: function(){
	    return this.cl.getAttribute("fill");
	},
		    

	wall: function(){

	    x = parseInt(this.xsee())
	    y = parseInt(this.ysee())
	    
	    if(x < 1 || x > 450){
		console.log(x)
		console.log(left)
		left = !left }
	    
	    if ( y < 1 || y > 450 ) {
		down = !down }

	    if(left){x++;}
	    else{x--;}

	    if(down){y++;}
	    else{y--;}
	    
	    //console.log(x)
	    //console.log(y)
	    
	    this.xcor( x );
	    this.ycor( y );
	    this.display();
	}
	
    }
    
    dot.xcor(xc);
    dot.ycor(yc);
    dot.rad(rad);
    dot.color(color);
    //dot.display()
    dot.wall();
}

var clear = function(e){
    pic.innerHTML="";   
}

pic.addEventListener("click", clicked);

c = document.getElementById("clr")
c.addEventListener("click",clear)
