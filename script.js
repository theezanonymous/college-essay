function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function toggleImg(){
    let e = document.querySelector("img")
    e.className = e.className =="show"? "hide": "show";
}
// "https://docs.google.com/document/d/1-PfKjXNivt9IfgtF1qrTzlwlC2x_47l6mDv8yLNnc4s/edit?usp=sharing";
let btn = document.querySelector(".submit")
btn.addEventListener("click", async ()=>{
    btn.id = ""; btn.innerText = "Enter!"
    let bday = document.querySelector("#birthday").value;
    btn.id = "thinking"; btn.innerText = "...";
    await delay(5000);
    if(bday=="2007-08-02"){
        btn.id = "right"
        btn.innerText = "RIGHT!!"
        await delay(2000);
        window.location.href = "https://docs.google.com/document/d/1-PfKjXNivt9IfgtF1qrTzlwlC2x_47l6mDv8yLNnc4s/edit?usp=sharing";
    }
    else{
        btn.id = "wrong"
        btn.innerText = "WRONG!!"
        toggleImg();
        await delay(4000);
        toggleImg();
    }

    
})