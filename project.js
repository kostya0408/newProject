function update() {
    const end = new Date(2026, 12, 1);
    let t = Math.max(0, end - new Date());
    document.getElementById("d").textContent = Math.floor(t / 86400000);
    document.getElementById("h").textContent = Math.floor(t / 3600000) % 24;
    document.getElementById("m").textContent = Math.floor(t / 60000) % 60;
    document.getElementById("s").textContent = Math.floor(t / 1000) % 60;
    if (t === 0) document.getElementById("msg").textContent = "З Новим роком! 🎉";
}
update();
setInterval(update, 1000);

const textCopy = document.getElementById("copyText");
const messageCopy = "📢 Поспішаю нагади що цього тижня вже зовсім скоро відбудеться [10]-а онлайн-зустріч ІТ спільноти StackSquad\n" +
    "◈ ━━━━━━━━━━ ❖ ━━━━━━━━━━ ◈\n" +
    "⚡️ Безкоштовний практикум: [Тема]!\n" +
    "Вже цього [четверга] розберемо по поличках головні тренди та факапи, яких варто уникати. Без води, лише чистий досвід та практика! 💼\n" +
    "📆 Коли: [19 листопада] [(четвер)] о [19:00]\n" +
    "🎙 Спікер: [Ім'я експерта], який знає про це все і навіть більше.\n" +
    "🎁 Бонус: усі учасники онлайн отримають корисний чек-лист у подарунок!\n" +
    "📌 Без реєстрації: [Посилання]\n" +
    "◈ ━━━━━━━━━━ ❖ ━━━━━━━━━━ ◈\n" +
    "✦ P.S. Вмикайте сповіщення, щоб не пропустити!";

textCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(messageCopy);
});