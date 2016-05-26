'use strict';

function thousands_separators(num) {
    var number = num.toString();
	
	var re = /(\d{1,3})(?=(\d{3})+$)/g;
	if(number.indexOf(".")!=-1)
	{
		var sort=number.split(".");
		var front=sort[0];
		var back=sort[1];
		return front.replace(re,"$1,")+"."+back;
	}
	else{
		return number.replace(re,"$1,");
	}
}

module.exports = thousands_separators;
