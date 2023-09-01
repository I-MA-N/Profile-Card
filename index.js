let pallateBtns = document.querySelectorAll('.pallete');

pallateBtns.forEach(pallateBtn => {
    pallateBtn.addEventListener('click' , e => {
        let btnMainColor = e.target.dataset.color;
        document.documentElement.setAttribute("style",`--main-color: ${btnMainColor};`);
    })
})