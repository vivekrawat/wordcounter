

$(function(){

	$('#submitinfo').click(function(){
		var ch = $('#paragraph').val();
		var total=$('#total').val();
		var count=0;
		for(var i=0;i<ch.length;i++)
		{	
			var letterNumber = /^[0-9a-zA-Z]+$/;
			//if((inputtxt.value.match(letterNumber)) 
			var cut=0;
			while(i<ch.length)
			{
				if(ch[i].match(letterNumber))
				{
				i++;
				cut=1;
				}
				else
				break;
			}
			if(cut==1)count++;
		}
		$("#wordcount").text(count);
		$("#required").text(total-count);
	})
})