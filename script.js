// script.js

document.addEventListener('DOMContentLoaded', () => {
  const faqForm = document.getElementById('faq-form');
  const faqList = document.getElementById('faq-list');

  // Carregar perguntas e respostas do LocalStorage
  const faqs = JSON.parse(localStorage.getItem('faqs')) || [];

  const renderFaqs = () => {
    faqList.innerHTML = '';
    faqs.forEach((faq, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Pergunta:</strong> ${faq.question}<br><strong>Resposta:</strong> ${faq.answer} <button onclick="deleteFaq(${index})">Excluir</button>`;
      li.classList.add('col-12', 'col-md-6');
      faqList.appendChild(li);
    });
  };

  const addFaq = (question, answer) => {
    faqs.push({ question, answer });
    localStorage.setItem('faqs', JSON.stringify(faqs));
    renderFaqs();
  };

  faqForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    addFaq(question, answer);
    faqForm.reset();
  });

  window.deleteFaq = (index) => {
    faqs.splice(index, 1);
    localStorage.setItem('faqs', JSON.stringify(faqs));
    renderFaqs();
  };

  renderFaqs();
});
