var element = document.getElementById('element');
var showButton = document.getElementById('showButton');
var hideButton = document.getElementById('hideButton');

showButton.addEventListener('click', function() {
    element.style.display = 'block';
});

hideButton.addEventListener('click', function() {
    element.style.display = 'none';
});
