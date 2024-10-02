function revisarFormulario() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
    const areaRevisao = document.getElementById("revisao");
    areaRevisao.innerHTML = `<h3>Revise suas informações</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
        <button onclick="confirmarEnvio()">Confirmar e Enviar</button>`;
    return false;
}

function confirmarEnvio() {
    alert("Obrigado por me escolher, em breve entrarei em contato!");
    document.getElementById("formulario-contato").submit();
}
