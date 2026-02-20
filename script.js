
const title = document.querySelector('h1');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  
  // Update background dynamically based on mouse position
  document.body.style.background = `radial-gradient(circle at ${x}% ${y}%, #222, #000)`;
});

title.addEventListener('click', () => {
  title.textContent = "Vibe Raised! 🚀";
  setTimeout(() => {
    title.textContent = "Hello World";
  }, 2000);
});