document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('[href="#phone-link"]');

  links.forEach((link) => {
    link.setAttribute("href", `tel:${process.env.REACT_APP_PHONE_NUMBER}`);
    if (!link.textContent.trim()) link.textContent = process.env.REACT_APP_PHONE_NUMBER;
  });
});
