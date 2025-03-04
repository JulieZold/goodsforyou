export function setupCategoriesDropdown() {
    console.log("setupCategoriesDropdown is running!");
    const categoriesBtn = document.getElementById("categories-btn");
    const categoriesDropdown = document.getElementById("categories-dropdown");

    if (categoriesBtn && categoriesDropdown) {
        categoriesBtn.addEventListener("click", function () {
            console.log("Categories button clicked!"); 
            categoriesDropdown.classList.toggle("hidden");
        });

        document.addEventListener("click", function (event) {
            if (!categoriesBtn.contains(event.target) && !categoriesDropdown.contains(event.target)) {
                categoriesDropdown.classList.add("hidden");
            }
        });
    } else {
        console.warn("Categories dropdown elements not found!");
    }
}
