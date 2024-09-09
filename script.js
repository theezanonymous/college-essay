const container = document.querySelector("#container");
const birthday = undefined;
for(let i = 0; i < 300; i++){
    const anchor = document.createElement("a");
    if(i !=82){
        anchor.href = "https://media.tenor.com/OA8KFcZxPjsAAAAi/sad-emoji.gif";
    }
    else{
        // anchor.href = "https://docs.google.com/document/d/12-kn172Vv2M3HGMBvAgC_gStwkXX9d4Dvp75fA7v05w/edit?usp=sharing";
        anchor.href = "https://docs.google.com/document/d/1-PfKjXNivt9IfgtF1qrTzlwlC2x_47l6mDv8yLNnc4s/edit?usp=sharing";
    }
    const temp = document.createElement("button");
    temp.style.color = "black"; temp.style.fontWeight = 1000;

    temp.innerText = i; 
    temp.style.textWrap = "flexwrap"; 
    anchor.appendChild(temp);
    container.appendChild(anchor);
}