/* 
# Project: First Class Drain Cleaning ~ fcdc.com.au
# Author: Colin Dixon BSc, DipEd, Cert IV TAE
# Contact: crdixon@gmail.com
# Timestamp: 07/02/2026 10:05 PM AEDT
# Version: 26.02.003
# File Name: script.js
# Description: Handles theme toggling (icon + label), footer updates, and background init.
*/

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Theme Logic ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = themeToggleBtn
    ? themeToggleBtn.querySelector(".icon")
    : null;
  const themeLabel = document.getElementById("theme-label");
  const htmlEl = document.documentElement;

  function applyTheme(theme) {
    htmlEl.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Icon + label: show current mode (not "next mode")
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
    if (themeLabel)
      themeLabel.textContent = theme === "dark" ? "Dark" : "Light";
  }

  // Initialise: localStorage or default to dark
  const savedTheme = localStorage.getItem("theme");
  const initialTheme =
    savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
  applyTheme(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = htmlEl.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
    });
  }

  // --- 2. Footer Auto-Update ---
  const footerCredit = document.querySelector(".footer-credit");
  if (footerCredit) {
    const year = new Date().getFullYear();
    const existingLink =
      '<a href="https://oze.au/" target="_blank" rel="noopener">oze.au</a>';
    footerCredit.innerHTML = `Website by Colin Dixon &copy; ${year} | ${existingLink}`;
  }

  // --- 3. Background Init (future-proof hook) ---
  function initBackground() {
    // Background handled via CSS vars. Keep this hook for later (API-based backgrounds, seasonal swaps, etc.)
    // console.log("OzeGlass Background Loaded");
  }

  initBackground();
});
