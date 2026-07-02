(function () {
  const canvas = document.getElementById("gold-rain");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const chars = "01アイウ";
  let columns = [];
  let fontSize = 16;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fontSize = Math.max(14, Math.floor(window.innerWidth / 72));
    columns = Array(Math.ceil(canvas.width / fontSize)).fill(1);
  }

  function draw() {
    ctx.fillStyle = "rgba(12, 9, 2, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gold = Math.random() > 0.5 ? "#ffd700" : "#d4a82a";
    ctx.fillStyle = gold;
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < columns.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = columns[i] * fontSize;
      ctx.fillText(text, x, y);
      if (y > canvas.height && Math.random() > 0.975) columns[i] = 0;
      columns[i]++;
    }
  }

  resize();
  window.addEventListener("resize", resize);
  setInterval(draw, 45);
})();
