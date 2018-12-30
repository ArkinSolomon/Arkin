//INTERNAL WAIT FUNCTION
function wait(ms){
  var start = new Date().getTime();
  while(new Date().getTime()<start+ms);
}

//INTERNAL ERROR FUNCTION
function error(ERR){
  console.log("There was an error:\n"+ ERR);
  process.exit(1);
};

//EXTERNAL WAIT FUNCTION
exports.sleep = function(delay){
  var start = new Date().getTime();
  while(new Date().getTime() < start + delay);
}

//END FUNCTION
exports.end = function(){
  process.exit(0);
}

//EXTERNAL ERROR FUNCTION
exports.error = function(ERR){
  error(ERR);
}

//LIST FUNCTION
exports.list = function(list){
  console.log(list + '\n');
}

//CLEAR FUNCTION
exports.clear = function(){
  process.stdout.write('\033c');
}

//DATE FUNCTION
exports.getDate = function(config){

  //GETS VARS
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var year = today.getFullYear();

  var sep;
  //CHECKS NUMBERS TO MAKE THEM USER FRIENDLY
  if(dd < 10) {
      dd = '0' + dd;
  }

  if(mm < 10) {
      mm = '0'+ mm;
  }

  //CHANGES YEAR FROM INTEGER TO STRING
  year = year.toString();

  //CHECKS IF CONFIG DOES NOT EXIST
  if (!config){
    today = mm + '/' + dd + '/' + year;
  }else{

    //CHECKS FOR SEPERATOR
    if (config && typeof config.separator === 'undefined'){
      sep = '/';
    }else{
      sep = config.separator;
    }

    //CHECKS FOR FORMAT
    if (config.format){

      //CHECKS FOR YEAR FORMATING
      if (config && config.format && typeof config.format.year === 'undefined' || config.format.year == 'yyyy'){
        year = year;
      }else if (config.format.year == 'yy'){
        year = year.substring(2);
      }else if (config.format.year == 'yyy'){
        year = year.substring(1);
      }else{
        error("That is not a valid year format");
      }
    }

    //ORDER
    if (config && config.format && typeof config.format.order === 'undefined' || config.format.order === 'month-day-year'){

      //MONTH-DAY-YEAR
      today = mm + sep + dd + sep + year;
    }else if (config.format.order === 'day-month-year'){

      //DAY-MONTH-YEAR
      today = dd + sep + mm + sep + year;
    }else if (config.format.order === 'month-year-day'){

      //MONTH-YEAR-DAY
      today = mm + sep + year + sep + dd;

    }else if (config.format.order === 'year-month-day'){

      //YEAR-MONTH-DAY
      today = year + sep + mm + sep + dd;
    }else if (config.format.order === 'day-year-month'){

      //DAY-YEAR-MONTH
      today = dd + sep + year + sep + mm;
    }else{
      error("That is not a valid order format")
    }
  return today;
  }
}
