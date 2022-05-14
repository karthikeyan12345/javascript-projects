let value= document.getElementById("value");
let count =0;
//const increase= document.querySelector(".increase");
//const decrease= document.querySelector(".decrease");
//const reset= document.querySelector(".reset");
//console.log(reset);


//select all btns together using querySelectorAll and use forEach to access them.
const btns=document.querySelectorAll(".btn")
btns.forEach(function(btn)
{
    btn.addEventListener("click",function(e)
    {   //use a new variable to store the class of each clicks
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease"))
        {
            count--;
        }
        else if(styles.contains("increase"))
        {
            
            count++;
        }
        else
        {
            count=0;
        }
        if(count<0 && Math.abs(count)%2==0)
        {
            value.style.color="red";
        }
        if(count<0 && Math.abs(count)%2==1)
        {
            value.style.color="orange";
        }
        if(count>0 && count%2==0)
        {
            value.style.color="green";
        }
        if(count>0 && count%2==1)
        {
            value.style.color="blue";
        }
        if(count==0){
            value.style.color="black";
        }
        value.textContent=count;


        
    })

});
