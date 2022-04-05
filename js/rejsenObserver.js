 window.addEventListener('DOMContentLoaded', setup);

  function setup() {
      const options = {
          rootMargin: '0px 0px -200px 0px'
      }

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.add('showRejsen');
                  observer.unobserve(entry.target);
              } else {
                  return;
              }
          })
      },
      options); 

    const paras = document.querySelectorAll('.rejsenPara');
    paras.forEach(rejsenPara => observer.observe(rejsenPara));
    
    
  }

  const rejseObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting)
          {
              entry.target.classList.add('rejseShow');
              rejseObserver.unobserve(entry.target)
          }
      })
  }) 

    const video = document.querySelector('.rejse');
    rejseObserver.observe(video);