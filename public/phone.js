document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('[href="#phone-link"]');

  links.forEach((link) => {
    if (window.PHONE_NUMBER) {
      // Set the actual tel link
      link.setAttribute("href", `tel:${window.PHONE_NUMBER}`);

      // Optional: If the link has no visible text, you can insert the number
      if (!link.textContent.trim()) {
        link.textContent = window.PHONE_NUMBER;
      }
    }
  });
});
