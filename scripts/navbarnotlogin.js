document.addEventListener("DOMContentLoaded", function () {
    const notificationBtn = document.getElementById("notification-btn");
    const notificationPopup = document.getElementById("notification-popup");

    if (notificationBtn && notificationPopup) {
        notificationBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // ป้องกันการปิด popup ทันทีหลังคลิก
            notificationPopup.classList.toggle("hidden");
        });

        document.addEventListener("click", (event) => {
            if (!notificationBtn.contains(event.target) && !notificationPopup.contains(event.target)) {
                notificationPopup.classList.add("hidden");
            }
        });
    }
});
