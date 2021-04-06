//   <----------version 1 --------->
var imgs = document.querySelectorAll('#carouselExampleControls .carousel-item > img');
// imsArray nos cambia el nodeList por un array de los src
var imsArray = Array.prototype.map.call(imgs, img =>  img.src)
var img1 = document.querySelector('#img1');
let index = 0;
let inter;

// buttons
var btnAutoF = document.querySelector('#autoForwar');
btnAutoF.onclick = ()=> {
    inter = setInterval(() => {
        forwar()
    }, 1000);
} 
var btnAutoB = document.querySelector('#autoBack');
btnAutoB.onclick = ()=> {
    inter = setInterval(() => {
        back()
    }, 1000);
}
var btnForwar = document.querySelector('#forwar');
btnForwar.onclick = ()=> {
    forwar()
}
var btnBack =  document.querySelector('#back');
btnBack.onclick = ()=> {
    back()
}
var btnStop = document.querySelector('#stop');
btnStop.onclick = ()=> {
    clearInterval(inter)
}
// function
function forwar() {
    index ++;
    if(index === imgs.length ){
        index = 0
    }
    img1.src = imsArray[index]
}
function back() {
    index --;
    if(index === -1) {
        index = imgs.length -1
    }
    img1.src = imsArray[index]
}


//   <----------version 2 --------->

//let btnAutoB = document.querySelector('#aBack');
//let btnBack =  document.querySelector('#back');
//let btnStop = document.querySelector('#stop');
//let btnFowar = document.querySelector('#forwar');
//let btnAforwar = document.querySelector('#aForwar');    
//let img = document.querySelector('img');
//
//let img1 = './imgs/img1.jpeg';
//let img2 = './imgs/img2.jpeg';
//let img3 = './imgs/img3.jpeg';
//let img4 = './imgs/img4.jpeg';
//let img5 = './imgs/img5.jpeg';
//let img6 = './imgs/img6.jpeg';
//let img7 = './imgs/img7.jpeg';
//
//console.log(img1)
//
//let imgs = [img1, img2, img3, img4, img5, img6, img7];
//let index = 0;
//let inter = -1;
//img.src = imgs[index];
//// boton next
//btnFowar.onclick = ()=> forwar();
//// boton back
//btnBack.onclick = ()=> back();
//// recorrido delantero
//btnAforwar.onclick = ()=> {
//    inter = setInterval(() => {
//        forwar()
//    }, 1000);
//}
//// recorrido trasero
//btnAutoB.onclick = ()=> {
//    inter = setInterval(() => {
//        back()
//    }, 1000);
//}
//// boton stop
//btnStop.onclick = ()=> {
//    clearInterval(inter)
//}
//
//function forwar() {
//    index ++;
//    if(index === imgs.length) {
//        index = 0
//    }
//    img.src = imgs[index]
//    console.log(img.src)
//}
//
//function back() {
//    index --;
//    if(index === -1 ) {
//        index = imgs.length -1
//    }
//    console.log(imgs[index])
//    img.src = imgs[index]
//    
//}
//








