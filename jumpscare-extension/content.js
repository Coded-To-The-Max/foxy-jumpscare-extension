window.addEventListener("load", () => {
  if (Math.floor(Math.random() * 10000) === 0) {
    jumpscare();
  }
});

function jumpscare() {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("withered-foxy.gif");
  img.style.position = "fixed";
  img.style.top = 0;
  img.style.left = 0;
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.zIndex = 999999;
  img.style.objectFit = "cover";
  img.style.background = "transparent";
  img.style.transition = "opacity 1s ease"; // fade out
  img.style.opacity = "1";
  document.body.appendChild(img);

  // Play audio
  const audio = new Audio(chrome.runtime.getURL("withered-foxy-jumpscare.mp3"));
  audio.play().catch(() => console.log("Audio blocked"));

  // fade out
  setTimeout(() => {
    img.style.opacity = "0"; // triggers 1s fade
    setTimeout(() => img.remove(), 500); // remove after fade completes
  }, 1000);
}
