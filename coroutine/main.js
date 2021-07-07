let render = function*(){
    //these variables will only be accecible inside this scope
    let width = 500;
    let height = 500;
    let canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    
    while(true){
        let t = yield;
        ctx.clearRect(0,0,width,height);
        ctx.beginPath();
        let x = Math.cos(t/300)*100+250;
        let y = Math.sin(t/300)*100+250;
        ctx.arc(x,y,100,0,6.28);
        ctx.closePath();
        ctx.fill();
    }
};


let start = 0;
let routine;
let animate = function(t){
    if(start = 0)start = t;
    let dt = start - 10;
    start = t;
    routine.next(t);
    requestAnimationFrame(animate);
};

let main = function(){
    routine = render();
    requestAnimationFrame(animate);
};

main();