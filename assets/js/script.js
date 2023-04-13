let searchBox = document.querySelector('#search');
let menuWindow = document.querySelector('#menu-window');
let lupa = document.querySelector('#header-top img');
let menu = document.querySelector('.menu');

//Abrindo menu
menu.addEventListener('click', () => {

    if(menuWindow.style.right === "0vw"){
        menuWindow.style.right = '100vw'
    } else {
        menuWindow.style.right = "0vw";
    };
    closeWindow();
})
//abrindo pesquisador
lupa.addEventListener('click', () => {
    

    if(searchBox.style.right === '0vw'){
        searchBox.style.right = '100vw';
    } else {
        searchBox.style.right = '0vw'
    };
    closeWindow();

})

function closeWindow(){
    if(menuWindow.style.right === "0vw" ){
        searchBox.style.right = "100vw";
    } else if(searchBox.style.right === "0vw"){
        menuWindow.style.right = "100vw";
    };
}

//botão scroll para voltar ao início;
function closeScroll(){
    let scroll = document.querySelector('.Scroll');
    
    if(window.scrollY <= 400){
        scroll.style.display = "none";
    } else {
        scroll.style.display ="flex";
    };
   
}

setInterval(closeScroll, 500);

document.querySelector('.Scroll').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
});

//Sliders

let sliders = document.querySelectorAll('.sliders').length;
let arrowLeft = document.querySelector('.arrow-left img');
let arrowRight = document.querySelector('.arrow-right img');

let slideControl = 0;


document.querySelector('.container-slider').style.width = `calc(100vw * ${sliders})`;

//botão para esquerda

arrowLeft.addEventListener('click', () => {
    slideControl--;

    if(slideControl<0){
        slideControl = sliders - 1;
    }

    uptadeMargin();
});

//botão para direita
arrowRight.addEventListener('click', () => {
    slideControl++;

    if(slideControl>(sliders-1)){
        slideControl = 0;
    }

    uptadeMargin();
});

function uptadeMargin() {
    let sliderWidth = document.querySelector('.sliders').clientWidth;
    let newMargin = slideControl * sliderWidth;
    document.querySelector('.container-slider').style.marginLeft = 
    `-${newMargin}px`;
}


//função para rodar automatico;
function goNext(){
    slideControl++;

    if(slideControl>(sliders-1)){
        slideControl = 0;
    }

    uptadeMargin();
}

setInterval(goNext, 5000)