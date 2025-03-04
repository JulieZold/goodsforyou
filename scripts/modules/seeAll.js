export function setupSeeAllDropdown() {
    const seeAllBtn = document.getElementById("see-all-btn");
    const seeAllDropdown = document.getElementById("see-all-dropdown");

    if (seeAllBtn && seeAllDropdown) {
        seeAllBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            seeAllDropdown.classList.toggle("hidden");

            // ตรวจสอบตำแหน่ง dropdown
            const dropdownRect = seeAllDropdown.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (dropdownRect.bottom > windowHeight) {
                seeAllDropdown.classList.add("bottom-full");
                seeAllDropdown.classList.remove("top-full");
            } else {
                seeAllDropdown.classList.add("top-full");
                seeAllDropdown.classList.remove("bottom-full");
            }
        });

        document.addEventListener("click", (event) => {
            if (!seeAllBtn.contains(event.target) && !seeAllDropdown.contains(event.target)) {
                seeAllDropdown.classList.add("hidden");
            }
        });
    }
}
