document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para que possamos mostrar o pop-up

    // Exibe o pop-up com a mensagem
    alert('Sua sugestão foi enviada com sucesso!');

    // Limpa o formulário (opcional)
    event.target.reset();
});
