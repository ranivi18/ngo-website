const form=document.getElementById("volunteer-form");
const successMsg=document.getElementById("successmsg");
form.addEventListener("submit",function(e){
    e.preventDefault();
    successMsg.textContent="Thanks for signup! we'll contact you soon.";
    form.reset();
});