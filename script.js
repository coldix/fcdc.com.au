/*
  # Project: First Class Drain Cleaning ~ fcdc.com.au
  # Author: Colin Dixon BSc, DipEd, Cert IV TAE
  # Contact: crdixon@gmail.com
  # Timestamp: 11/02/2026 02:20 PM AEDT
  # Version: 26.02.008
  # File Name: script.js
  # Description: Theme toggle + Dynamic Footer with Versioning.
*/

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Theme Logic ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeLabel = document.getElementById("theme-label");
  const themeIcon = themeToggleBtn
    ? themeToggleBtn.querySelector(".icon")
    : null;
  const htmlEl = document.documentElement;

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
    if (themeLabel)
      themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  }

  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = htmlEl.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  // --- 2. Dynamic Footer (Version & Date) ---
  const footerCredit = document.getElementById("footer-credit");

  if (footerCredit) {
    const versionMeta = document.querySelector('meta[name="version"]');
    const timeMeta = document.querySelector('meta[name="timestamp"]');

    const version = versionMeta ? versionMeta.content : "Unknown";
    const timestamp = timeMeta ? timeMeta.content : "Unknown";
    const year = new Date().getFullYear();

    footerCredit.innerHTML = `
      Updated: ${timestamp}<br>
      Version: ${version}<br>
      &copy; ${year} Colin Dixon | <a href="https://oze.au/" target="_blank" style="color:inherit; text-decoration:underline;">oze.au</a>
    `;
  }
});
