document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded!");

    // ฟังก์ชันแสดง/ซ่อน dropdown
    function setupDropdown(buttonId, dropdownId) {
        const button = document.getElementById(buttonId);
        const dropdown = document.getElementById(dropdownId);

        if (button && dropdown) {
            button.addEventListener("click", (event) => {
                event.stopPropagation();
                dropdown.classList.toggle("hidden");

                // ตรวจสอบตำแหน่งเฉพาะ dropdown "See All"
                if (dropdownId === "see-all-dropdown") {
                    adjustDropdownPosition(dropdown);
                }
            });

            document.addEventListener("click", (event) => {
                if (!button.contains(event.target) && !dropdown.contains(event.target)) {
                    dropdown.classList.add("hidden");
                }
            });
        }
    }

    // ฟังก์ชันปรับตำแหน่ง dropdown "See All"
    function adjustDropdownPosition(dropdown) {
        setTimeout(() => {
            const dropdownRect = dropdown.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (dropdownRect.bottom > windowHeight) {
                dropdown.classList.add("bottom-full");
                dropdown.classList.remove("top-full");
            } else {
                dropdown.classList.add("top-full");
                dropdown.classList.remove("bottom-full");
            }
        }, 10); // หน่วงเวลาเล็กน้อยเพื่อให้ dropdown แสดงก่อน
    }

    // ตั้งค่า dropdown ต่างๆ
    setupDropdown("notification-btn", "notification-popup");
    setupDropdown("language-btn", "language-dropdown");
    setupDropdown("categories-btn", "categories-dropdown");
    setupDropdown("see-all-btn", "see-all-dropdown");

    // ฟังก์ชันเปลี่ยนภาษา
    const currentLang = document.getElementById("current-lang");
    const currentFlag = document.getElementById("current-flag");
    const languageDropdown = document.getElementById("language-dropdown");

    window.changeLanguage = function (lang) {
        if (currentLang && currentFlag) {
            if (lang === "en") {
                currentLang.textContent = "English";
                currentFlag.src = "https://flagcdn.com/w40/us.png";
            } else if (lang === "th") {
                currentLang.textContent = "ไทย";
                currentFlag.src = "https://flagcdn.com/w40/th.png";
            }
        }
        if (languageDropdown) languageDropdown.classList.add("hidden");
    };
});
