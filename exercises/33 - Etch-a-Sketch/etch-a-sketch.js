const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const btn = document.querySelector('.shake');
const MOVE_AMOUNT = 10;
let hue = 0;

const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        draw({ key: e.key });
        e.preventDefault();
    }
}

function draw({ key }) {
    hue += 1;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x = x + MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x = x - MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function clearCanvas() {
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", () => {
        canvas.classList.remove("shake");
    }, { once: true });
}

btn.addEventListener('click', clearCanvas);
window.addEventListener('keydown', handleKey);