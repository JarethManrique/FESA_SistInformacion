const QRContainer = document.getElementById('qrContainer');
const Form = document.getElementById('form');
const QR = new QRCode(QRContainer);

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Form.carrera.value == 1) {
        //console.log("ERROR: Selecciona una carrera")
        alert("Debes de seleccionar una carrera")
    } else{
        QR.makeCode(Form.name.value + "," + Form.noCta.value + "," + Form.carrera.value);
    }
    
});