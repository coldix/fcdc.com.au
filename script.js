/* 
# Project: First Class Drain Cleaning ~ fcdc.com.au
# Author: Colin Dixon BSc, DipEd, Cert IV TAE
# Contact: crdixon@gmail.com
# Timestamp: 07/02/2026 08:45 PM AEDT
# Version: 26.02.002
# File Name: script.js
# Description: Handles theme toggling, footer updates, and background logic.
*/

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Theme Logic ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = themeToggleBtn.querySelector(".icon");
  const htmlEl = document.documentElement;

  // Check localStorage or default to dark
  const currentTheme = localStorage.getItem("theme") || "dark";
  htmlEl.setAttribute("data-theme", currentTheme);
  updateIcon(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    let newTheme =
      htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    // Sun for Dark mode (click to go light), Moon for Light mode
    themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  }

  // --- 2. Footer Auto-Update ---
  const footerCredit = document.querySelector(".footer-credit");
  if (footerCredit) {
    const year = new Date().getFullYear();
    // Standard requires preserving the link
    const existingLink = '<a href="https://oze.au/" target="_blank">oze.au</a>';
    footerCredit.innerHTML = `Website by Colin Dixon &copy; ${year} | ${existingLink}`;
  }

  // --- 3. Dynamic Background Logic ---
  // (Currently handled via CSS vars, but this function allows for future API-based backgrounds)
  function initBackground() {
    console.log("OzeGlass Background Loaded");
  }

  initBackground();
});
