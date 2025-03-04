export function setupNavbar() {
    const isLoggedIn = localStorage.getItem("userToken") !== null;

    if (isLoggedIn) {
        setupNavbarWithLogin();
    } else {
        setupNavbarNotLogin();
    }
}

function setupNavbarWithLogin() {
    console.log("Navbar for logged-in users");
    // ใส่โค้ด Navbar ที่ใช้เมื่อ Login แล้ว
}

function setupNavbarNotLogin() {
    console.log("Navbar for guests");
    // ใส่โค้ด Navbar สำหรับผู้ใช้ที่ยังไม่ได้ Login
}
