let observer = new IntersectionObserver(verificarVisibilidad,{
    threshold:.5
});
let skillsSection = document.querySelectorAll("[data-animation]")

skillsSection.forEach(element => {
    observer.observe(element)
});

function verificarVisibilidad(e){
    e.forEach(entry => {
        const animationName = entry.target.dataset.animation;
        if(entry.isIntersecting){
          entry.target.classList.add(animationName)
        }else{
            entry.target.classList.remove(animationName)
    
        }
    });
}



