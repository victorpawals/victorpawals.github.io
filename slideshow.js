window.onload = getContent();

var slideIndex = 0;

var dataInfo = null;

var testingInterval = function(){
$(".slideshow").html(chooseInfo())};

var interval = setInterval(testingInterval, 3000);

var timeout = setTimeout(testingInterval, 3000);




function nextSlide() {
	 var first = dataInfo.uutiset[0].otsikko;
	 var second = dataInfo.uutiset[1].otsikko;
	 var third =dataInfo.uutiset[2].otsikko;
	
	 if(current == first){
		 current = second;
	 }else if (current == second){
		 current = third;
	 } else {
		 current = first;
	 }
 }
	
 
 var current = localStorage.getItem("lastseen");
 
 function chooseInfo() {
	 var first = dataInfo.uutiset[0].otsikko + "<br>" + dataInfo.uutiset[0].sisältö + "<br>" + dataInfo.uutiset[0].päivämäärä; 
	 var second = dataInfo.uutiset[1].otsikko + "<br>" + dataInfo.uutiset[1].sisältö + "<br>" + dataInfo.uutiset[1].päivämäärä;
	 var third =dataInfo.uutiset[2].otsikko + "<br>" + dataInfo.uutiset[2].sisältö + "<br>" + dataInfo.uutiset[2].päivämäärä;
	 if(current == first){
		 current = second;
		 localStorage.setItem("lastseen", current);
	 }else if (current == second){
		 current = third;
		 localStorage.setItem("lastseen", current);
	 } else {
		 current = first;
		 localStorage.setItem("lastseen", current);
	 }
	 return current;
 }
 
function getContent(){
	$.getJSON('https://project-6883488650295468045.firebaseio.com/.json',
	 function(data){
		console.log(data);
		dataInfo = data;
	 })
}

showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
	timeout;
}















