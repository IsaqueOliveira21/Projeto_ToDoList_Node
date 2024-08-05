import axios from "axios";
let tarefas = document.querySelectorAll('.check-tarefa');

tarefas.forEach(tarefa => {
    tarefa.addEventListener('change', function(e) {
        const tarefaId = e.target.value;
        concluirTarefa(tarefaId);
    });
})


function concluirTarefa(id) {
    //console.log(id);
    axios.get(`/tarefas/concluir/tarefa/${id}`)
    .then(response => {
        window.location.href = '/tarefas/dashboard';
    })
    .catch(error => {
        console.log('error', error);
    });
}