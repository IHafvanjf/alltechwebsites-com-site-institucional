<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST["nome"]);
    $email = htmlspecialchars($_POST["email"]);
    $telefone = htmlspecialchars($_POST["telefone"]);
    $assunto = htmlspecialchars($_POST["assunto"]);
    $mensagem = htmlspecialchars($_POST["mensagem"]);

    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'pedrolhf06@gmail.com'; // seu Gmail
        $mail->Password   = 'hbzc bmix julz ausn'; // use App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Remetente e destinatário
        $mail->setFrom($email, $nome);
        $mail->addAddress('pedrolhf06@gmail.com'); // para você

        // Conteúdo
        $mail->isHTML(true);
        $mail->Subject = "Mensagem do site - $assunto";
        $mail->Body    = "
            <strong>Nome:</strong> $nome<br>
            <strong>Email:</strong> $email<br>
            <strong>Telefone:</strong> $telefone<br><br>
            <strong>Mensagem:</strong><br>$mensagem
        ";

        $mail->send();
        header("Location: index.html?email=sucesso");
        exit();
    } catch (Exception $e) {
        header("Location: index.html?email=erro");
        exit();
    }
}
?>
