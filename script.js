const container = document.querySelector("#container");
const birthday = undefined;
for(let i = 0; i < 300; i++){
    const anchor = document.createElement("a");
    anchor.className = "special";
    if(i !=82){
        anchor.href = "https://media.tenor.com/OA8KFcZxPjsAAAAi/sad-emoji.gif";
    }
    else{
        anchor.className = "specialBox";
        anchor.href = "https://docs.google.com/document/d/1-PfKjXNivt9IfgtF1qrTzlwlC2x_47l6mDv8yLNnc4s/edit?usp=sharing";
    }
    const temp = document.createElement("button");
    temp.style.color = "black"; temp.style.fontWeight = 1000;
    if(i==82){
    temp.className = "specialButton";}

    temp.innerText = i; 
    temp.style.textWrap = "flexwrap"; 
    anchor.appendChild(temp);
    container.appendChild(anchor);
}