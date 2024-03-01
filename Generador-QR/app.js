const QRContainer = document.getElementById('QRContainer');
const Form = document.getElementById('Form');
const QR = new QRCode(QRContainer);

Form.addEventListener('submit',(e) => {
    e.preventDefault();
    QR.makeCode(Form.Name.value + "," + Form.NoCta.value + "," + Form.Carrera.value);
}); 