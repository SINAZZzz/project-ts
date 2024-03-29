// type
type Themes =  {
    background: string;
    color: string;
    primaryColor: string;
    glassColor?: string; 
}
type Input = string

const themes: Array<{
    background: string;
    color: string;
    primaryColor: string;
}> = [
    {
        background: "#1A1A2E",
        color: "#FFFFFF",
        primaryColor: "#0F3460",
    },
    {
        background: "#461220",
        color: "#FFFFFF",
        primaryColor: "#E94560",
    },
    {
        background: "#192A51",
        color: "#FFFFFF",
        primaryColor: "#967AA1",
    },
    {
        background: "#F7B267",
        color: "#000000",
        primaryColor: "#F4845F",
    },
    {
        background: "#F25F5C",
        color: "#000000",
        primaryColor: "#642B36",
    },
    {
        background: "#231F20",
        color: "#FFF",
        primaryColor: "#BB4430",
    },
];

const root = document.querySelector(":root") as HTMLElement | null;
const btnContainer = document.querySelector(".theme-btn-container") as HTMLElement | null;

// function

const setTheme = (theme:Themes) => {
    if (root) {
        root.style.setProperty("--background", theme.background);
        root.style.setProperty("--color", theme.color);
        root.style.setProperty("--primary-color", theme.primaryColor);

        if (theme.glassColor) {
            root.style.setProperty("--glass-color", theme.glassColor);
        }
    }
};

// function

const displayThemeButtons = () => {
    if (btnContainer) {
        themes.forEach((theme) => {
            const div = document.createElement("div");
            div.className = "theme-btn";
            div.style.cssText = `background: ${theme.background}; width: 25px; height: 25px`;
            btnContainer.appendChild(div);
            div.addEventListener("click", () => setTheme(theme));
        });
    }
};

displayThemeButtons();



const validateForm = () => {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    
    const username: Input = usernameInput.value;
    const password: Input = passwordInput.value;

    if (username === '' || password === '') {
        alert("Please fill in all fields")
        return false;
    }
    alert(`Welcome ${username}`)
    return true;
}
