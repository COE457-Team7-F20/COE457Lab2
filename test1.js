var dooropen = Math.random() >= 0.5;
var lightstatus=0; //initially off
var state=0; //initially off
function door()
{ 

    if (dooropen)
   {  
    console.log(" The door is now : OPEN " );
    console.log(" Someone has walked in... " );
   }
    else 
   { 
    console.log(" The door is now : CLOSED " );
   
   }
} 

 function lights()
 {
      if (dooropen)
   {  
       
    lightstatus=1;
    console.log(" The Lights are now : On ---> lightstatus = "+lightstatus  );
   }
   else
    {
      lightstatus=0;
    console.log(" The Lights are now : Off ---> lightstatus = "+lightstatus );
    
   }
 }
     
     
 

function getRandomInt(min, max) //to get random temp between 18 and 30 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const tem=getRandomInt(18,30);

function ac()
  { 
    console.log(" The room temperature is : "+tem+" C");
   
    if (tem<25)
    {
        state=0;
        console.log(" The AC is : OFF ---> "+"AC-State = "+state ); //state = 0 for off
    }
    else
    {
        state=1;
        console.log(" The AC is : ON ---> "+"AC-State = "+state ); //state = 1 for on
    }
  }

 door();
 lights();
 ac();

