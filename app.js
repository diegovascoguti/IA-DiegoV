// Función para invertir una cadena de texto
function invertirCadena(texto) {
  return texto.split('').reverse().join('');
}

// Evento al hacer clic en el botón de invertir
document.getElementById('invertButton').addEventListener('click', function() {
  var inputText = document.getElementById('inputText').value;
  var outputText = invertirCadena(inputText);
  document.getElementById('outputText').innerText = outputText;
});

// Evento al hacer clic en el botón de guardar en LocalStorage
document.getElementById('saveButton').addEventListener('click', function() {
  var inputText = document.getElementById('inputText').value;
  var outputText = invertirCadena(inputText);
  // Guardar en LocalStorage
  localStorage.setItem(inputText, outputText);
  alert('Texto guardado en LocalStorage.');
});

// Evento al hacer clic en el botón de mostrar todo desde LocalStorage
document.getElementById('showAllButton').addEventListener('click', function() {
  var localStorageContent = '';
  // Recorrer todas las claves del LocalStorage
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    localStorageContent += key + ': ' + value + '\n';
  }
  document.getElementById('localStorageContent').value = localStorageContent;
});