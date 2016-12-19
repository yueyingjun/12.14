	function resize(originSize,type){
            var type=type||"x";
            if(type=="x"){
                var widths=document.documentElement.clientWidth;
                document.getElementsByTagName("html")[0].style.fontSize=widths/originSize*100+"px";
            }else if(type=="y"){
                var heights=document.documentElement.clientHeight;
                document.getElementsByTagName("html")[0].style.fontSize=heights/originSize*100+"px";
            }
        }
        window.onload=function(){
            resize(750,"x");
        }

