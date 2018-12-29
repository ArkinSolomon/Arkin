const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function wait(ms){
  var start = new Date().getTime();
  while(new Date().getTime()<start+ms);
}

exports.question = async function(q){
  var response;
  rl.question(q, (userInput) =>{
    await rl.close();
    wait(150);
    response = userInput;
    return response;
  });
}

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

exports.list = function(list){
  console.log(list + '\n');
}

exports.clear = function(){
  process.stdout.write('\033c');
}

exports.getDate = function(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = mm + '/' + dd + '/' + yyyy;

  return today;
}
