const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function wait(ms){
  var start = new Date().getTime();
  while(new Date().getTime()<start+ms);
}

exports.question = function(q){
  var response;
  rl.setPrompt(q);
  rl.prompt();
  rl.on('line', (userInput) => {
    response = userInput;
    rl.close();
  });
  rl.on('close', () => {
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

exports.getDate = function(config){

  var params = JSON.parse(config);
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd < 10) {
      dd = '0' + dd
  }

  if(mm < 10) {
      mm = '0'+mm
  }

  if (params.separator === undefined){
    sep = '/'
  }

  var sep = params.separator;

  today = mm + sep + dd + sep + yyyy;

  return today;
}
