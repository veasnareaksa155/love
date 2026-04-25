const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// 👉 PUT YOUR IMAGE URL HERE
const imageURL = "/image/rinrin.jpg"; 

yesBtn.addEventListener("click", () => {
  // Clear screen
  document.body.innerHTML = `
    <div style="text-align:center; padding-top:50px; background:pink; height:100vh;">
      <h1 style="color:white;">Yay! 💖 I Love You Too 😍</h1>
      <img src="${imageURL}" style="width:300px; border-radius:20px; margin-top:20px;">
      <h2 style="color:white;">🎉🎉🎉 Celebration 🎉🎉🎉</h2>
    </div>
  `;
});

// Move NO button
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 300) - 150;
  const y = Math.floor(Math.random() * 300) - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
