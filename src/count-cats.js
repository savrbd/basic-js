const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {

  result=0;
  for (let i=0; i<backyard.length; i++){
    for (let j=0; j<backyard[i].length; j++){
      if (backyard[i][j]==="^^") {
        result++;}
      }
    }
    return result;
  }
