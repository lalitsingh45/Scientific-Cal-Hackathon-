var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        screen.value += btntext;
    });
}
function sin() {
    let angle = parseFloat(document.getElementById("screen").value.trim());
    let radians = angle * Math.PI / 180;
    let result = Math.sin(radians);
    document.getElementById("screen").value = result;
}
function cos() {
    let angle = parseFloat(document.getElementById("screen").value.trim());
    let radians = angle * Math.PI / 180;
    let result = Math.cos(radians);
    document.getElementById("screen").value = result;
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function log() {
    screen.value = Math.log(screen.value);
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = 2.71828182846;
}
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}
function backspace() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}


function clearMatrix() {
    document.getElementById("screen").value = "";
}

function speedOfLight() {
    document.getElementById("screen").value = 299792458;
}

function gravitationalConstant() {
    document.getElementById("screen").value = 6.67430e-11;
}


function convertToMeters() {
    let value = parseFloat(document.getElementById("screen").value);
    document.getElementById("screen").value = value * 1000;
}

function convertToKilometers() {
    let value = parseFloat(document.getElementById("screen").value);
    document.getElementById("screen").value = value / 1000; 
}
function arcsin() {
    let value = parseFloat(document.getElementById("screen").value.trim());
    let result = Math.asin(value);
    result = (result * 180) / Math.PI;
    document.getElementById("screen").value = result;
}
function arccos() {
    let value = parseFloat(document.getElementById("screen").value.trim());
    let result = Math.acos(value);
    result = (result * 180) / Math.PI;
    document.getElementById("screen").value = result;
}

function arctan() {
    let value = parseFloat(document.getElementById("screen").value.trim());
    let result = Math.atan(value);
    result = (result * 180) / Math.PI;
    document.getElementById("screen").value = result;
}
function transpose() {
    let matrixInput = document.getElementById("screen").value.trim();
    let matrix = parseMatrixInput(matrixInput);
    let transposedMatrix = transposeMatrix(matrix);
    let transposedMatrixString = formatMatrix(transposedMatrix);
    document.getElementById("screen").value = transposedMatrixString;
}
function parseMatrixInput(input) {
    let rows = input.split(";");

    let matrix = rows.map(row => row.trim().split(/\s+/).map(Number));

    return matrix;
}
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];
    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }
    return result;
}
function formatMatrix(matrix) {
    let formattedMatrix = "";
    for (let i = 0; i < matrix.length; i++) {
        formattedMatrix += matrix[i].join("\t") + "\n";
    }
    return formattedMatrix.trim();
}
function determinant() {
    let matrixInput = document.getElementById("screen").value.trim();
    let matrix = parseMatrixInput(matrixInput);
    if (!isValidSquareMatrix(matrix)) {
        alert("Invalid matrix input! The matrix must be square to compute its determinant.");
        return;
    }
    let det = computeDeterminant(matrix);
    document.getElementById("screen").value = det;
}
function computeDeterminant(matrix) {
    return det;
}
function cube() {
    let num = parseFloat(document.getElementById("screen").value.trim());
    let result = Math.pow(num, 3);
    document.getElementById("screen").value = result;
}
function cubeRoot() {
    let num = parseFloat(document.getElementById("screen").value.trim());
    let result = Math.cbrt(num);
    document.getElementById("screen").value = result;
}
function toDegrees() {
    let radians = parseFloat(document.getElementById("screen").value.trim());
    let degrees = (radians * 180) / Math.PI;
    document.getElementById("screen").value = degrees;
}