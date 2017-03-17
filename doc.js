SK = {};

SK.ready = function(cb,context)
    {
    	if(document.readyState === "complete") cb.call(context || window);
    	else SK.ready.stack.push({cb:cb,context:context||window});
    	
    	
    }
    SK.ready.stack = [];
    SK.ready.eventcb = function(){
        for(var n in SK.ready.stack) SK.ready.stack[n].cb.call(SK.ready.stack[n].context);
        document.removeEventListener("DOMContentLoaded",SK.ready.eventcb);
    };
    SK.ready.eventcb_legacy = function(){
        for(var n in SK.ready.stack) SK.ready.stack[n].cb.call(SK.ready.stack[n].context);
        document.detachEvent("onreadystatechange", SK.ready.eventcb_legacy);
    };
    
    if(document.addEventListener) document.addEventListener("DOMContentLoaded",SK.ready.eventcb); else
    if(document.attachEvent) document.attachEvent("onreadystatechange", SK.ready.eventcb_legacy);


SK.ready(function(){
	var direntries = document.querySelectorAll('.direntry > span');
	for(var n in direntries)
	{
		if(!isNaN(n))
		{
			direntries[n].addEventListener('click',function()
			{
				console.log(this.getAttribute('href'));
				var path = this.getAttribute('href');
				location.href="/jmod"+path;
				
				
			});
		}
	}
	
})


