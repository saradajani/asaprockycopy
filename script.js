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
var uzi = document.getElementById('uzi'); 
var uzi = document.getElementById('uzi'); 
var uzi = document.getElementById('uzi'); 

x=1, x=2, x=3, x=4
run createText
if x=1
else
else if x=2
What I am showing with algorithm, I am explaining how a function works and is calling other algortihs--> calling reset all algorithm
Math/logic --> conditional statement
calling on functions which are defined below
subabstration example: reset all or stop function (reduced complexity) reduce that to single line of code
reset all 
had a problem--> resolved it making code more efficient
sound playing on eachother, needed a stop function

function createText(elem){
	resetall();
	a.innerHTML = "A$AP Mob - RAF ft. A$AP Rocky, Playboi Carti, Quavo, Lil Uzi Vert, Frank Ocean";
	stop();
	sound.play();
	
}
function createTextt(elem){
	resetall();
	b.innerHTML = "A$AP Mob - Yamborghini High (Audio) ft. Juicy J ";
	stop();
	soundd.play();
}
function createTexttt(elem){
	resetall();
	c.innerHTML = "Chief Keef - Blowin Minds ft. A$AP Rocky, Playboi Carti & ASAP Nast";
	stop();
	sounddd.play();
}
function createTextttt(elem){
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
1}

function resetall(){
	a.style.backgroundImage = 'uzi';
	b.innerHTML = '<img src="images/bub.png" class="contain2 pointer" onclick="createTextt(this)" />';
	c.innerHTML = '<img src="images/blu.png" class="contain2 pointer" onclick="createTexttt(this)"/>';
	d.innerHTML = '<img src="images/y.png" class="contain2 pointer" onclick="createTextttt(this)"/>';
}
	

	
	
