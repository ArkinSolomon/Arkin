const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

exports.sleep = function(delay){
  var start = new Date().getTime();
  while(new Date().getTime()<start+delay);
}

exports.end = function(){
  process.exit(0);
}

exports.error = function(ERR){
  console.log("There was an error:\n"+ ERR);
  process.exit(1);
}
