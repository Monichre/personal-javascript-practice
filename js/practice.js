function LetterChanges(str) {
	var str = str.split('');
    var newStr = str.map(function(letter){
    	return letter.charCodeAt(0);
    }); //MAP function to change letter to ASCII value ends
    console.log(newStr);//log to see result

    var newStr = newStr.map(function(x){
    	return x + 1 ;

    });
    console.log(newStr);
    newStr = newStr.map(function(x){
    return String.fromCharCode(x);

    });//end of third map method -- returns element to it ASCII alphabet character
    console.log(newStr.join(''));
};

LetterChanges("poop");
