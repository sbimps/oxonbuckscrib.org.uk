//base.js
//javascript standard forms functions library

function repaint(fld){
	if(document.getElementById(fld.name).value.length){
		document.getElementById(fld.name).className="round-input";
		document.getElementById("label_"+fld.name).className="";
	}
}
/*
function noApostrophe( e )
{
e = window.event ;
if( e.keyCode == 39 )
{
e.returnValue = false
}
return true ;
}
*/

function clear(frm){
	for (i=0;i<frm.length;i++){
		frm.elements[i].value="";
	}
}

function strip(fld){
	var a = document.getElementById(fld.name).value;

    a = a.replace(/\</g, "");
    a = a.replace(/\>/g, "");
    a = a.replace(/\"/g, "");
    a = a.replace(/\%/g, "");
    a = a.replace(/\;/g, "");
    a = a.replace(/\(/g, "");
    a = a.replace(/\)/g, "");
    a = a.replace(/\&/g, "");
    a = a.replace(/\+/g, "");
    a = a.replace(/\=/g, "");
    //a = a.replace(/\'/g, "\\'");

    document.getElementById(fld.name).value = a;
}

function strip_min(fld){
	var a = document.getElementById(fld.name).value;

	a = a.replace(/\</g, "");
    a = a.replace(/\>/g, "");
    a = a.replace(/\"/g, "");
    a = a.replace(/\%/g, "");
    a = a.replace(/\;/g, "");
    a = a.replace(/\=/g, "");

    document.getElementById(fld.name).value = a;
}

function toUpp(fld){
	document.getElementById(fld.name).value = document.getElementById(fld.name).value.toUpperCase();
}

function toLow(fld){
	document.getElementById(fld.name).value = document.getElementById(fld.name).value.toLowerCase();
}

function toCap(fld){
	var pattern = /([A-Za-z0-9\-])([\-\'A-Za-z0-9]*)/; // a letter, and then one, none or more letters including apostrophe(')

    if(pattern.test(document.getElementById(fld.name).value)){
		var a = document.getElementById(fld.name).value.split(/\s+/g); // split the sentence into an array of words

		for (i=0;i<a.length;i++){
			var parts = a[i].match(pattern); // just a temp variable to store the fragments in.
	        var firstLetter = parts[1].toUpperCase();
		    var restOfWord = parts[2].toLowerCase();

			a[i] = firstLetter + restOfWord; // re-assign it back to the array and move on
	    }

		document.getElementById(fld.name).value = a.join(' '); // join it back together
    }else
		document.getElementById(fld.name).value = '';
}
