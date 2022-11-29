

function handleClick(event) {
    console.log("clicked", event.target.textContent);
    if (event.target.textContent === "Submit") {
        document.querySelector('');
    } else if (event.target.textContent === "Change Background Color") {
        document.body.classList.toggle('whiteBg');
    }
};

document.body.addEventListener('click', handleClick);
