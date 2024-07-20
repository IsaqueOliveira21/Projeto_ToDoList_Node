const switchPrazo = document.getElementById('prazo');
const divPrazo = document.getElementById('divPrazo');

switchPrazo.addEventListener('change', function(e) {
    if(switchPrazo.checked) {
        divPrazo.style.display = 'block';
    } else {
        divPrazo.style.display = 'none';
    }
});