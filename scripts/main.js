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

document.addEventListener("DOMContentLoaded", function () {
    const categoriesBtn = document.getElementById("categories-btn");
    const categoriesDropdown = document.getElementById("categories-dropdown");

    if (categoriesBtn && categoriesDropdown) {
        categoriesBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // ป้องกันการปิด dropdown ทันที
            categoriesDropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", (event) => {
            if (!categoriesBtn.contains(event.target) && !categoriesDropdown.contains(event.target)) {
                categoriesDropdown.classList.add("hidden");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const seeAllBtn = document.getElementById("see-all-btn"); // ปุ่ม See All
    const seeAllDropdown = document.getElementById("see-all-dropdown"); // Dropdown Menu

    // เมื่อกดปุ่ม See All ให้แสดงหรือซ่อน dropdown
    seeAllBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // ป้องกัน event จากการซ่อน dropdown ทันที
        seeAllDropdown.classList.toggle("hidden");

        // ตรวจสอบตำแหน่ง dropdown ว่าจะหลุดจอหรือไม่
        const dropdownRect = seeAllDropdown.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (dropdownRect.bottom > windowHeight) {
            // ถ้า Dropdown หลุดขอบล่างจอ ให้ย้ายขึ้นไปด้านบนแทน
            seeAllDropdown.classList.add("bottom-full");
            seeAllDropdown.classList.remove("top-full");
        } else {
            // ถ้าไม่หลุดขอบล่าง ให้แสดงตามปกติ
            seeAllDropdown.classList.add("top-full");
            seeAllDropdown.classList.remove("bottom-full");
        }
    });

    // ซ่อน dropdown เมื่อคลิกนอกเมนู
    document.addEventListener("click", function (event) {
        if (!seeAllBtn.contains(event.target) && !seeAllDropdown.contains(event.target)) {
            seeAllDropdown.classList.add("hidden");
        }
    });
});
