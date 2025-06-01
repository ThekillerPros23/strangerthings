document.addEventListener("DOMContentLoaded", () => {
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const answer = item.querySelector(".faq-answer");

      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });

    // Inicialmente oculta las respuestas
    const answer = button.parentElement.querySelector(".faq-answer");
    answer.style.display = "none";
  });
});
