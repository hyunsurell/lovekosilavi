// script.js
document.getElementById('yesButton').addEventListener('click', function() {
    showResponse('I LOVE YOU MORE BABYYYYYY!♥︎ ( ˘ ³˘)');
});

document.getElementById('noButton').addEventListener('click', function() {
    showResponse('BABY BAKIT KA PO NAG-NO 😔 SO MEAN !!!!!');
});

function showResponse(message) {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = message;
    responseDiv.style.display = 'block';
}
