$(function (){
	var st=document.documentElement.scrollTop;
	if(st>40px){
		$("nav").css({position:fixed;left:0;top:0;})
	}
})
