//var dooropen = Math.random() >= 0.5;

//Boolean (lightstatus); 
var state=0; //initially off
var lightstatus=0;
function getRandomInt(min, max) //to get random temp between 18 and 30 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var dooropen;
var tem = new Array(20);
var sensorvalues={maxnum:getMax(), dooropen:Math.random() >= 0.5};

function getMax()
{var maxnum=15;
console.log("Array is as follows: ");
for ( i=0;i<20;i++)
{

    tem[i]=getRandomInt(15,30);
      console.log(tem[i]);  
    if (tem[i]>maxnum)
          {
              maxnum=tem[i];
          }
}
return maxnum; 
}

{}
function door()
{ 

    if (sensorvalues.dooropen)
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
      if (sensorvalues.dooropen)
   {  
       lightstatus=1; //based on if the door is open or not
    console.log(" Welcome home...The Lights are now : On ---> lightstate = "+lightstatus  );
   }
   else
    {
      lightstatus=0;
    console.log(" The Lights are now : Off ---> lightstate = "+lightstatus );
    
   }
 }

 

     
function ac()
  { 
   // console.log(" The room temperature is : "+tem+" C");
   
    if (sensorvalues.maxnum<25)
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
 console.log("The sensor values are :");
 console.log("The temperature is : "+sensorvalues.maxnum+" C");
 console.log("Lights-On : "+sensorvalues.dooropen); //since lightstate depends on dooropen
   
