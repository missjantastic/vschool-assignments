let form = document.pestForm;

function computeTotal(evt) {
    evt.preventDefault();
    const goombas = form.goombas.value;
    const bobombs = form.bobombs.value;
    const cheepCheeps = form.cheepCheeps.value;
    
    const total = (+goombas * 5) + (+bobombs * 7) + (+cheepCheeps * 11);

    const h1 = document.getElementById('total');
    h1.textContent = `Total: ${total} coins`;

}

form.addEventListener("submit", computeTotal);