const navbar = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelector('.nav-links li')


window.addEventListener('scroll', () => {
    if(this.scrollY >=100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    } 
})

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})



// typed js
var typed = new Typed('#hero-titles', {
    strings:
    ['Creative Agency',
     'Trades Better',
     'Invest Better'],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 30,
    backDelay: 2000,
  });

  navLinksLi.forEach(li => li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))
    li.classList.add('active')

    hamburger.classList.remove(active)
    navLinks.classList.remove('active')
}))

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    durartion: 2500,
    delay: 400,
})

 // Add event listener to handle scroll events
 window.addEventListener('scroll', () => {
    // Get all sections and navbar links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';

    // Loop through sections to determine which is in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;  // Adjust offset for better detection
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links and add to the current one
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});



// // Scroll Reveal
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     durartion: 2500,
//     delay: 400,
// })

// sr.reveal('.')
// sr.reveal('.', {origin: 'top'})
// sr.reveal('.', {delay: 900})
// sr.reveal('.', {origin: 'left', delay: 800})
// sr.reveal('.', {delay: 300})
// sr.reveal('.', {origin: 'left'})
// sr.reveal('.', {origin: 'right'})
// sr.reveal('.', {origin: 'left'})
// sr.reveal('.', {delay: 900})

















