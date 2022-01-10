
let toggleBtn = document.querySelector(".toggle-btn");
let bigWrapper = document.querySelector(".big-wrapper");
const main = document.querySelector(".main");

function toggleAnimation() {
   let dark = document.querySelector(".big-wrapper");
   dark.classList.toggle("dark");
    dark. classList.toggle("copy1");
   
   let light = document.querySelector(".big-wrapper");
   light.classList.toggle("light");
   dark.addEventListener('animationend', () => {
    dark.classList.remove("copy1");
});
    
}

toggleBtn.addEventListener('click', toggleAnimation);