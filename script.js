function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const copySuccess = document.getElementById('copySuccess');
    copySuccess.style.opacity = '1';
    setTimeout(() => {
        copySuccess.style.opacity = '0';
    }, 1500);
}
copyToClipboard(text);
