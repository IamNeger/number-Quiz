// console.log("044");
// console.log(3);
// console.log("pubg");
// let nickname="044di.ma"
// console.log("your nickname:"+nickname);
// let russia="143млн"
// console.log("население рассии:"+russia);
// let USA="332млн"
// console.log("население США:"+USA);
// let Germany="83млн"
// console.log("население гирмании:"+Germany)

let point=document.getElementById("point")
let p=document.getElementById("p")
let hearts=document.getElementById("hearts")
let butto=document.getElementById("butto")
let hp=3
let secret=Math.floor(Math.random()*10+1)
let check=document.getElementById("check")
point.select()
check.onclick=function(event){
    event.preventDefault()
    point.select()
    if(point.value==secret){
        hearts.innerHTML="Ты лучший🎉🏆😎"
    }
    
    else{
        hp=hp-1
        hearts.innerHTML="❤".repeat(hp)
        if(secret>point.value) {
          p.innerHTML="Это число слишком маленькое"  
        }
        if (secret<point.value) {
            p.innerHTML="Это число слишком большое"
        }
        if(hp==0) {
        hearts.innerHTML="Ты проиграл👺😈👹🤬" 
        p.innerHTML="Секретное число было "+secret  
        }
       
    }
}
butto.onclick=function(event){
    event.preventDefault()
    hearts.innerHTML="❤❤❤"   
    hp=3
    point.value=""
    secret=Math.floor(Math.random()*10+1)
    p.innerHTML="Вводи число и нажимай проверить"
    point.select()
}