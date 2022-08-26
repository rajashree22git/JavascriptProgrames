// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function FizzBuzz(n)
{

  for(let i=1;i<=n;i++)
  {
    if(i%5==0 && i%3==0)
    {
console.log("fizzBuzz");
    }
   else if(i%5==0)
    {
console.log("Bizz");
    }

   else if(i%3==0 )
    {
console.log("Fiz");
    }
    else{
      console.log(i);
    }

  }

}


FizzBuzz(15);