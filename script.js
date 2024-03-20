window.onload = function() {
  showDescription('description1');
};

 // Função para mostrar a descrição correspondente ao clicar em uma opção
function showDescription(descriptionId) {
  // Esconde todas as descrições
  var descriptions = document.getElementsByClassName("description");
  for (var i = 0; i < descriptions.length; i++) {
      descriptions[i].style.display = "none";
  }
  // Mostra a descrição correspondente ao ID fornecido
  document.getElementById(descriptionId).style.display = "block";
}