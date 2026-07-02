const frames = [
    { label: "A", color: "#e53e3e" },
    { label: "B", color: "#38a169" },
    { label: "C", color: "#3182ce" }
];
let currentIndex = 0;

function render() {
    const frame = document.getElementById("frame");

    frame.textContent = frames[currentIndex].label;
    frame.style.background = frames[currentIndex].color;

    console.log("Rendering:", frames[currentIndex]); // debug
}

function nextFrame() {
    currentIndex = (currentIndex + 1) % frames.length;
    render();
}

function prevFrame() {
    currentIndex = (currentIndex - 1 + frames.length) % frames.length;
    render();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("nextBtn").addEventListener("click", nextFrame);
    document.getElementById("prevBtn").addEventListener("click", prevFrame);

    render();
});