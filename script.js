const container = document.querySelector("#container");
const birthday = undefined;
for(let i = 0; i < 300; i++){
    const anchor = document.createElement("a");
    if(i !=82){
        anchor.href = "https://media.tenor.com/OA8KFcZxPjsAAAAi/sad-emoji.gif";
    }
    else{
        anchor.href = "https://docs.google.com/document/d/12-kn172Vv2M3HGMBvAgC_gStwkXX9d4Dvp75fA7v05w/edit?usp=sharing";
    }
    const temp = document.createElement("button");
    temp.style.color = "black"; temp.style.fontWeight = 1000;
    temp.style.backgroundColor = "cyan"; 
    temp.innerText = i; 
    temp.style.minWidth = "100px"; temp.style.minHeight = "100px";
    temp.style.borderRadius = "6px";
    temp.style.textWrap = "flexwrap"; anchor.appendChild(temp);
    container.appendChild(anchor);
}