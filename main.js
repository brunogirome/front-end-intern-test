// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function () {
  // Elemento principal do formulário.
  const contactForm = document.getElementById('contact');

  // Campos do formulário.
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function () {
    // Variáveis dos valores correspondentes aos campos do formulário.
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // Variáveis armazenando "true" ou "false" caso o conteúdo do campo
    // for maior que zero (no caso, vazio ou não).
    const nameLength = nameValue.length > 0;
    const emailLength = emailValue.length > 0;
    const messageLength = messageValue.length > 0;

    //Verificando todos os valores de uma só vez com operador && (AND).
    if (nameLength && emailLength && messageLength) {
      window.alert(`
        Agradecemos o contato ${nameValue}!
        Iremos respondê-l@ pelo o seu email: ${emailValue}\n
        Conteúdo da sua mensagem: "${messageValue}"
        `);
    } else {
      // Variável que armazena e concatena a mensagem de erro que será
      // exibida caso o usuário deixe algum campo em branco.
      let alertMessage = '';

      if (nameLength == false)
        alertMessage += 'Por gentileza, digite seu nome.\n';

      if (!emailLength)
        alertMessage += 'Por gentileza, digite seu e-mail.\n';

      if (!messageLength)
        alertMessage += 'Por gentileza, digite uma mensagem.\n';

      window.alert(alertMessage);
    }
  });
})();
