const scrollElement = document.querySelectorAll(".side-scroll")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    // console.log(entries[0].target)
},
{
    // threshold: 1,
    rootMargin: "50px",
})

scrollElement.forEach(e => {
    observer.observe(e)
})