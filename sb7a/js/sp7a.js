let currentItem = 0;
let btns = document.querySelectorAll(".btn");
let number = document.querySelector(".number");

btns.forEach(function (element){
    element.addEventListener("click", function (e){
        let target = e.currentTarget.classList;
        if(target.contains('increase')){
            currentItem++
        }else if(target.contains("reset")) {
         currentItem = 0
        }
        number.textContent = currentItem;
    })
});
document.querySelector(".increase").addEventListener("click", function vibrate()
{
    navigator.vibrate(50);
})
    
