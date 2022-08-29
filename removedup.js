var a=[1,2,3,3,1,6]

function removedup(srt)
{

 // debugger;
  console.log("hi")

  var char={};
  var result=[];

  for(let item of srt)
  {
    if(!char[item])
    {
      char[item]=1;
      result.push(item)
    }
  }

  return result;
}

var hh=removedup(a)
console.log(hh,'dd')
//console.log(result,'result');