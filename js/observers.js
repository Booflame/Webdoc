const test = document.querySelectorAll(".test")
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

test.forEach(t => {
    observer.observe(t)
})