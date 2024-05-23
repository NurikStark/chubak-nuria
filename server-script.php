<?php
// Проверяем, была ли отправлена форма
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = $_POST['name'];
    $number = $_POST['number'];
    $message = $_POST['message'];
    
    // Адрес электронной почты, на который нужно отправить сообщение
    $to = 'kadyrbekn318@mail.ru';
    
    // Тема письма
    $subject = 'Новое сообщение с формы обратной связи';
    
    // Содержание письма
    $email_content = "Имя: $name\n";
    $email_content .= "Number: $number\n\n";
    $email_content .= "Сообщение:\n$message\n";
    
    // Дополнительные заголовки
    $headers = "From: $name <$number>\r\nReply-To: $number";
    
    // Отправляем сообщение
    if (mail($to, $subject, $email_content, $headers)) {
        // Если сообщение успешно отправлено, выводим сообщение об успехе
        echo json_encode(array('status' => 'success'));
    } else {
        // Если произошла ошибка при отправке сообщения, выводим сообщение об ошибке
        echo json_encode(array('status' => 'error', 'message' => 'Произошла ошибка при отправке сообщения.'));
    }
} else {
    // Если форма не была отправлена, выводим сообщение об ошибке
    echo json_encode(array('status' => 'error', 'message' => 'Форма не была отправлена.'));
}
?>