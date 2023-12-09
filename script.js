const slider = document.querySelector('.slider');
const leftarrow = document.querySelector('.left');
const rightarrow = document.querySelector('.right');

var sectionIndex = 0;


rightarrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '% )';
});

leftarrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + '% )';
});