document.body.classList.add("theme-dark");

const themeDropdown = document.getElementById("theme-toggle");

// Apply theme when dropdown changes
themeDropdown.addEventListener("change", () => {
    const selectedTheme = themeDropdown.value;
    document.body.classList.remove("theme-light", "theme-dark");
    document.body.classList.add(`theme-${selectedTheme}`);
});

