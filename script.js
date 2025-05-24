const ssidInput = document.getElementById("ssid");
const passwordInput = document.getElementById("password");
const encryptionSelect = document.getElementById("encryption");
const qrDiv = document.getElementById("qrcode");

function generateQRCode() {

    const ssid = ssidInput.value.trim();
    const password = passwordInput.value.trim();
    const encryption = encryptionSelect.value;

    const qrData = `WIFI:T:${encryption};S:${ssid};P:${password};;`;

    qrDiv.innerHTML = "";

    new QRCode(qrDiv, {
        text: qrData,
        width: 200,
        height: 200
    });   


}

//Generate QR code when input changes
    [ssidInput, passwordInput, encryptionSelect].forEach(el => 
        el.addEventListener("input", generateQRCode)
    );

generateQRCode();