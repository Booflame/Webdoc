const intro = document.querySelector(".intro");
const txt =
`Marie Sohn Madsen er 25 år gammel og kommer fra Vejle.
Hun bor sammen med sin kæreste, Line i Holme ved Århus. 
I de seneste år har Marie studeret på Multimediedesigner 
uddannelsen på Erhvervsakademi Aarhus på Content Creation linjen.
Nu er hun på 4. og sidste semester, hvor man på uddannelsen skal i praktik. 
Dog havde Marie aldrig forudset at skulle befinde sig i den vilde realitet 
at skulle have sin praktik med begge fødder plantet i sneen, på kanten af verden - på Grønland.`;
const speed = 30;
let i = 0;

window.onload = function typeWriter() {
    if (i < txt.length) {
        intro.textContent += txt.charAt(i)
        i++;
        setTimeout(typeWriter, speed)
    }
}