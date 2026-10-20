/**
 * Formulários para deploy estático na Vercel.
 * A Vercel não executa PHP. Conecte um endpoint/CRM antes de habilitar
 * o envio real; este script não finge que os dados foram armazenados.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      var action = (form.getAttribute('action') || '').trim();
      if (action && action !== '#' && !action.startsWith('javascript:')) return;

      event.preventDefault();
      alert('O formulário ainda precisa ser conectado a um serviço de recebimento de dados. Nenhuma informação foi enviada.');
    });
  });
});
