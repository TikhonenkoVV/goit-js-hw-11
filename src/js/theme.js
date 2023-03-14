export const colorTheme = value => {
    if (value === 'light') {
        document.body.style.setProperty('--first-color', '#6082c1');
        document.body.style.setProperty('--second-color', 'rgb(209 222 245)');
        document.body.style.setProperty('--third-color', '#315ba9');
    }
    if (value === 'dark') {
        document.body.style.setProperty('--first-color', '#282828');
        document.body.style.setProperty('--second-color', '#404040');
        document.body.style.setProperty('--third-color', '#1e1b1b');
    }
};
