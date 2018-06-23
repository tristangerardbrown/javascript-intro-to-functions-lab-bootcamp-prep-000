function shout(string) {
return string.toUpperCase()
}
function whisper(string) {
return string.toLowerCase()
}
function logShout(string) {
console.log(string.toUpperCase())
}
function logWhisper(string) {
console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
<<<<<<< HEAD
 if (string.toUpperCase() === string) 
    return "YES INDEED!"
 else if (string === "I love you, Grandma.") 
    return "I love you, too."
else 
    return "I can't hear you!"
=======
  var lowercase = 'hello'
  lowercase.toLowerCase(string) === lowercase
    return "I can't hear you!"
}
function sayHiToGrandma(string) {
 var uppercase = 'HELLO!'
  uppercase.toUpperCase(string) === uppercase
    return "YES INDEED!"
}
function sayHitoGrandma(string) {
  var mixedCase = 'Hi there!'
  mixedCase.toLowerCase() === mixedCase 
  mixedCase.toUpperCase() === mixedCase 
    return "I love you, too"
>>>>>>> 15ede42c3917e6be8d4ba2e091cb8f22294044e2
}