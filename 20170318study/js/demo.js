//智能提示引用；
/// <reference path="jquery-3.1.1.slim.min.js" />
var i = 0;//定义全局变量i
var timer;//记录定时器
//页面加载完毕时调用此函数
$(function () {
    //鼠标放上图片后显示左右按钮，离开后隐藏左右按钮；可以先在css中设置默认为隐藏；
    //$("#igs").hover(function () { $(".btn").show(); }, function () { $(".btn").hide(); });
    //浏览器进入后默认显示第一章照片；
    $(".ig").eq(0).show().siblings().hide();
    ShowTime();//调用轮播；
    //调用鼠标放上去及移开显示函数及内容
    mhover();
    //点击左测按钮；
    mybtn1();
    mybtn2();
});
//隐藏显示图片及下标的隐藏显示；
function Show() {
    $(".ig").eq(i).show().siblings().hide();
    $(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
//定义轮播功能；
function ShowTime() {
    timer = setInterval(function () {
        i++;
        if (i == 6) {
            i = 0;
        }
        Show();
    }, 2000);

 //鼠标放上后后执行hover的第一个函数：，移开后执行第二个函数；
} function mhover() {
    $(".tab").hover(function () {
        i = $(this).index();
        //显示当前角标的图片
        Show();
        clearInterval(timer);//清除轮播
    }, function () {
        //鼠标移开执行显示函数
        ShowTime();
    });
}

//点击左侧btn1
function mybtn1() {
    $(".btn1").click(function () {
        clearInterval(timer);//清除轮播
        if (i == 0) {
            i = 6;
        }
        i--;
        Show();//显示图片和角标
        ShowTime();//继续轮播功能
    });
}

//点击左侧btn2
function mybtn2() {
    $(".btn2").click(function () {
        clearInterval(timer);//清除轮播
        if (i == 5) {
            i = -1
        }
        i++;
        Show();
        ShowTime();
    });
}