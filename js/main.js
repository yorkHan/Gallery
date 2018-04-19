var btns=$(oBtn).children()
for(var i=0;i<btns.length;i++){
    $(btns[i]).on("click",function(x){
      var btn=$(x.currentTarget)
      var index=btn.index()
        $("#images").css({
            transform: "translateX("+(-712*index)+"px)"
        })
        n=index
    activeButton(btns.eq(n))
    })
}
function activeButton($button){
    $button.addClass("aqua").siblings(".aqua").removeClass("aqua")
}
var times=$("#images").children().length
var n=0
var timer=setTimer.call()
function setTimer(){
    return setInterval(function () {
        n+=1
        activeButton(btns.eq(n%times).trigger("click"))
    },2000)
}
$("#window").on("mouseenter",function () {
    window.clearInterval(timer)
})
$("#window").on("mouseleave",function () {
    timer=setTimer.call()
})
