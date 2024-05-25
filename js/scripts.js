document.getElementById('verMaisBtn').addEventListener('click', function() {
    var textoComprimido = document.getElementById('textoComprimido');
    if (textoComprimido.style.height === "100px") {
        textoComprimido.style.height = "auto"; // Expandir o texto
        textoComprimido.style.overflow = "visible"; // Garantir que o texto completo seja exibido
        textoComprimido.style.display = "block";
        this.textContent = "Ver Menos"; // Alterar o texto do botão
    } else {
        textoComprimido.style.height = "100px"; // Comprimir o texto novamente
        textoComprimido.style.overflow = "hidden"; // Esconder o texto extra
        textoComprimido.style.display = "none";
        this.textContent = "Ver mais sobre a abordagem"; // Restaurar o texto do botão
    }
});