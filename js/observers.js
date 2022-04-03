const scrollElements = document.querySelectorAll(".side-scroll")
const showObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.toggle("show")
            showObserver.unobserve(entry.target)
        }
    })
})

scrollElements.forEach(e => {
    showObserver.observe(e)
})

// Typewriter
class Typerwriter {
    constructor(el, options){
        this.el = el;
        this.word = el.dataset.title;
        this.speed = options?.speed || 200;
        this.delay = options?.delay || 1500;
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