// Add your real public profile URLs below before publishing.
// Leave a value as an empty string until you have created and verified that profile.
const profileLinks = [
  { name: "Upwork", description: "Freelance work profile", symbol: "U", url: "" },
  { name: "LinkedIn", description: "Professional network", symbol: "in", url: "" },
  { name: "JobStreet", description: "Job search profile", symbol: "J", url: "" },
  { name: "Indeed", description: "Resume and job profile", symbol: "i", url: "" },
  { name: "Glassdoor", description: "Career and company profile", symbol: "G", url: "" },
  { name: "GitHub", description: "Code and project portfolio", symbol: "⌘", url: "" }
];

const profileGrid = document.getElementById("profileGrid");
profileGrid.innerHTML = profileLinks.map(profile => {
  const active = Boolean(profile.url && profile.url.trim());
  const safeUrl = active ? profile.url.trim() : "#";
  return `<a class="profile-card ${active ? "" : "disabled"}" href="${safeUrl}"
    ${active ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true" onclick="return false"'}
    title="${active ? "Open " + profile.name : "Add your profile URL in assets/script.js"}">
    <span class="profile-symbol">${profile.symbol}</span>
    <span><strong>${profile.name}</strong><small>${active ? profile.description : "Profile link not added yet"}</small></span>
    <span class="profile-arrow">${active ? "↗" : "＋"}</span>
  </a>`;
}).join("");

document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
