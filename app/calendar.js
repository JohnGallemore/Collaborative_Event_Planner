const DEBUG_GLOBAL=0 // every function will print something with this on.


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

document.addEventListener('DOMContentLoaded',function(){

    const COLUMN_DAYMONTH_START = 2;
	const MAXIMUM_DAYMONTH = 32;
	testSetCalendarDates(COLUMN_DAYMONTH_START, 
						 MAXIMUM_DAYMONTH,
						 DEBUG_GLOBAL);
//	document.getElementsByName('NOTANAME')[0].addEventListener('click',function(event){event.preventDefault();});

});