function one(){
	
	var a=prompt("Enter any Number");
	if(a>=20)
	{
		
		alert("your Number"+ a+ "is a higher than 20");
	}
	else{
		
		alert("your Number: "+a+"is less than 20");
	}
}
//function 2 start
	function two()
	{
		
		var a=prompt("Enter 1st Number");
		var b=prompt("Enter 2st Number");
		var c=prompt("Enter 3st Number");
		a=parseInt(a);
		b=parseInt(b);
		c=parseInt(c);
		if((a>b)&&(a>c))
		{
			alert("the heigher number is:"+a);;
		}else if((b>a)&&(b>c))
		{
			alert("the higher number is:"+b);
		}else
		{
			alert("the higher number is:"+c);
			
		}
		var d=a+b+c;
		alert(d);
	}
	
function three()
{
	var input=prompt("Enter any thing string or number");
	if(!isNaN(input))
	{
		
		input=parseInt(input);
		if(input%2==0)
		{
			alert("This is Number and even:"+input);
		}else
		{
			alert("This is Number and Odd:"+input);
		}
	}else
	{
		alert("this is string value");
	}
}
function four()
{
	var input=prompt("Enter Number Between 1 to 4");
	switch(input)
	{
		case "1":
		alert("you have enter:"+input);
		break;
		
		case "2":
		case"3":
		alert("you have enter:"+input);
		break;
		
		case "4":
		alert("you have enter :"+input);
		break;
		
		default:
		alert("Not matching,out of Range.Try again:"+input);
		four();
	}
}
function five()
{
	/*
	for(var i=1; i<10; i++)
	{
		alert(i);
	}*/
	var total="";
	for(var i=10; i>=1; i--)
	{
		total=total+"<li>"+i+"</li>";
		//alert(total);
	}
	alert(total);
	document.getElementById("msg").innerHTML=total;
}
function six()
{
	var i=1;
	var alldata="<select><option>choose Item</option>";
	while(i<=20){
		
		alldata=alldata + "<option>" +i+ "</option>";
		i++;
	}
	
	alldata=alldata + "</select>";
	
	document.getElementById("msg").innerHTML=alldata;
}
function seven()
{
	var i=20;
	var alldata="<select> <option> choose Item </option>";
	do{
		
		alldata=alldata + "<option>"+i+"</option>";
		i++;
	}while(i<=18)
	
	alldata=alldata + "</select>";
	document.getElementById("msg").innerHTML=alldata;
}
function eight()
{
	var abc="Hello My Test";
	//alert(abc[abc.length-1]);
	for(var i=abc.length-1; i>=0; i--)
	{
		alert(abc[i]);
	}
}
