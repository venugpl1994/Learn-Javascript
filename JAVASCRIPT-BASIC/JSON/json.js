function abc()
{
var myarray=[{"name":"ABC","mobile":"999999999999"},{"name":"xyz","mobile":"888888888888"}];
var data="<table align='center' border='1' width='300'>";
for(var i=0; i<myarray.length; i++)
{
	data=data+"<tr>";
	data+="<td>"+myarray[i].name+"</td>";
	data+="<td>"+myarray[i].mobile+"</td>";
	data=data+"</tr>";
	//alert(myarray[i].name);
	//alert(myarray[i].mobile);
}
data=data+"</table>";
alert(data);
document.getElementById("msg").innerHTML=data;
}//function end

function xyz()
{
var myarray='[{"name":"ABC","mobile":"999999999999"},{"name":"xyz","mobile":"888888888888"}]';
alert(myarray.length);
myarray2=JSON.parse(myarray);//json to array
alert(myarray2.length);
var data="<table align='center' border='1' width='300'>";
for(var i=0; i<myarray2.length; i++)
{
	data=data+"<tr>";
	data+="<td>"+myarray2[i].name+"</td>";
	data+="<td>"+myarray2[i].mobile+"</td>";
	data=data+"</tr>";
	//alert(myarray[i].name);
	//alert(myarray[i].mobile);
}
data=data+"</table>";
document.getElementById("msg").innerHTML=data;
}//function end

function jsonimage()
{
	var myimage='[{"name":"1.jpg"},{"name":"2.jpg","url":"http://abc.ccm/image/"},{"name":"3.jpg"},{"name":"4.jpg"}]';
	var imgarray=JSON.parse(myimage);
	var data="";
	for(var i=0; i<imgarray.length; i++)
	{
		data=data+"<img src='"+imgarray[i].name+"' height='150'>";
	}
	document.getElementById("msg").innerHTML=data;
}