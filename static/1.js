
const coinsp=document.getElementById("coins")
let coins=localStorage.getItem("coin")
const dino=document.getElementById("dino")
let data=JSON.parse(localStorage.getItem("data"))
const dinop=document.getElementById("dinop")

if (data==null){
    data={
        color:"green",
        blue:false,
        orange:false,
        pink:false
    }
    localStorage.setItem("data",JSON.stringify(data))
}


if (coins==null){
    localStorage.setItem("coin",0)
    coins=0
}
coinsp.innerHTML=coins
console.log(data)
dinop.src=`static/${data["color"]}.png`
dino.addEventListener("click",function(){
    coins++
    localStorage.setItem("coin",coins)
    coinsp.innerHTML=coins
})

