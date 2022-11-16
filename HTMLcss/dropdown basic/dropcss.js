function show(select) {
    document.querySelector('.textBox').value = select;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function () {
    dropdown.classList.toggle('active');
}