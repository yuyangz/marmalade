var pic = document.getElementById("vimage");
var clear_button = document.getElementById("clear");
var array = [];

var placeDots = function(e){
    var x = Math.random() * pic.getAttribute("width");
    var y = Math.random() * pic.getAttribute("height");
    var dot = drawDots(x,y,1,1);
}

var drawDots = function(x,y, changeX, changeY){
    var cl = document.createElementNS("http://w3.org/2000/svg", "circle");
    
    cl.getRad = function(){
	return this.getAttribute("r");
    }
    cl.getX = function(){
	return this.getAttribute("cx");
    }
    cl.getY  = function(){
	return this.getAttribute("cy");
    }
    
    cl.setColor = function(color){
	this.setAttribute("fill", color);
    }
    cl.setRad = function(rad){
	this.setAttribute("r", rad);
    }
    cl.setX = function(x){
	this.setAttribute("cx", x);
    }
    cl.setY = function(y){
	this.setAttribute("cy", y);
    }
    cl.setStroke = function(color){
	this.setAttribute("stroke", color);
    }

     cl.display = function(){
	pic.appendChild(this);
     }
    
    cl.bounce = function(e){
	var x = parseInt(cl.getX());
	var y = parseInt(cl.getY());
	if (x <= 0 || x >= pic.getAttribute("width")){
	    changeX = changeX * -1;
	}
	if( y <= 0 || y >= pic.getAttribute("height")){
	    changeY = changeY * -1;
	}
//	console.log(y);
//	console.log(changeY);
	
	//console.log(x);
	//console.log(changeX);
	cl.setX(x+changeX);
	cl.setY(y+changeY);
	cl.display()
    }
    
    cl.setX(x);
    cl.setY(y);
    cl.setColor("pink");
    //cl.setStroke("black");
    cl.setRad(10);
    var id = setInterval(cl.bounce, 50);
    array.push(id);
    return cl;
}

var clear = function(){
    pic.innerHTML = "";
}

pic.addEventListener("click", placeDots);
clear_button.addEventListener("click", clear);

  
	
