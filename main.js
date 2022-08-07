let demo = document.querySelector('#demo')
let style = document.querySelector('#style')
let n = 0
let str = `/*大家好
*我叫翎昀
*我又开始学前端了
*这是我自己做的一个小demo

*首先，画一个圆*/
.round{
    width:200px;
    height:200px;
    border-radius:50%;
    border:1px solid #333;
}

/*给他们染上颜色*/
.round{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}

/*给他们分别翅膀*/
.round::before{
    content:'';
    display:block;
    position:relative;
    left:50px;
    top:0;
    background-color:black;
    width:100px;
    height:100px;
    border-radius:50%;
}

.round::after{
    content:'';
    display:block;
    position:relative;
    left:50px;
    bottom:0;
    background-color:white;
    width:100px;
    height:100px;
    border-radius:50%;
}

/*这是再分别给他们一只眼睛即可*/

.round::before{
    background: radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(0,0,0,1) 30%);
    // background: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}

.round::after{
    
    background: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 30%);
    
}
`


let show = setInterval(() => {
    if (n < str.length) {
        n += 1
        demo.innerText = str.slice(0, n)

    } else { return }
    let str2 = str.slice(0, n)
    style.innerHTML = str2
        // console.log(str2);
    console.log(demo.style.height)
    window.scrollTo(0, 99999)
}, 1);