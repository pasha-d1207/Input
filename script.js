var input = document.querySelector('#input')
var button = document.querySelector('#button')

function buttonHandler() {
  var div = document.createElement('div');
  document.body.appendChild(div)
  var message = input.value
  div.innerHTML = '<h2>' + message + '</h2>'
  var set = localStorage.setItem('InputText', input.value)
  document.querySelector('input.value').textContent = set
}

button.addEventListener('click', buttonHandler)

