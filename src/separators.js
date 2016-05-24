'use strict';

function thousands_separators(num) {
  var number = num.string().split("");
  number =parseFloat((number+""));
  var result="";
  if(number.indexOf(".")==-1)
  {
	  var front=number.split("");
	  for(var i=0;i<front.length;i++)
  {
	  result+=front[i]+((i+1)%3==0&&(i+1)!=front.length?",":"");
  }
  return result.split("").join("");
  }
  else {
	  var front=number.split(".")[0].split("");
	  var back=number.split(".")[1];
	   for(var i=0;i<front.length;i++)
  {
	  result+=front[i]+((i+1)%3==0&&(i+1)!=front.length?",":"");
  }
	  return result.split("").join("")+"."+back;
  }
  
}

module.exports = thousands_separators;
