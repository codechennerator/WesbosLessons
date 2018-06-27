document.addEventListener("DOMContentLoaded", (event) =>{
    function removeClass(e){
        if (e.propertyName !== "transform") return;
        this.classList.remove('playing');
    }
    function keyupHandler(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"`);

        if (!audio) return;

        audio.currentTime = 0; //rewind
        audio.play();

        key.classList.add('playing');
    }

    const keys = document.querySelectorAll('.key');
    document.addEventListener("keydown", keyupHandler, true);
    keys.forEach(element => element.addEventListener('transitionend', removeClass)); 
    
})