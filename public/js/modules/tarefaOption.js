const switchPrazo = document.getElementById('prazo');
const divPrazo = document.getElementById('divPrazo');

switchPrazo.addEventListener('change', function(e) {
    if(switchPrazo.checked) {
        divPrazo.classList.remove('d-none');
    } else {
        divPrazo.classList.add('d-none');
    }
});