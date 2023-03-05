const imgbox = document.querySelector('.imgbox');
const slides = imgbox.getElementsByTagName('img');
const schoolbox =document.querySelector('.schoolbox');
const nextedu = schoolbox.getElementsByClassName('eduinfor');
var i =0 ; 

function nextslide(){
    slides[i].classList.remove('active');
     i = (i+1) % slides.length;
    slides[i].classList.add('active');
}

function prevslide(){
    slides[i].classList.remove('active');
     i = (i-1+ slides.length) % slides.length;
    slides[i].classList.add('active');
}

function nextinfo(){
    nextedu[i].classList.remove('active');
    i = (i+1) % nextedu.length;
    nextedu[i].classList.add('active');
}

function previnfo(){
    nextedu[i].classList.remove('active');
    i = (i-1 + nextedu.length) % nextedu.length;
    nextedu[i].classList.add('active');
}
