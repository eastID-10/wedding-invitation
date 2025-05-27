function toggleOpen() {
  console.log("Toggle open called");
  
  // Show your content
  document.getElementById("navbar")?.classList.remove("hidden");
  document.getElementById("main-body")?.classList.remove("overflow-hidden");
  document.getElementById("overlay")?.classList.add("hidden");
}

const toggleBtn = document.getElementById("openInvitation");
toggleBtn.addEventListener("click", toggleOpen);
if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleOpen);
} else {
  console.error("Button with ID 'openInvitation' not found.");
}
document.addEventListener("DOMContentLoaded", function () {});
