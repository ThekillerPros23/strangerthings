document.addEventListener("DOMContentLoaded", () => {
  /* FAQ toggle con animación */
  const faqButtons = document.querySelectorAll(".faq-question");

  faqButtons.forEach(button => {
    button.addEventListener("click", () => {
      const item = button.parentElement;
      const answer = item.querySelector(".faq-answer");

      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        answer.style.display = "block";
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.transition = "max-height 0.3s ease";
      } else {
        answer.style.maxHeight = "0";
        setTimeout(() => {
          answer.style.display = "none";
        }, 300);
      }
    });

    const answer = button.parentElement.querySelector(".faq-answer");
    answer.style.display = "none";
    answer.style.overflow = "hidden";
    answer.style.maxHeight = "0";
  });

  /* Scroll reveal animación */
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  fadeInElements.forEach(el => observer.observe(el));

  /* Botón "Volver arriba" */
  const backToTop = document.createElement('button');
  backToTop.textContent = '↑';
  backToTop.style.position = 'fixed';
  backToTop.style.bottom = '20px';
  backToTop.style.right = '20px';
  backToTop.style.padding = '10px 14px';
  backToTop.style.fontSize = '18px';
  backToTop.style.border = 'none';
  backToTop.style.borderRadius = '50%';
  backToTop.style.backgroundColor = '#ff4e50';
  backToTop.style.color = '#fff';
  backToTop.style.cursor = 'pointer';
  backToTop.style.display = 'none';
  backToTop.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* Redirección automática después de cierto tiempo */
  const redirectAfterDelay = (url, seconds = 5) => {
    console.log(`Redirigiendo en ${seconds} segundos a: ${url}`);
    setTimeout(() => {
      window.location.href = url;
    }, seconds * 1000);
  };

  // Ejecuta la redirección a tu enlace
  redirectAfterDelay("https://www.profitableratecpm.com/nzamp2mg?key=fc572327fb37108a35bb5d6fee494961", 5);
});
