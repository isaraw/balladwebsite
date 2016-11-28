// JavaScript Document


function showMenu(dnn) 
{
	document.getElementById(dnn).style.visibility="visible";
}

function hideMenu(dnn) 
{
	document.getElementById(dnn).style.visibility="hidden";
}

function slidetoggle1() 
{
	$(".panel1").slideToggle("slow");
}

function slidetoggle2() 
{
	$(".panel2").slideToggle("slow");
}

function slidetoggle3() 
{
	$(".panel3").slideToggle("slow");
}

function slidetoggle4() 
{
	$(".panel4").slideToggle("slow");
}

function slidetoggle5() 
{
	$(".panel5").slideToggle("slow");
}

$(document).ready(function() 
{
	/*
	*   Examples - images
	*/
			$("a#example1").fancybox({
				'titleShow'		: false
			});

			$("a#slide_images").fancybox({
				'titleShow'		: false,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic'
			});
			
			$("a.group").fancybox({
				'transitionIn'	:	'elastic',
				'transitionOut'	:	'elastic',
				'speedIn'		:	600, 
				'speedOut'		:	200, 
				'overlayShow'	:	false,
				'titlePosition' :   'over',
				'titleFormat'	: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
}

			});

		
});


function validate(fname, surname, feedback, source)
{
	if (fname.value=="")
	{
		alert ("You must enter a First Name");
		return false;
	}
	if (surname.value=="")
	{
		alert ("You must enter your surname");
		return false;
	}
	if (feedback.value=="")
	{
		alert ("You must enter your feedback");
		return false;
	}
    if (source.value=='0')
	{
		alert("You must select at least one source option");
		return false;
	}
  
}


function newWindow()
{
	window.open("http://www.alessandronegrini.com/", "aleWin", "width=800,height=600")
}	
 

var maps=new Array();
      maps[0]='images/familytree-f.png';
      maps[1]='images/familytree-p.png';
      

onload=function() 
{
	var elem=document.getElementsByTagName('area');
	for(c=0;c<elem.length;c++) 
		{
			elem[c].onmouseover=function() 
			{   
   				document.getElementById('pic').src=maps[this.id.split('-')[1]];
   			}    
  		}
}
 	
adImages = new Array ("images/cycle/img1.jpg", "images/cycle/img2.jpg", "images/cycle/img3.jpg", "images/cycle/img4.jpg", "images/cycle/img5.jpg")
 
thisAd = 0
 
imgCt = adImages.length
 
function rotate()
{
 	if (document.images)
		{
			thisAd++
			if (thisAd == imgCt)
			{
				thisAd = 0
			}
 
			document.adBanner.src = adImages[thisAd]
			setTimeout("rotate()", 3 * 1000)
 
		}
}


//cookies functions - source http://www.trans4mind.com/personal_development/JavaScript/cookie1.htm

var expdate = new Date ();
expdate.setTime (expdate.getTime() + (24 * 60 * 60 * 1000*365)); // 1 yr from now 

/*  set cookie   */

function setCookie(name, value, expires, path, domain, secure) 
{  
	var thisCookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
  	document.cookie = thisCookie;
}

/* show cookie  */

function showCookie()
{
	alert(unescape(document.cookie));
}

/* get cookie value  */

function getCookieVal (offset) 
{
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1)
  endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));  
/*  end get cookie value  */
}

/*  get cookie (name) */

function GetCookie (name) 
{
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) 
  	{
    	var j = i + alen;
    	if (document.cookie.substring(i, j) == arg)
      	return getCookieVal (j);
    	i = document.cookie.indexOf(" ", i) + 1;
    	if (i == 0) break; 
  }
  return null;
}
/* end get cookie (name)  */

/*   delete cookie  */
function DeleteCookie (name,path,domain) 
{
  if (GetCookie(name)) 
  	{
    	document.cookie = name + "=" +
     	((path) ? "; path=" + path : "") +
      	((domain) ? "; domain=" + domain : "") +
      	"; expires=Thu, 01-Jan-70 00:00:01 GMT";
  	}
}
/*  end of delete cookie  */

function NewNamer()
{
	var now= new Date();
	now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
	var username = GetCookie("username");
	if ((!username)||(username=='null'))
{ 
	username = prompt("Please enter your name:", "");
}
setCookie("username", username, now);
if (username) 
{ 
	document.write("Please leave a comment below, "+username+". "); 
	setCookie("username", username, now);
} 
else
document.write("Welcome to the page, (No name given) "+ 
"<a href=\"cookie1.htm\" onClick=\"ChangeName();history.go(-1)\">Click here </a>to add your name. "); 

}

/*function ChangeName(){
var username = GetCookie("username");
username = prompt("Please enter your name:", "");
setCookie("username", username);
var visits='';
setCookie("counter", visits);
NewNamer()} */


/* count visits  */

function VisitCounter()
{
	var visits = GetCookie("counter");
	if (!visits) { visits = 1; 
	document.write("We hope you enjoyed our site and you will come back!");
} 
else 
{ 
	visits = parseInt(visits) + 1; document.write("You have visited this page " + visits + " times! Is there anything else you would like to tell us? ");
}
	setCookie("counter", visits,expdate);
}


function setcookie()
{
	document.cookie = 'Cookie Name='+document.form1.cookieName.value;
}

function showCookie()
{
	alert(document.cookie);
}


