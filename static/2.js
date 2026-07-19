
const green=document.getElementById("green")
const blue=document.getElementById("blue")
const orange=document.getElementById("orange")
const pink=document.getElementById("pink")
let data=JSON.parse(localStorage.getItem("data"))
let coins=localStorage.getItem("coin")
if (data==undefined){
    data={
        color:"green",
        blue:false,
        orange:false,
        pink:false
    }
}
localStorage.setItem("data",JSON.stringify(data))
function load(){
    if (data.blue){
        blue.classList.remove("bb");
        blue.classList.add("b");
        blue.innerHTML="use"
    }
    if (data.pink){
        pink.classList.remove("bb");
        pink.classList.add("b");
        pink.innerHTML="use"
    }
    if (data.orange){
        orange.classList.remove("bb");
        orange.classList.add("b");
        orange.innerHTML="use"
    }

}
function save(){
    localStorage.setItem("data",JSON.stringify(data))
    localStorage.setItem("coin",coins)
}
load()
green.addEventListener("click",function(){
    //use
    data["color"]="green"
    alert("The skinn changed to green skin(grass)")
    save()
})
blue.addEventListener("click",function(){
    if (data["blue"]==1){
    //use
    data["color"]="blue"
    alert("The skinn changed to blue skin(sea)")
    save()
    }
    else{
        if (coins>299999){
            if (confirm("Are you sure to buy skin with 300k dino?")){
                data["blue"]=1
                coins=coins-300000
                alert("Blue skin bought. You can Choose it")
                load()
                save()
            }
            else{
                alert("Your dinos it not enough")
            }
        }
    }
})

pink.addEventListener("click",function(){
    if (data["pink"]==1){
    //use
    data["color"]="pink"
    alert("The skinn changed to pink skin(gum)")
    save()
    }
    else{
        if (coins>1999){
            if (confirm("Are you sure to buy skin with 2000 dino?")){
                data["pink"]=1
                coins=coins-2000
                alert("Pink skin bought. You can Choose it")
                load()
                save()
            }
            else{
                alert("Your dinos it not enough")
            }
        }
    }
})

pink.addEventListener("click",function(){
    if (data["orange"]==1){
    //use
    data["color"]="orange"
    alert("The skinn changed to pink skin(gum)")
    save()
    }
    else{
        if (coins>=1000000){
            if (confirm("Are you sure to buy skin with 1000000 dino?")){
                data["orange"]=1
                coins=coins-1000000
                alert("Orange skin bought. You can Choose it")
                load()
                save()
            }
            else{
                alert("Your dinos it not enough")
            }
        }
    }
})