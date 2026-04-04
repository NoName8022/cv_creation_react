function getBrowserInfo() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        cookiesEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        screenWidth: screen.width,
        screenHeight: screen.height
    };
}

function saveInfo() {
    const info = getBrowserInfo();
    localStorage.setItem("browserInfo", JSON.stringify(info));
}

function displayInfo() {
    const data = JSON.parse(localStorage.getItem("browserInfo"));

    if (!data) return;

    const footer = document.querySelector("footer");

    footer.innerHTML = `
        <p><b>User Agent:</b> ${data.userAgent}</p>
        <p><b>Language:</b> ${data.language}</p>
        <p><b>Cookies:</b> ${data.cookiesEnabled}</p>
        <p><b>Online:</b> ${data.online}</p>
        <p><b>Screen:</b> ${data.screenWidth}x${data.screenHeight}</p>
    `;
}

saveInfo();
displayInfo();

async function loadComments() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/6/comments");
        const comments = await response.json();

        const container = document.getElementById("comments");

        comments.forEach(comment => {
            const div = document.createElement("div");
            div.classList.add("comment");

            div.innerHTML = `
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
                <small>${comment.email}</small>
            `;

            container.appendChild(div);
        });

    } catch (error) {
        console.error("Ти щось зламав:", error);
    }
}
loadComments();

setTimeout(() => {
    document.getElementById("modal").classList.remove("hidden");
}, 5000);

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
});

const form = document.getElementById("myForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    alert("Ваша форма була успішно відправлена");
    form.reset();
    document.getElementById("modal").classList.add("hidden")
});

const toggleBtn = document.getElementById("themeToggle");

function getTimeTheme() {
    const hour = new Date().getHours();
    return (hour >= 7 && hour < 21) ? "light" : "dark";
}

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        toggleBtn.textContent = "🌙";
    }
}

let savedTheme = localStorage.getItem("theme");
if (!savedTheme) {
    savedTheme = getTimeTheme();
}

applyTheme(savedTheme);

toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

