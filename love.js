function checkenter(name)/*check the name right or not*/
	{
		name.style.backgroundColor='';
		name.title='';
		var n = name.value;
	if (n<'a'||n>'z') 
		{
		name.style.backgroundColor='#fcc';
		name.title='enter letter';
		}
		else if(n = ''||n = ' ')
		{
		name.style.backgroundColor='#fcc';
		name.title='enter letter';
		}
		else if(n<'A'||n>'Z')
		{
		name.style.backgroundColor='#fcc';
		name.title='enter letter';
		}else
		{
		return ture;
		}
		alert(ture);
	}



function change(str)/*change the letter to be big letter*/
	{
	str = str.toUpperCase();
	return str;
	}
   
function exchange(name)/*change name to number*/
    {
	
		var s=0;
		var x=0;
		for(var i=0;i<name.length;i++)
		{
		    x=Math.pow(name.charCodeAt(i),i+1);
			x=plus(x);
			s=s+x;
		}
		s=plus(s);
		return s;
	}
function plus(number)/*plus the number's every site tobe one site number*/
    {
        var site=number.toString();
		var onesitenumber=0;
        for(var i=0;i<site.length;i++)
        {
    	    onesitenumber=onesitenumber+parseInt(site[i]);
        }
        while(onesitenumber>9)
        {
    	    onesitenumber=plus(onesitenumber);
        }
        return onesitenumber;
	}
function checkName()/*name'subtrction*/
	{	
		var N;
		var name1 = document.getElementById("name1").value;
		var name2 = document.getElementById("name2").value;
		var n1 = change(name1);
		var n2 = change(name2);
		var a=exchange(n1);
		var b=exchange(n2);
		var result;
		if(a>b)
		{   
		    N=a-b;
		}
		else
		{
		    N=b-a;
		}
		if(N==0)
		{
		    result="Perfect";
        }
        else if(N<3&&N>0)
		{
		    result="High";
		}
		else if(N>=3&&N<=6)
		{
		    result="Medium";
		}
		else
		{
		    result="Low";
		}
		return result;
	}
function insRow()
	{ 
	  var x=document.getElementById("myTable").insertRow(1)
	  var y=x.insertCell(0)
	  var z=x.insertCell(1)
	  var v=x.insertCell(2)
	  var w=x.insertCell(3)
	  y.innerHTML=document.getElementById("name1").value;
	  z.innerHTML=document.getElementById("name2").value;
	  v.innerHTML=checkName();
	  w.innerHTML=Date();
	  if(myTable.rows.length>5)
		{
		document.getElementById('myTable').deleteRow(6);
		}
	}
