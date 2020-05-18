var a= document.getElementById("clip");
var b= document.getElementById("clipp");
var c= document.getElementById("clippp");
var d= document.getElementById("clipppp");
var testing=document.getElementById("testing");
var boy=document.getElementById("boy");
var boyy=document.getElementById("boyy");
var sound = document.getElementById('sound');
var soundd = document.getElementById('soundd');
var sounddd = document.getElementById('sounddd');
var soundddd = document.getElementById('soundddd');
var hah = document.getElementById('hah');
var bb = document.getElementById('bb');
var art = document.getElementById('art');
var meh = document.getElementById('meh');
var ehh = document.getElementById('ehh');
var uzi = document.getElementById('uzi'); 
var bub = document.getElementById('bub'); 
var blu = document.getElementById('blu'); 
var y = document.getElementById('y');
x = 0
function createText (el) {
	x = x + 1
    if (x == 1) {
        resetall();
	a.innerHTML = "A$AP Mob - RAF ft. A$AP Rocky, Playboi Carti, Quavo, Lil Uzi Vert, Frank Ocean";
	stop();
	sound.play();
    }else if (x == 2) {
	resetall();
	b.innerHTML = "A$AP Mob - Yamborghini High (Audio) ft. Juicy J ";
	stop();
	soundd.play();
    }else if (x == 3) {
	resetall();
	c.innerHTML = "Chief Keef - Blowin Minds ft. A$AP Rocky, Playboi Carti & ASAP Nast";
	stop();
	sounddd.play();
    } else if (x == 4) {
	resetall();
	d.innerHTML = "A$AP Rocky - Canal St ft. Bones";
	stop();
	soundddd.play();    
}
function spin(elem) {
	testing.classList.toggle("spin");
	hah.play();
	bb.classList.add("up");
	art.classList.add("upp");
	meh.classList.add("upp");
	ehh.classList.add("up");
}
function changeMe() {
	boyy.classList.add("hide");
	boy.classList.remove("hide");
}

function stop() {
	sound.pause();
	soundd.pause();
	sounddd.pause();
	soundddd.pause();
}

function resetall(){
	a.innerHTML = '<img src="images/uzi.png" class="contain2 pointer" onclick="createText(this)"/>';
	b.innerHTML = '<img src="images/bub.png" class="contain2 pointer" onclick="createTextt(this)" />';
	c.innerHTML = '<img src="images/blu.png" class="contain2 pointer" onclick="createTexttt(this)"/>';
	d.innerHTML = '<img src="images/y.png" class="contain2 pointer" onclick="createTextttt(this)"/>';
}
	

	
	
