var right = document.getElementById("next"),
  left = document.getElementById("prev"),
  first = document.getElementById("first"),
  i = 0;

var arrayImg = ['img/img(1).jpg', 'img/img(2).jpg',
                'img/img(3).jpg', 'img/img(4).jpg',
                'img/img(5).jpg', 'img/img(6).jpg',
                'img/img(7).jpg', 'img/img(8).jpg',
                'img/img(9).jpg', 'img/img(10).jpg'];


right.onclick = function () {
  if (i == arrayImg.length - 1) {
    i = 0;
  } else {
    i++;
  }
  first.src = arrayImg[i];
};


left.onclick = function () {
  if (i == 0) {
    i = arrayImg.length - 1;
  } else {
    i--;
  }
  first.src = arrayImg[i];
};













// ============================= Another Solution =============================
/*
var right = document.getElementById("next"),
    left = document.getElementById("prev"),
    first = document.getElementById("parent").firstElementChild,
    i = 1;

right.onclick = function(){
  if(i == 10){
    i=1;
  }else{
    i++
  }
  first.src = `img/img(${i}).jpg`;  
}


left.onclick = function(){
  if(i == 1){
    i = 10;
  }else{
    i--
  }
  first.src = `img/img(${i}).jpg`
}
*/

















