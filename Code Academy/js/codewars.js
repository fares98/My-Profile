/* global console, document*/

/*
function triangle(row) {
  var array = row.split(''), length = array.length-1;

  for(var x = 0; x<length; x++){
    for(var i = 0; i < array.length; i++){
      
      if(array[i] === array[i+1]){
        array[i] = array[i];
      }else if(array[i] == 'R' && array[i+1] == 'G' || array[i] == 'G' && array[i+1] == 'R'){
        array[i] = 'B';
      }else if(array[i] == 'R' && array[i+1] == 'B' || array[i] == 'B' && array[i+1] == 'R'){
        array[i] = 'G';
      }else{
        array[i] = 'R';
      }
      
    }
    array.pop();
  }
  return array.join();
}
*/

/*
function triangle(row) {
  var array = row.split(''), length = array.length-1;

  function test(){
    for(var i = 0; i<array.length-1; i++){
      var array2 = [];
      array2[0] = array[i];
      array2[1] = array[i+1];
      var tow = array2.join('');

      if(tow == 'RB' || tow == 'BR' || tow == 'GG'){
        array[i] = 'G';
      }else if(tow == 'RG' || tow == 'GR' || tow == 'BB'){
        array[i] = 'B';
      }else{
        array[i] = 'R';
      }

    }
    array.pop();
  }

  for(var i = 0; i<length; i++){ test() }

  return array.join('');
}
*/









/*
function validSolution(board){
  var sumRow = 0, sumCol = 0, result = true, prevRow = 0, prevCol = 0;

  if(Array.isArray(board)){
  
    for(var j = 0; j < 9; j++){
      for(var i = 0; i < 9; i++){
        sumRow = 0;
        prevRow = board[j][i];

        for(var x = 0; x<9; x++){
          if(prevRow == board[i][x]){ sumRow += 1; }
          if(sumRow > 1){ result = false; }
        }  
      }

    }

    for(var j = 0; j<9; j++){
      for(var i = 0; i< board[0].length; i++){
        sumCol = 0;
        prevCol = board[j][i];

        for(var x = 0; x<board[0].length; x++){
          if(prevCol == board[x][i]){ sumCol += 1; }
          if(sumCol > 1){ result = false; }
        }

      }
    }


  }else{
     result = false;
   }
  
  console.log(result);
  return result;
}



validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);







*/







/*

function validSolution(board){
  var sumRow = 0, sumCol = 0, result = true, prevRow = 0, prevCol = 0;

  for(var j = 0; j < 9; j++){
    for(var i = 0; i < 9; i++){
      sumRow = 0;
      prevRow = board[j][i];
      
      for(var x = 0; x<9; x++){
        if(prevRow == board[i][x]){ sumRow += 1; }
        if(sumRow > 1){ result = false; }
      }  
    }
    
  }
  
  
  for(var j = 0; j<9; j++){
    for(var i = 0; i< board[0].length; i++){
      sumCol = 0;
      prevCol = board[j][i];

      for(var x = 0; x<board[0].length; x++){
        if(prevCol == board[x][i]){ sumCol += 1; }
        if(sumCol > 1){ result = false; }
      }

    }
  }
  
 
  console.log(result);
  return result;
}



validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]);
*/





/*

  function random(){
    var result = 0, foundNumers = [];
    
    for (var j = 0; j<arr.length; j++){
      for(var i = 0; i <arr.length; i++){
        foundNumers.length = 0;

        for(var x = 0; x< arr.length; x++){      // For Rows
          if(arr[j][x] > 0){
            foundNumers.push(arr[j][x]);
          }
        }
        
        for(var x = 0; x<arr.length; x++){       // For Columons
          if(arr[x][i] > 0){
            foundNumers.push(arr[x][i])
          }
        }

          console.log(foundNumers)

      }
    }


  }

*/




//      result = Math.ceil(Math.random() * 9);

/*
function sudoku(arr){
  
  function random(){
    var result = 0, foundNumers = [];
    
    for (var j = 0; j<arr.length; j++){
      for(var i = 0; i <arr.length; i++){
        foundNumers.length = 0;

        for(var x = 0; x< arr.length; x++){      // For Rows
          if(arr[j][x] > 0){
            foundNumers.push(arr[j][x]);
          }
        }
        
        for(var x = 0; x<arr.length; x++){       // For Columons
          if(arr[x][i] > 0){
            foundNumers.push(arr[x][i])
          }
        }

          console.log(foundNumers)

      }
    }


  }
  
  
  
  random()
  
  
  
  
 console.log('====================================')
  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
  console.log(arr[4]);
  console.log(arr[5]);
  console.log(arr[6]);
  console.log(arr[7]);
  console.log(arr[8]);
}

sudoku([
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
                            ])






*/





























//================================================Start The Slider======================================

var right = document.getElementById("next"),
    left = document.getElementById("prev"),
    first = document.getElementById("first"),
    i = 0;

var arrayImg = ['img/img(1).jpg', 'img/img(2).jpg', 
                'img/img(3).jpg', 'img/img(4).jpg', 
                'img/img(5).jpg', 'img/img(6).jpg', 
                'img/img(7).jpg', 'img/img(8).jpg', 
                'img/img(9).jpg', 'img/img(10).jpg']


right.onclick = function(){
  if(i == arrayImg.length-1){
    i=0;
  }else{
    i++
  }
  first.src = arrayImg[i]  
}


left.onclick = function(){
  if(i == 0){
    i = arrayImg.length-1;
  }else{
    i--
  }
  first.src = arrayImg[i]  
}













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

















