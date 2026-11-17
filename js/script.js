

//Variáveis para os  dois botões de avançar e recuar:
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");


//Variável para os items:
const items = document.querySelectorAll(".item");


//Variável para os dots:
const dots = document.querySelectorAll(".dot");

//Variável para trocars os números:
const numberIndicator = document.querySelector(".numbers");

//Pegar a lista:
const list = document.querySelector(".list");



let active = 0;
const total = items.length;

let timer;



//Função de update:
//Primeiramente precisamos saber a direção: frente ou para trás:
function update(direction)
{
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active");

    if(direction > 0)
    {
        active = active + 1;
        if(active === total)
        {
            active = 0;
        }
    }

    else if(direction < 0)
    {
        active = active - 1;
        if(active < 0)
        {
            active = total - 1;
        }
    }

    items[active].classList.add("active");
    dots[active].classList.add("active");

    numberIndicator.textContent = String(active + 1).padStart(2, "0");


}

//Coloacar o timer:
clearInterval(timer);
timer =  setInterval(() => {
        update(1)
    }, 5000);

prevButton.addEventListener("click", () =>{
    update(-1);
})


nextButton.addEventListener("click", () =>{
    update(+1);
})

