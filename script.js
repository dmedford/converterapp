const pound = document.getElementById('pound-input');
const kilo = document.getElementById('kilo-input');
const convert = document.getElementById('convert-button');

function convertPoundsToKilos(number) {
    return number * 0.453592;
}

function outPutKilos() {
    return kilo.value = convertPoundsToKilos(pound.value);
}

pound.addEventListener('input', outPutKilos);