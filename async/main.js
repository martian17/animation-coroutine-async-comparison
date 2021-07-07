let Animation = function(){
    let resolver = ()=>{};
    let start = 0;
    let animate = function(t){
        if(start = 0)start = t;
        let dt = start - 10;
        start = t;
        resolver(t);
        requestAnimationFrame(animate);
    };
    this.waitNextFrame = function(){
        return new Promise((res,rej)=>{
            resolver = res;
        });
    };
    requestAnimationFrame(animate);
};


let render = async function(animation){
    //these variables will only be accecible inside this scope
    let width = 500;
    let height = 500;
    let canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    
    while(true){
        let t = await animation.waitNextFrame();
        ctx.clearRect(0,0,width,height);
        ctx.beginPath();
        let x = Math.cos(t/300)*100+250;
        let y = Math.sin(t/300)*100+250;
        ctx.arc(x,y,100,0,6.28);
        ctx.closePath();
        ctx.fill();
    }
};



let main = function(){
    let animation = new Animation();
    render(animation);
};

main();