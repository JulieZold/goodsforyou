document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // *** Notification Popup ***
    const notificationBtn = document.getElementById("notification-btn");
    const notificationPopup = document.getElementById("notification-popup");

    if (notificationBtn && notificationPopup) {
        notificationBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            notificationPopup.classList.toggle("hidden");
        });

        document.addEventListener("click", (event) => {
            if (!notificationBtn.contains(event.target) && !notificationPopup.contains(event.target)) {
                notificationPopup.classList.add("hidden");
            }
        });
    }

    // *** Language Dropdown ***
    const languageBtn = document.getElementById("language-btn");
    const languageDropdown = document.getElementById("language-dropdown");
    const currentLang = document.getElementById("current-lang");
    const currentFlag = document.getElementById("current-flag");

    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            languageDropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", (event) => {
            if (!languageBtn.contains(event.target) && !languageDropdown.contains(event.target)) {
                languageDropdown.classList.add("hidden");
            }
        });
    }

    // ฟังก์ชันเปลี่ยนภาษา
    window.changeLanguage = function (lang) {
        if (lang === 'en') {
            currentLang.textContent = "English";
            currentFlag.src = "https://flagcdn.com/w40/us.png";
        } else if (lang === 'th') {
            currentLang.textContent = "ไทย";
            currentFlag.src = "https://flagcdn.com/w40/th.png";
        }
        languageDropdown.classList.add("hidden");
    };
});
