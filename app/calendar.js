const DEBUG_GLOBAL=0 // every function will print something with this on.


if(typeof http!=='object'){console.log('http Inits again?');var http = new XMLHttpRequest();http.withCredentials = true;}
if(typeof U_R_L==='undefined'){var U_R_L = "https://dev-po06yrn46fpx94u.api.raw-labs.com/your/endpoint/path";}

function sendRequest(params,requestType,callback,url=U_R_L,contentType='application/x-www-form-urlencoded') {
	console.log('sendRequest('+params+','+requestType+',_cb'+','+url+')'); 
	if( requestType == 1 ) 
	{ http.open("GET", url+"?"+params, true); } else { http.open("POST",url, true);}
    http.setRequestHeader("Content-Type",contentType);/*'application/json');*/
	http.onreadystatechange = function() {  
		if( http.readyState == 4 && http.status == 200 ) 
		{if(ajType.length){ajOrder.pop();ajType.pop();aj_cb.pop();aj_lnk.pop();}
		 callback( http.responseText );
		 if(ajType.length){sendRequest(ajOrder[ajOrder.length-1],ajType[ajaxType.length-1],ajax_cb[ajType.length-1],aj_lnk[ajType.length-1]);}
		 if(params.indexOf('autoPage=1')!==-1){autoRunOnGenericReturn();} }
		
		return ;}; 
	if( requestType == 1 ) { http.send(null); } else { http.send(params); } 
	
}


/* testSetCalendarDates: 3 arguments
	Sets calendar numbering starting at column n to maximum month day MAXIMUM
	
	Args:
		n: (int) zero-indexed starting column for day Number
		MAXIMUM: (int) last day in month
	Return:
		None
 */
function testSetCalendarDates( n, MAXNUM, DEBUG=0) {
 
 const box=document.getElementsByTagName('td');
 for( let i =n; i-n < MAXNUM; i++) {
   box[i].setAttribute('data-day', i-n+1);
   (DEBUG ? console.log( "["+i+"]: "+ box[i].getAttribute('data-day' )):'nul');
 }
 return ;
}

function autoPageAjax_cb(rsp){
    console.log('RETURNED CB');
	console.log(rsp);
}

document.addEventListener('DOMContentLoaded',function(){

var params=(0||'defaultSubmit')+'='+'submit';console.log(params);
var page=window.location.href;
sendRequest(params,
			('get'.toLowerCase()=='get'?1:2), 
			autoPageAjax_cb,
			(U_R_L)
			);

    const COLUMN_DAYMONTH_START = 2;
	const MAXIMUM_DAYMONTH = 32;
	testSetCalendarDates(COLUMN_DAYMONTH_START, 
						 MAXIMUM_DAYMONTH,
						 DEBUG_GLOBAL);
//	document.getElementsByName('NOTANAME')[0].addEventListener('click',function(event){event.preventDefault();});

});