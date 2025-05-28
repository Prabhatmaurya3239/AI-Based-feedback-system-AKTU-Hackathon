  setTimeout(function () {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => alert.classList.add('fade'));
    setTimeout(() => {
      alerts.forEach(alert => alert.remove());
    }, 500); 
  }, 4000); 

  window.addEventListener("load", function () {
    const loader = document.getElementById("globalLoader");
    if (loader) {
      loader.style.transition = "opacity 0.5s";
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 500); 
    }
  });