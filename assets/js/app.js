

let main = document.querySelector("#main");
let crsr = document.querySelector(".cursor");

main.addEventListener("mousemove",function(hello){
crsr.style.left = hello.x+"px"
crsr.style.top = hello.y+"px"
})
