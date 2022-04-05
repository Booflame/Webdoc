// Typewriter
class Typerwriter {
    constructor(el, options){
        this.el = el;
        this.word = el.dataset.title;
        this.speed = options?.speed || 200;
        this.delay = options?.delay || 1000;
        this.initTyping();
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    async typewrite(word){
        this.el.classList.toggle('typing');
        await this.wait(this.delay);
        for (const letter of word.split('')) {
            this.el.textContent += letter;
            await this.wait(this.speed)
        }
    }

    async initTyping() {
        await this.typewrite(this.word);
        this.el.style.animation = 'none';
    }
}

const typeWriterObs = new IntersectionObserver( entries => {
    entries.forEach(entry => {  
        if (entry.isIntersecting) {
            new Typerwriter(entry.target)
            typeWriterObs.unobserve(entry.target)
        }
    })
})

document.querySelectorAll("[data-title]").forEach(element => {
    typeWriterObs.observe(element)
})

// Video
if(!!window.IntersectionObserver){
    let video = document.querySelector('.rejse');
    let isPaused = false; /* flag for auto-pausing of the video */
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
        if(entry.intersectionRatio!=1  && !video.paused){
          video.pause(); isPaused = true;
        }
        else if(isPaused) {video.play(); isPaused=false}

      });
    }, {threshold: 1});
    observer.observe(video);
}