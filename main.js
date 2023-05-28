import "./sass/main.scss";
import { Chart } from "chart.js/auto";

// Theme Switcher
const toggleBtn = document.querySelector(".theme__switcher");
const body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  body.classList.toggle("dark");
});

// Hamburger Menu Functions
const showMenu = (hamburgerMenu, navItems) => {
  const hamburger = document.querySelector(hamburgerMenu);
  const nav = document.querySelector(navItems);

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }
};

showMenu(".navbar--hamburger-menu", ".navbar");

// Charts

const ctxOne = document.getElementById("chart--1");
const ctxTwo = document.getElementById("chart--2");

const chartOne = new Chart(ctxOne, {
  type: "line",
  data: {
    labels: ["Fevrier", "Mars", "Avril", "Mai"],
    datasets: [
      {
        label: "Projets",
        data: [13, 19, 3, 30],
        borderWidth: 2,
        borderColor: "hsl(139, 59%, 55%)",
        tension: 0.3,
      },
      {
        label: "Followers",
        data: [2, 8, 7, 10, 11, 19],
        borderWidth: 2,
        borderColor: "hsl(358, 100%, 62%)",
        tension: 0.3,
      },
      {
        label: "Likes",
        data: [1, 6, 12, 11, 16, 18],
        borderWidth: 2,
        borderColor: "hsl(196, 100%, 53%)",
        tension: 0.3,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const chartTwo = new Chart(ctxTwo, {
  type: "doughnut",
  data: {
    labels: ["Mars", "Avril", "Mai"],
    datasets: [
      {
        label: "Projets",
        data: [13, 19, 3],
        borderWidth: 1,
        backgroundColor: [
          "hsl(139, 59%, 55%)",
          "hsl(358, 100%, 62%)",
          "hsl(196, 100%, 53%)",
        ],
      },
    ],
  },
});
