/******************
 * YOUR CODE HERE *
 ******************/
function xify(str){
  let string = ""
  for(let char of str){
    string += "x"
  } return string
}

function yellingChars(str){
  let string = ""
  for(let char of str){
    string += char + "!"
  }return string
}

function indexedChars(str){
  let string = ""
  for(let i =0; i < str.length; i++){
    string += i + str[i]
  } return string
}

function exclaim(str){
  let result = ""
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if(char === "?"|| char === "."){
      char = "!"
    }
    result += char
  } return result
}

function truncate(){

}

function emailify(str){

}

function reverse(){

}

function onlyVowels(){

}

function numberedChars(){
  let string = ""
  for(let i = 0; i < str.length; i++){
    string += "( + (i+1))" + str[i]
  } return string
  }


function crazyCase(){

}

function titleCase(){

}

function camelCase(){

}

function crazyCase2ReturnOfCrazyCase(){

}










 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
