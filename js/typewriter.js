const intro = document.querySelector(".intro");
const txt =
`Marie Sohn er 24 år gammel og kommer fra Jelling i Jylland. 
Hun bor i en lejlighed i Viby sammen med sin kæreste, Line. 
I de seneste år har Marie studeret på Multimediedesigner uddannelsen på Erhvervsakademi Aarhus på Content Creation linjen.
På 4. semester vidste Marie at hun skulle i praktik, men forventede aldrig at befinde sig 
i den vilde realitet at skulle have sin praktik med begge fødder plantet i sneen, på kanten af verden -  Grønland.`;
const speed = 30;
let i = 0;

window.onload = function typeWriter() {
    if (i < txt.length) {
        intro.textContent += txt.charAt(i)
        i++;
        setTimeout(typeWriter, speed)
    }
}