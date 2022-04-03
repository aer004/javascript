var array_letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];

var random_loop = Math.floor(Math.random() * 30);
var random_index = Math.floor(Math.random() * array_letters.length);
var string_print = ""

for (let i = 0; i < random_loop; i++) {
  string_print += array_letters[random_index]
  random_index = Math.floor(Math.random() * array_letters.length);
}

console.log(string_print)
