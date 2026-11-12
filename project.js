function update() {
    const end = new Date(2026, 10, 14);
    let t = Math.max(0, end - new Date());
    document.getElementById("d").textContent = Math.floor(t / 86400000);
    document.getElementById("h").textContent = Math.floor(t / 3600000) % 24;
    document.getElementById("m").textContent = Math.floor(t / 60000) % 60;
    document.getElementById("s").textContent = Math.floor(t / 1000) % 60;
    if (t === 0) document.getElementById("msg").textContent = "З Новим роком! 🎉";
}
update();
setInterval(update, 1000);