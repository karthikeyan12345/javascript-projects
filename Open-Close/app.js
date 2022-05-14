// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const open=document.querySelector(".modal-btn");
const close=document.querySelector(".close-btn");
const overlay = document.querySelector(".modal-overlay");

open.addEventListener("click",function()
{
    const val= overlay.classList;
    if(!val.contains("open-modal"))
    {
        overlay.classList.add("open-modal");
    }
    

}
);
close.addEventListener("click",function()
{
    const val= overlay.classList;
    if(val.contains("open-modal"))
    {
        overlay.classList.remove("open-modal");
    }
    

}
);
