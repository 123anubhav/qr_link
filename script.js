
let qrcode = new QRCode(document.querySelector(".qrcode"), {
    width: 200,
    height: 200,
    colorDark: "#ffffff",
    colorLight: "#24243e",
    correctLevel: QRCode.CorrectLevel.H
});

// Initial QR code
//qrcode.makeCode("Welcome to Premium QR Generator!");
qrcode.makeCode("https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b");
// https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b

function generateQr() {
    const input = document.querySelector("input");
    if (!input.value.trim()) {
        showToast("Please enter some text or URL!", "error");
        return;
    }
    qrcode.makeCode(input.value);
    showToast("QR Code generated successfully!");
}

function downloadQR() {
    const qrImage = document.querySelector(".qrcode img");
    if (!qrImage) {
        showToast("Generate a QR code first!", "error");
        return;
    }

    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast("QR Code downloaded successfully!");
}

function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const icon = toast.querySelector("i");
    const text = toast.querySelector(".toast-message");
    
    icon.className = type === "error" ? 
        "fas fa-exclamation-circle" : 
        "fas fa-check-circle";
    
    text.textContent = message;
    toast.style.background = type === "error" ? 
        "#ff6b6b" : 
        "#00f2fe";
    toast.style.color = "white";
    
    toast.style.display = "flex";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

// Handle Enter key press
document.querySelector("input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        generateQr();
    }
});

// Add floating elements to background
document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelector('.circles');
    for(let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.style.left = Math.random() * 100 + '%';
        li.style.animationDelay = Math.random() * 5 + 's';
        li.style.animationDuration = (Math.random() * 10 + 15) + 's';
        circles.appendChild(li);
    }
});
