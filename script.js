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
    temp.style.backgroundColor = "cyan"; 
    temp.innerText = i; 
    temp.style.minWidth = "100px"; temp.style.minHeight = "100px";
    temp.style.borderRadius = "6px";
    temp.style.textWrap = "flexwrap"; 
    temp.addEventListener("mouseenter", ()=>{
        temp.style.borderWidth = "10px";
        temp.style.maxWidth = "120px"; temp.style.maxHeight = "120px";
       temp.style.minWidth = "120px"; temp.style.minHeight = "120px";
    });
    temp.addEventListener("mouseleave",()=>{
        temp.style.borderWidth = "6px";
        temp.style.minWidth = "100px"; temp.style.minHeight = "100px";
        temp.style.maxWidth = "100px"; temp.style.maxHeight = "100px";
    }
    );
    anchor.appendChild(temp);
    container.appendChild(anchor);
}