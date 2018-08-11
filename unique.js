var inputSymb = prompt("Input Something");
//document.write(inputSymb[0])
var len = inputSymb.length;
//function uniqueTest ()

//{
  var count = 0;
  var tmp;
  for(var a = 0; a < len; ++a)
  {
   tmp = inputSymb[a];
    for(var b = (a+1); b < len; ++b)
     {
      if(tmp == inputSymb[b])
       {
        var al = alert("not unique")
        ++count
        break
       }
      }
      if(al == "not unique")
       break;
   }
   if(count == 0)
   {
    alert("unique")
   }
//}
