document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const handleScroll = () => {
        fadeInElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

function OpenProj()
{
    window.open("Proj.png")
}

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.Containner');

    containers.forEach(container => {
        const h1 = container.querySelector('h1');
        const con = container.querySelector('.Con');

        h1.addEventListener('mouseover', function() {
            con.classList.add('show');
        });
    });
});