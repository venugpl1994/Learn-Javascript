var c=["Mango","Apple",100,200,100.50,40,50];

function one()
{
	//var a=Array("Mango","Apple",100,200,100.50);
	//alert(a.length);
	
	var data="<ol>";
	
	
	
	for(var i=0;i<c.length;i++)
	{
		data+="<li>" + c[i] + "</li>";
	}
	data=data + "</ol>";
	document.getElementById("msg").innerHTML=data;
}

function two()
{
	var newitem=document.getElementById("item").value;
	c.unshift(newitem); // add new element at begning of array
	one();
}

function three()
{
	var newitem=document.getElementById("item").value;
	c.push(newitem); // add new element at end of array
	one();
}

function four()
{
	var option=prompt("which one you wnt to delete ! \n Enter 1 for 1ST, and 2 for last");
	if(option=="1")
	{
		c.shift();
	}else if(option=="2")
	{
		c.pop();
	}else{
		alert("This is not a valid Input !....");
	}
	one();
}

function five()
{
	var newitem=document.getElementById("item").value;
	if(isNaN(newitem))
	{
		var sts=c.indexOf(newitem);
	}else{
			if(parseFloat(newitem))
			{
				newitem=parseFloat(newitem);
				var sts=c.indexOf(newitem);
				
			}else{
				newitem=parseInt(newitem);
				var sts=c.indexOf(newitem);
			}
	}
	
	
	if(sts ==-1)
	{
		document.getElementById("msg2").innerHTML="Item Not Found";
	}else{
		document.getElementById("msg2").innerHTML=newitem +" :Item Found";
	}
}

function six()
{
	//c.sort();
	c.sort(function(a,b){return a-b});
	one();
}

function seven()
{
	//c.sort();
	c.sort(function(a,b){return b-a});
	one();
}