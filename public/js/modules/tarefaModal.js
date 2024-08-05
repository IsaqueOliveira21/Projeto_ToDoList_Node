import { DateTime } from "luxon";

const tarefaModalLinks = document.querySelectorAll('.tarefa-modal');

tarefaModalLinks.forEach(link => {
    const titulo = link.getAttribute('data-titulo');
    const descricao = link.getAttribute('data-descricao');
    const id = link.getAttribute('data-id');
    const prazo = link.getAttribute('data-prazo');
    const statusTarefa = link.getAttribute('data-status');
    let status = '';
    let dataPrazo = '';
    
    if(prazo != null && prazo != '' && prazo != 'null') {
        const dataConvertida = new Date(prazo);
        dataPrazo = DateTime.fromJSDate(dataConvertida);

        if(dataPrazo < DateTime.now() && statusTarefa != 1) {
            status = 'danger';
        } else {
            status = 'primary';
        }
    }
    link.addEventListener('click', function(e) {
        e.preventDefault();
        Swal.fire({
            title: descricao,
            html: status != '' ? `<div class="alert alert-${status}" role="alert"><b>Prazo: </b>${dataPrazo.toFormat('dd/MM/yyyy')} ${status == 'danger' ? '(Atrasada)' : ''}</div>` : '',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Editar",
            denyButtonText: `Excluir`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              //Swal.fire("Saved!", "", "success");
              window.location.href = `/tarefas/editar/${id}`
            } else if (result.isDenied) {
              //Swal.fire("Changes are not saved", "", "info");
              window.location.href = `/tarefas/delete/${id}`
            }
        });
    });
});