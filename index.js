// Функция для установки cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Дни * 24 часа * 60 минут * 60 секунд * 1000 мс
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения значения cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Функция для проверки существования cookie
function checkCookie() {
    let userCookie = getCookie("cookie_accepted"); // Проверяем cookie "cookie_accepted"
    let cookieBanner = document.getElementById("cookie_banner");

    if (userCookie !== "true") { // Если cookie не установлено или не равно "true"
        cookieBanner.style.display = "block"; // Показываем баннер
    } else {
        cookieBanner.style.display = "none"; // Скрываем баннер
    }
}

// При загрузке страницы вызываем checkCookie
window.onload = checkCookie;

// При нажатии на кнопку "Принять" устанавливаем cookie и скрываем баннер
document.getElementById("accept_cookie_btn").onclick = function() {
    setCookie("cookie_accepted", "true", 365); // Устанавливаем cookie на 365 дней
    document.getElementById("cookie_banner").style.display = "none";
};
