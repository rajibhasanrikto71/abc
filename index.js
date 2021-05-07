window.addEventListener('load',()=>{
    const music = document.querySelectorAll(".music");
    const taps = document.querySelectorAll(".taps div");

    taps.forEach((tap,index)=>{
        tap.addEventListener('click', function(){
            music[index].play();
        });
    });
});