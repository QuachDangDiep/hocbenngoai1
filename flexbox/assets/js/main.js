document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".header_list");

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("open"); // Thêm/xóa class "open"
    });
});
