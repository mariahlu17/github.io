// menu hamburger
const about =document.querySelector('.About');
const button =document.querySelector('button');
let w = window.outerWidth;
const menu =document.querySelector('nav');
const body =document.querySelector('body');

function showMenu(){
  menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        button.style.left ='300px'
        if(w > 900)
        {
          about.style.visibility='visible'
        }
        else {
          about.style.visibility ='hidden'
        }
        
}
    else{
          button.style.left='0px'
          about.style.visibility='visible'
        }
}

        function hideMenu(){
            menu.classList.remove('active')
            button.style.left ='0px'
            about.style.visibility ='visible'
        }

     
        
        button.addEventListener('click',showMenu)
        menu.addEventListener('click',hideMenu)

//animation of photo

    var range = 2;
    var stop_it = 0;
    var a = 1;
        
    function init(given){
        stop_it = 0;
        shak_img = given;
        shak_img.style.left = "0px";
        shak_img.style.top = "0px";
    }
        
    function shaking_image(){
        if ((!document.all&&!document.getElementById)||stop_it==1) return;
        if (a==1) shak_img.style.top = parseInt(shak_img.style.top) + range + "px";
        else if (a==2) shak_img.style.left = parseInt(shak_img.style.left) + range + "px";
        else if (a==3) shak_img.style.top = parseInt(shak_img.style.top) - range + "px";
        else shak_img.style.left = parseInt(shak_img.style.left) - range + "px";
        if (a<4) a++
        else a = 1;
        setTimeout("shaking_image()", 40);
    }
        
    function stop_shaking(given){
        stop_it = 1;
        given.style.left = "0px";
        given.style.top = "0px";
    }

//text animation
var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 100000)||5000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 300 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 1; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 5px solid rgba(44, 253, 7, 0.6) }";
	document.body.appendChild(css);
  };
