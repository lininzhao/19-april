//获取元素
var div=document.getElementById('box');
var img=document.querySelector('#box img');
var lis=document.querySelectorAll('li');
var span=document.querySelectorAll('span');
//设置定时器
var timer=setInterval(autoChange,800);
//设置下标
var index=0;
//设置函数实现更改图片
function change(){
    //更改图片
    img.src='images/'+index+'.jpg';
    for(let i=0;i<lis.length;i++){
        lis[i].style.backgroundColor='indianred';
    }
    //更改背景下标
    lis[index].style.backgroundColor='pink';
}
//定义函数自动更换
function autoChange(){
    index++;
    if(index==8){
        index=0;
    }
    change();
}
//鼠标移入时间
div.addEventListener('mouseover',function(){
    clearInterval(timer);
    span[0].style.display='block';
    span[1].style.display='block';
},false);

//鼠标移出
div.addEventListener('mouseout',function(){
    timer=setInterval(autoChange,800);
    span[0].style.display='none';
    span[1].style.display='none';
},false);

//设置左边按钮
span[0].addEventListener('click',function(){
    index--;
    if(index<0){
        index=7;
    }
    change();
},false);

//设置右边按钮
span[1].addEventListener('click',function(){
    index++;
    if(index>7){
        index=0;
    }
    change();
},false);
//设置点击下标按钮跳转页面
for(let i=0;i<lis.length;i++){
    lis[i].id=i;
    lis[i].onmouseover=function(){
        index=this.id;
        change();
    }
}