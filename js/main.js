document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.input-container input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            var label = input.nextElementSibling;
            if (input.value !== '') {
                label.style.opacity = '0';
            } else {
                label.style.opacity = '1';
            }
        });
    });

    var form = document.getElementById('myForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            var radio1 = document.getElementById('invation-info1');
            var radio2 = document.getElementById('invation-info2');
            
            if (!radio1.checked && !radio2.checked) {
                event.preventDefault();
                alert('Пожалуйста, выберите один из вариантов.');
            }
        });
    }
});
document.getElementById('submitButton').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'server-script.php'); // Укажите путь к вашему серверному скрипту
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Ваше сообщение отправлено!');
            form.reset();
        } else {
            alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
        }
    };
    xhr.send(new URLSearchParams(formData));
});