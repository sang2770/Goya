// left
var btn_left=document.querySelector(".banner_arrow_left");
var btn_right=document.querySelector(".banner_arrow_right");

var listimg=document.querySelectorAll(".banner");
console.log(btn_left);
var Size=listimg.length-1;
console.log(Size);
var count=0;
var a="banner_active"
var time=setInterval(()=>{
    btn_right.click();
}, 8000)
btn_right.onclick=()=>{  
    if(count !=Size)
    {
        
        listimg[count].classList.add( "toLeft");
        count++;
        console.log(`${a}`);
        listimg[count].classList.add(`${a}`, "rightToleft");
        listimg[count].addEventListener("animationend", ()=>{
            listimg[count].classList.remove("rightToleft");
            listimg[count-1].classList.remove(`${a}`, "toLeft");
            })
    }
    else
    {
        listimg[Size].classList.add( "toLeft");
        count=0;
        console.log(`${a}`);
        listimg[0].classList.add(`${a}`, "rightToleft");
        listimg[0].addEventListener("animationend", ()=>{
            listimg[0].classList.remove("rightToleft");
            listimg[Size].classList.remove(`${a}`, "toLeft");
            })
        
    }
}
btn_left.onclick=()=>{
    if(count !=0)
    {
        listimg[count].classList.add( "toRight");
        count--;
        console.log(`${a}`);
        listimg[count].classList.add(`${a}`, "leftToright");
        listimg[count].addEventListener("animationend", ()=>{
            listimg[count].classList.remove("leftToright");
            listimg[count+1].classList.remove(`${a}`, "toRight");
            })
    }
    else
    {
        listimg[count].classList.add( "toRight");
        count=Size;
        console.log(`${a}`);
        listimg[count].classList.add(`${a}`, "leftToright");
        listimg[count].addEventListener("animationend", ()=>{
            listimg[count].classList.remove("leftToright");
            listimg[0].classList.remove(`${a}`, "toRight");
            })
        
    }
}
var test=new Promise((resolve)=>{
    resolve("ok");
})
test
    .then((item)=>{
        console.log(2);
    })
    .then((item)=>{
        console.log(3);
    })