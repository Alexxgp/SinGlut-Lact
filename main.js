document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");

  if (form) {
    const msg = document.createElement("p");
    msg.className = "form-msg";
    form.appendChild(msg);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        msg.textContent = "Completa todos los campos correctamente.";
        msg.style.color = "red";
        return;
      }

      msg.textContent = "¡Mensaje enviado! Gracias por contactar 🙂";
      msg.style.color = "green";
      form.reset();
    });
  }
  
  const themeBtn = document.getElementById("themeBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      themeBtn.textContent = document.body.classList.contains("dark")
        ? "Modo claro"
        : "Modo oscuro";
    });
  }

});
