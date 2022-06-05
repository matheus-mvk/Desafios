const colorInput = document.getElementById('color');

colorInput.addEventListener('input', ()=> {
    let color = colorInput.value;
    document.body.style.backgroundColor = color;
})