var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn'); 

    for(item of btn)
    {
       item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        screen.value+=btntext;
        // if(btntext=='x')
        // {
        //     btntext='*';
        // }
        // if(btntext=='+')
        // {
        //     btntext='/';
        // }
        // screen.value+=btntext;
       });  
    }
    function sin()
    {
        screen.value=Math.sin(screen.value);
    }
    function cos()
    {
        screen.value=Math.cos(screen.value);
    }
    function tan()
    {
        screen.value=Math.tan(screen.value);
    }
    function pow()
    {
        screen.value=Math.pow(screen.value);
    }
    function sqrt2()
    {
        screen.value=Math.pow(screen.value, 1/2);
    }
    function sqrt3()
    {
        screen.value=Math.pow(screen.value, 1/3);
    }
    function square()
    {
        screen.value=Math.pow(screen.value,2);
    }
    function log()
    {
        screen.value=Math.log(screen.value);
    }
    function e()
    {
        screen.value=2.718281828459045;
    }
    function percentage(val){
        var x, result;
        x = eval(screen.value)
        result = x/100
       screen.value = result
    }
    function sinr(){
        var radian,value;
        radian=Math.asin(screen.value)
        value=radian* 180/Math.PI;
        screen.value=value.toFixed(2);
    }
    function cosr(){
        var radian,value;
        radian=Math.acos(screen.value)
        value=radian* 180/Math.PI;
        screen.value=value.toFixed(2);
    }
    function tanr(){
        var radian,value;
        radian=Math.atan(screen.value)
        value=radian* 180/Math.PI;
        screen.value=value.toFixed(2);
    }
    function facto(){
        var num, i, fac;
        num=  screen.value;
        if(num==0)
        screen.value=1;
        else{
            fac=i;
        for(i=1;i<=num;i++)
            fac*=i;
            screen.value=fac;
        }
    }

    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
    { 
        f=f*i
    }
        i=i-1
        screen.value=f;
    }

    function backspc()
    {
 screen.value=screen.value.substr(0,screen.value.length-1);
    }
