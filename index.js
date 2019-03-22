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
exports.list = function(list, config){
  //LIST COUNTER
  var listCounter;

  //ARRAY COUNTER
  var i = 0;

  //MARKER FOR LISTS
  var marker;

  if (typeof config === 'undefined' || typeof config.startingNumber === 'undefined'){
    listCounter = 1;
  }else{
    listCounter = config.startingNumber;
  }
  if (typeof config === 'undefined' || typeof config.marker === 'undefined'){
    marker = '.';
  }else{
    marker = config.marker;
  }
  for (listCounter = 1; listCounter <= list.length; listCounter++){
    let number = listCounter.toString();
    console.log(number + marker + ' ' + list[i]);
    i++;
  }
}

//CLEAR FUNCTION
exports.clear = function(){
  process.stdout.write('\033c');
}

//GETDATE FUNCTION
exports.getDate = function(config){

  //GETS VARS
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var year = today.getFullYear();

  //SEPERATOR
  var sep;

  //ADDS AN EXTRA ZERO IF SPECIFIED
  if (typeof config !== 'undefined'){
    if (typeof config.format !== 'undefined'){
      if (config && config.format && config.format.extraZero === true || config && config.format && typeof config.format.extraZero === 'undefined'){
        if(dd < 10) {
            dd = '0' + dd;
        }

        if(mm < 10) {
            mm = '0'+ mm;
        }
      }else if (config && config.format && config.format.extraZero === false) {
        mm = mm;
        dd = dd;
      }else{
        error("'extraZero' should be either true or false");
      }
    }
  }

  //CHANGES YEAR FROM INTEGER TO STRING
  year = year.toString();

  //CHECKS IF CONFIG DOES NOT EXIST
  if (typeof config === 'undefined'){
    today = mm + '/' + dd + '/' + year;
  }else{

    //CHECKS FOR SEPERATOR
    if (config && config.format && typeof config.format.separator === 'undefined'){
      sep = '/';
    }else{
      sep = config.format.separator;
    }

    //CHECKS FOR FORMAT
    if (config.format){

      //CHECKS FOR YEAR FORMATING
      if (config && config.format && typeof config.format.year === 'undefined' || config.format.year == 'yyyy'){
        year = year;
      }else if (config.format.year == 'y') {
        year = year.substring(3);
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
  }
  return today;
}

//TOBOOLEAN FUNCTION
exports.toBoolean = function(boolIn, toInteger){
    if (boolIn === 'true' || boolIn === 'false'){
        if (boolIn === 'true'){
            return true;
        }else{
            return false;
        }
    }else if (toInteger){
        if (boolIn.includes('.' || boolIn.includes(','))){
            let bool = boolIn.replace(',', '.');
            let boolFloat = parseFloat(bool);
            let intString = boolFloat.toString();
            if (intString.length === boolIn.length){
                return boolFloat;
            }else{
                return boolIn;
            }
        }else{
            return boolIn;
        }
    }else{
        return boolIn;
    }
}
