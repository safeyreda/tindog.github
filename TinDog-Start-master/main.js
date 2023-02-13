const footer = document.querySelector('#footer')

footer.addEventListener('click',(e) => {
    e.preventDefault();
    document.querySelector('#footer').style.background= ' pink';
});